document.getElementById('theme').addEventListener('change', function() {
    if (this.value === 'tailwind') {
        window.location.href = '/public/new.html';
    } else {
        document.body.className = this.value;
    }
});