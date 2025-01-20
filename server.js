const express = require('express'); // express 模組，用於建立伺服器
const bodyParser = require('body-parser'); // body-parser 模組，用於解析 POST 請求
const bcrypt = require('bcrypt'); // bcrypt 模組，用於加密密碼
const path = require('path'); // path 模組
const db = require('./database'); // 確保這個檔案正確設置了 SQLite 資料庫
const { url } = require('inspector');
const app = express();
const PORT = 8080;
const disallowedIds = ['public', 'admin', 'test'];

// const HOST = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/'));
});

// 從請求的 id 參數回傳短網址
// const generateShortUrl = (id) => {
//     return `https://${HOST}/${id}`;

// };

// 接受 POST 請求的伺服器
app.post('/shorten', (req, res) => {
    const targetUrl = req.body.url; // {"url": "https://long-url", "id": "short-id", "password": "password-for-deletion"}
    const customId = req.body.id;
    const password = req.body.password;

    if (!customId) {
        return res.status(400).send('ID is required\n');
    }

    if (!targetUrl) {
        return res.status(400).send('URL is required\n');
    }

    if (!password) {
        return res.status(400).send('Password is required\n');
    }

    if (disallowedIds.includes(customId.toLowerCase())) {
        return res.status(400).send(`The ID "${customId}" is not allowed\n`);
    }

    // 檢查 ID 是否已存在
    db.get("SELECT * FROM urls WHERE custom_id = ?", [customId], (err, row) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        if (row) {
            return res.status(400).send('ID already exists');
        }

        // 將短網址的 ID 和哈希密碼存入資料庫
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).send(err.message);
            }

            db.run("INSERT INTO urls (target_url, custom_id, password_hash) VALUES (?, ?, ?)", [targetUrl, customId, hash], function(err) {
                if (err) {
                    return res.status(500).send(err.message);
                }
                // const shortUrl = generateShortUrl(customId);
                // res.json({ shortUrl: shortUrl });
                res.json({url: targetUrl, id: customId, password: password});
            });
        });
    });
});

// GET 請求：重新導向
app.get('/:id', (req, res) => {
    const id = req.params.id;

    db.get("SELECT target_url FROM urls WHERE custom_id = ?", [id], (err, row) => {
        if (err || !row) {
            return res.status(404).send('Not found');
        }
        res.redirect(row.target_url);
    });
});

// DELETE 請求：刪除短網址
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const password = req.body.password;

    if (!password) {
        return res.status(400).send('Password is required\n');
    }

    db.get("SELECT password_hash FROM urls WHERE custom_id = ?", [id], (err, row) => {
        if (err || !row) {
            return res.status(404).send('Not found');
        }

        // 驗證密碼
        bcrypt.compare(password, row.password_hash, (err, isMatch) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (!isMatch) {
                return res.status(403).send('Invalid password\n');
            }

            // 刪除短網址
            db.run("DELETE FROM urls WHERE custom_id = ?", [id], (err) => {
                if (err) {
                    return res.status(500).send(err.message);
                }
                res.send('Short URL deleted successfully\n');
            });
        });
    });
});

// 啟動伺服器
app.listen(PORT, () => {
    // console.log(`Server is running on http://${HOST}:${PORT}`);
    console.log("Server is now running...");
});
