const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');
// _.thottle(함수, 시간) <쓰는 이유는 함수를 초당 발생시키는데 이것으로 
//브라우저가 무거워질수도잇다. 그래서 thottle을 사용하여 시간설정을 두고 함수를 발생시키게 하는것
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){ //scroll위치가 500크면?
        //배지 숨기기
        // gsap.to(요소, 시간, 옵션);
        gsap.to(badgeEl, .6,{
            opacity:0,
            display:'none'//<css값의 문자열은 ''안에다 표시해야한다.
        });
        //버튼 보이기
        gsap.to(toTopEl, .2, {
            opacity:1,
            x:0
        });
    }else{
        //배지 보이기
        gsap.to(badgeEl, .6,{
            opacity:1,
            display:'block'
        });
        //버튼숨기기
        gsap.to(toTopEl, .2, {
            opacity:0,
            x:100
        });
        
    }
},300));


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo:0
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    // gsap.to(요소, 시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index +1 ) *.7,
        opacity:1,
    })
    
});


// new Swiper(선택자, 옵션};
new Swiper('.notice-line .swiper', {
    direction:'vertical',
    autoplay:true,
    loop:true
});

new Swiper('.promotion .swiper', {
    slidesPerView:3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides:true, //1번 슬라이드가 가운데로 보이게 만든다.
    loop:true,
    autoplay: {
        delay : 5000
    },
    pagination :{
        el : '.promotion .swiper-pagination', //페이지번호 요소 선택자
        clickable:true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation:{
        nextEl: '.promotion .swiper-button-next',
        prevEl: '.promotion .swiper-button-prev',
    }
});

new Swiper('.awards .swiper',{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        nextEl: '.awards .swiper-button-next',
        prevEl: '.awards .swiper-button-prev',
    }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add('hide');
    }else{
        //보임처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메이션 동작 시간 
        { //옵션
            y: size,
            repeat: -1, //무한반복
            yoyo: true,
            ease: Power1.easeInOut,
            delay:random(0, delay)
    });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
//toggle-promtion

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({ // 감시할 장면(Scene)을 추가
            triggerElement: spyEl,/// 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
        }) //Scene()특정한 요소를 감사하는 옵션을 지정하는 메소드
        .setClassToggle(spyEl,'show') // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
        //체이닝형태 메소드작성
});

// footer

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 
//textContent란 해당하는 인수안에 들어있는 text의 값을 알아내거나 지정하는 용도로 쓰인다.


