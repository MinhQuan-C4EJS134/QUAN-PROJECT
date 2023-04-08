//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    loop: true,
});


let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});