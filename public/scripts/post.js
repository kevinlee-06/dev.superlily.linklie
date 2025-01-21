document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    const data = {
        url: url,
        id: id,
        password: password
    };

    fetch('/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            document.getElementById('shortenedUrl').value = "";
            return response.text().then(text => {
                throw new Error(text);
            });
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('responseMessage').value = JSON.stringify(data, null, 2);
        const host = window.location.host;
        const protocol = window.location.protocol;
        document.getElementById('shortenedUrl').value = `${protocol}//${host}/${data.id}`;
        document.getElementById('response-h2').scrollIntoView({ behavior: 'smooth' });
    })
    .catch(error => {
        document.getElementById('responseMessage').value = 'Error: ' + error.message;
        document.getElementById('response-h2').scrollIntoView({ behavior: 'smooth' });
    });
});