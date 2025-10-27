function startCamera() {
    fetch('/start', { method: 'POST' });
}

function stopCamera() {
    fetch('/stop', { method: 'POST' });
}