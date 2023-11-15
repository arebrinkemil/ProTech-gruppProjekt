// const navToggle = document.querySelector("#navToggle");
// const navClosedIcon = document.querySelector("#navClosed");
// const navOpenIcon = document.querySelector("#navOpen");
// const navIcon = document.querySelectorAll(".navIcon");
// const nav = document.querySelector("nav");

// navToggle.addEventListener("click", () => {
//   nav.classList.toggle("open");
//   navIcon.forEach((icon) => {
//     icon.classList.toggle("hidden");
//   });
// });

// window.addEventListener(
//   "resize",
//   () => {
//     if (document.body.clientWidth > 720) {
//       nav.classList.remove("open");
//       navIcon.forEach((icon) => {
//         icon.classList.remove("hidden");
//       });
//       navOpenIcon.classList.add("hidden");
//     }
//   },
//   { passive: false }
// );

// $(document).on("scroll", function () {
//   var pageTop = $(document).scrollTop();
//   var pageBottom = pageTop + $(window).height();
//   var tags = $(".tag");

//   for (var i = 0; i < tags.length; i++) {
//     var tag = tags[i];

//     if ($(tag).position().top < pageBottom) {
//       $(tag).addClass("visible");
//     } else {
//       $(tag).removeClass("visible");
//     }
//   }
// });
