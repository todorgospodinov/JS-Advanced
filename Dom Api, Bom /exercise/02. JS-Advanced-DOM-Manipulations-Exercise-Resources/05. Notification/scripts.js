function notify(message) {
    let notifier = document.getElementById('notification');
    notifier.textContent = message;
    notifier.style.display = 'block' 
    setTimeout(myStopFunction, 2000);

    function myStopFunction() {
        notifier.style.display = 'none';
    }
}