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

const startTime = Date.now();

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    var loadingScreen = document.querySelector("#loadingScreen");

    var elapsedTime = Date.now() - startTime;

    if (elapsedTime < 5000) {
      setTimeout(function () {
        loadingScreen.classList.add("slide-up");
        setTimeout(function () {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }, 500);
      }, 2000 - elapsedTime);
    } else {
      loadingScreen.classList.add("slide-up");
      setTimeout(function () {
        loadingScreen.parentNode.removeChild(loadingScreen);
      }, 500);
    }
  }
};
