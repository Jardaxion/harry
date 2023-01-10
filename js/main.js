$(document).ready(() => {
    //Слайдер
    let slider = new Swiper('.main__slider-wrp', {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 42,
        navigation: {
            nextEl: '.main__slider-rightButton',
            prevEl: '.main__slider-leftButton',
        },
        pagination: {
            el: '.main__slider-pagination',
            clickable: true,
        }
    })
    //FAQ
    $('.js-close-open-question').on('click', function(){
        $(this).toggleClass('select');

        $(this).parent().next().slideToggle();
    })
    //Мобильное меню
    //Открытие
    $('.js-open-menu').on('click', () => {
        $('.header__menu').addClass('active');
        $('body').addClass('noScroll');
    })
    //Закрытие
    $('.js-close-menu').on('click', () =>{
        $('.header__menu').removeClass('active');
        $('body').removeClass('noScroll');
    })
})