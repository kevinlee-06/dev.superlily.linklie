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
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('responseMessage').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Error: ' + error.message;
    });
});


document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const deleteId = document.getElementById('deleteId').value;
    const deletePassword = document.getElementById('deletePassword').value;

    const data = {
        password: deletePassword
    };

    fetch(`/${deleteId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
    })
    .then(message => {
        document.getElementById('responseMessage').textContent = message;
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Error: ' + error.message;
    });
});
