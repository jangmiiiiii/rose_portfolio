// detail design slide 시작
var mySwiper = new Swiper('#detail_slide ', {
    slidesPerView:2,
    spaceBetween:30,
    //페이지 이전/다음 버튼
    navigation: {
        nextEl: '#detail_btn2',
        prevEl: '#detail_btn1',
    },
})
// detail design slide 끝

//카드뉴스 slide 시작
const cardr_swiper = new Swiper('#card_slider', {
    slidesPerView:1,
    spaceBetween:30,
    //페이지 이전/다음 버튼
    navigation: {
        nextEl: '#cardr_btn_left',
        prevEl: '#cardr_btn_right',
    },
})
const cardl_swiper = new Swiper('#card_slidel', {
    slidesPerView:1,
    spaceBetween:30,
    //페이지 이전/다음 버튼
    navigation: {
        prevEl: '#cardl_btn_left',
        nextEl: '#cardl_btn_right',
    },
})
//카드뉴스 slide 끝
//web project slide 시작
const web_swiper = new Swiper('#web_slide', {
    slidesPerView:1,
    spaceBetween:30,
})

//web project slide 끝

    // apc  스와이프 슬라이드
    var swiper = new Swiper(".project_slide1", {
        direction: "vertical",
        loop:true,
        loopAdditionalSlides: 1,
        spaceBetween:-1,
        speed : 1400,
        autoplay: {
            delay: 800,
            disableOnInteraction: false,
        },
        
    });