const myChannelSlider = new Swiper('.my-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1700: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1060: {
      slidesPerView: 3
    },
    820: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#my-channel-button-next',
    prevEl: '#my-channel-button-prev',
  }
});

const recommendedSlider = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#recommended-button-next',
    prevEl: '#recommended-button-prev',
  },
});

const recommendedChannelSlider = new Swiper('.recommended-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1700: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1060: {
      slidesPerView: 3
    },
    820: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#recommendedslider-button-next',
    prevEl: '#recommendedslider-button-prev',
  },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});


if (document.documentElement.scrollWidth <= 640) {
  myChannelSlider.destroy();
  recommendedSlider.destroy();
  recommendedChannelSlider.destroy();
}