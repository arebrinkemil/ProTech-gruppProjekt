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

var glideSingle = new Glide(".single", {
  type: "slider",
  autoplay: 400000,
  perView: 1,
});

glideSingle.mount();

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
      }, 1000 - elapsedTime);
    } else {
      loadingScreen.classList.add("slide-up");
      setTimeout(function () {
        loadingScreen.parentNode.removeChild(loadingScreen);
      }, 500);
    }
  }
};

scrollTo = (element) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
  console;
};

document.getElementById("arrow-down").addEventListener("click", () => {
  scrollTo(document.querySelector(".section2"));
});

document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll("#section");
  let isScrolling;

  window.addEventListener(
    "scroll",
    () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        let closestSection;
        let minimumDistance = Infinity;

        sections.forEach((section) => {
          const distance = Math.abs(section.getBoundingClientRect().top);
          if (distance < minimumDistance) {
            minimumDistance = distance;
            closestSection = section;
          }
        });

        closestSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 20); // Adjust delay as needed
    },
    false
  );
});
