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
    },
  },
  peek: {
    before: 0,
    after: 50,
  },
});

glideMulti1.mount();
