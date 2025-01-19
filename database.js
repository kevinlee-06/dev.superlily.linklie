const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./urls.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS urls (id INTEGER PRIMARY KEY AUTOINCREMENT, target_url TEXT, custom_id TEXT, password_hash TEXT)");
});

module.exports = db;
