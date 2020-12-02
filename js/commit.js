$(function () {
    // banner图
    var bannerSwiper = new Swiper(".banner-swiper", {
        loop: true,
        autoplay: true,
        speed: 1000,
        pagination: {
            el: '.banner-swiper .swiper-pagination',
        },
        // effect: 'cube',
    })

    // 新闻
    // banner图
    var newSwiper = new Swiper(".index_new_swiper", {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 3,
        navigation: {
            nextEl: '.index_new_swiper .swiper-button-next',
            prevEl: '.index_new_swiper .swiper-button-prev',
        },
        // effect: 'cube',
    })

     // 关于我们
     var newSwiper = new Swiper(".about_info_content", {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 3,
        pagination: {
            el: '.about_info_content .swiper-pagination',
        },
        // effect: 'cube',
    })

    // 新闻咨询
    new Swiper('.slider-open', {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 3,
        pagination: {
            el: '.slider-open .swiper-pagination'
        }
    })

    new Swiper('.news-slider', {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 3,
        navigation: {
            nextEl: '.news-slider .swiper-button-next',
            prevEl: '.news-slider .swiper-button-prev',
        },
    })

    var coreSwiper = new Swiper('.service_swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
      });
})