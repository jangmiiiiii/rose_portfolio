

//마우스 움직일 때 이벤트
const mouseImg = document.querySelector('#mouse')
console.log(mouseImg)
window.addEventListener('mousemove',function(e){ //매개변수e 를 작성시 마우스 움직일때 움직이는 정보가 담김
    // console.log(e)
    mouseImg.style.left = `${e.clientX}px`
    mouseImg.style.top = `${e.clientY}px`
})

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
    //페이지 이전/다음 버튼
    navigation: {
        prevEl: '#web_btn1',
        nextEl: '#web_btn2',
    },
})
//web project slide 끝

// apc 슬라이드 시작
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
// apc 슬라이드 끝

//sns 팝업 시작
const sns_popup = document.querySelector('#sns_popup')
const sns_popup_contents = document.querySelector('#sns_popup > .contents')
const sns_img = document.querySelector('#sns_popup > .contents > img')
const sns_list = document.querySelectorAll('.sns .contents a')

sns_popup.style.display = 'none'
sns_list[0].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns1.jpg'
})
sns_list[1].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns2.jpg'
})
sns_list[2].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns3.jpg'
})
sns_list[3].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns9.jpg'
})
sns_list[4].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns5.jpg'
})
sns_list[5].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns6.jpg'
})
sns_list[6].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns7.jpg'
})
sns_list[7].addEventListener('click',function(e){
    e.preventDefault()
    sns_popup.style.display = 'block'
    sns_img.src = '../images/sns_design/sns4.jpg'
})
// ------------------- sns 팝업 창 닫기
sns_popup.addEventListener('click',function(){
    sns_popup.style.display = 'none'
})
// sns 팝업 끝

//banner 팝업 시작
const banner_popup = document.querySelector('#banner_popup')
const banner_popup_contents = document.querySelector('#banner_popup > .contents')
const banner_img = document.querySelector('#banner_popup > .contents > img')
const banner_list = document.querySelectorAll('.banner .contents a')

banner_popup.style.display = 'none'

banner_list[0].addEventListener('click',function(e){
    e.preventDefault()
    banner_popup.style.display = 'block'
    banner_img.src = '../images/banner_design/banner1.jpg'
})
banner_list[1].addEventListener('click',function(e){
    e.preventDefault()
    banner_popup.style.display = 'block'
    banner_img.src = '../images/banner_design/banner2.jpg'
})

// ------------------- banner 팝업 창 닫기
banner_popup.addEventListener('click',function(){
    banner_popup.style.display = 'none'
})
//banner 팝업 끝

//detail 팝업 시작
const detail_popup = document.querySelector('#detail_popup')
const detail_popup_contents = document.querySelector('#detail_popup > .contents')
const detail_img = document.querySelector('#detail_popup > .contents > img')
const detail_list = document.querySelectorAll('.detail #detail_slide .detail_contents .swiper-slide')

detail_popup.style.display = 'none'

detail_list[0].addEventListener('click',function(e){
    e.preventDefault()
    detail_popup.style.display = 'block'
    detail_img.src = '../images/detail_design/detail1.jpg'
})
detail_list[1].addEventListener('click',function(e){
    e.preventDefault()
    detail_popup.style.display = 'block'
    detail_img.src = '../images/detail_design/detail2.jpg'
})
detail_list[2].addEventListener('click',function(e){
    e.preventDefault()
    detail_popup.style.display = 'block'
    detail_img.src = '../images/detail_design/detail3.jpg'
})

// ------------------- banner 팝업 창 닫기
detail_popup.addEventListener('click',function(){
    detail_popup.style.display = 'none'
})
//banner 팝업 끝

