document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to

  const targetDate = Date.parse('Feb 7, 2025 00:00:00') / 1000;

  // Set up FlipDown
  var flipdown = new FlipDown(targetDate,{
    theme: "light",
  })

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  
  
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});