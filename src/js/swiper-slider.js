const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
  
var a_swiper = new Swiper('.accesories-swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 6,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 6,
            },
            spaceBetween: 38,
          },

          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: {
              rows: 4,
            },
            spaceBetween: 20,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });