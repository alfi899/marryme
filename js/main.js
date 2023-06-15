document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date("Jun 5, 2024 15:37:25").getTime() / 1000) + (86400 * 2) + 1;
  // var countDownDate = new Date("Jun 9, 2024 16:30:00").getTime();

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  /*var interval = setInterval(() => {
    let body = document.body;
    // body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);*/

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});