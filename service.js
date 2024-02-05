window.onload = function () {
    var secondsLeft = 600; 
    function updateTimer() {
        var minutes = Math.floor(secondsLeft / 60);
        var seconds = secondsLeft % 60;

        document.getElementById('countdownTimer').innerText = minutes + ' minutes ' + seconds + ' seconds ';
        secondsLeft--;

        if (secondsLeft < 0) {
            window.location.href = 'services.html';
        } else {
            setTimeout(updateTimer, 1000); 
        }
    }
    updateTimer();
};

