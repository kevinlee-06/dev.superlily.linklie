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