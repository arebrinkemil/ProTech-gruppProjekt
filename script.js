var glideMulti1 = new Glide(".multi1", {
  type: "carousel",
  autoplay: 3500,
  perView: 3,
  breakpoints: {
    1400: {
      perView: 2,
    },
    800: {
      perView: 1,
      peek: {
        before: 0,
        after: 50,
      },
    },
    350: {
      perView: 1,
      peek: {
        before: 0,
        after: 0,
      },
    },
  },
});

glideMulti1.mount();

// Store the time when the script is first run
const startTime = Date.now();

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    var loadingScreen = document.querySelector("#loadingScreen");

    // Calculate how long the loading screen has been displayed
    var elapsedTime = Date.now() - startTime;

    // Check if the elapsed time is less than 5 seconds
    if (elapsedTime < 5000) {
      // Set a timeout to make up the remaining time
      setTimeout(function () {
        loadingScreen.classList.add("slide-up");
        setTimeout(function () {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }, 500); // match this with your CSS animation duration
      }, 5000 - elapsedTime);
    } else {
      // If 5 seconds have already passed, hide the loading screen immediately
      loadingScreen.classList.add("slide-up");
      setTimeout(function () {
        loadingScreen.parentNode.removeChild(loadingScreen);
      }, 500); // match this with your CSS animation duration
    }
  }
};
