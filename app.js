// EID UL ADHA DAYS

var countdownElement = document.getElementById('countdown');
function updateCountdown() {
    var eidDate = new Date('2024-06-16T00:00:00');
    var currentDate = new Date();

    var timeDifference = eidDate - currentDate;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
