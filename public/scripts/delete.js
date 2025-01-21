document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const deleteId = document.getElementById('deleteId').value;
    const deletePassword = document.getElementById('deletePassword').value;

    const data = {
        password: deletePassword
    };

    document.getElementById('shortenedUrl').value = "";

    fetch(`/${deleteId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.text();
    })
    .then(message => {
        document.getElementById('responseMessage').value = message;
        document.getElementById('response-h2').scrollIntoView({ behavior: 'smooth' });
    })
    .catch(error => {
        document.getElementById('responseMessage').value = 'Error: ' + error.message;
        document.getElementById('response-h2').scrollIntoView({ behavior: 'smooth' });
    });
});