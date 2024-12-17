const searchIcon  = document.querySelector(".search-icon");
    const searchArea = document.querySelector(".search-area");
    searchIcon.addEventListener("click", () => {
        searchArea.classList.toggle("hidden");
    })
    const notiIcon  = document.querySelector(".noti-icon");
    const notiArea = document.querySelector(".noti-area");
    notiIcon.addEventListener("click", () => {
        notiArea.classList.toggle("hidden");
    })


const listBg = [
    "./asset/img/banner/banner1.png",
    "./asset/img/banner/banner2.png",
    "./asset/img/banner/banner3.png",
    "./asset/img/banner/banner4.png",
    "./asset/img/banner/banner5.png",
    ];
let currentIndex = 0;
const hero = document.querySelector(".hero");

hero.style.backgroundImage = `url(${listBg[currentIndex]})`;
    
setInterval(() => {
        currentIndex = (currentIndex + 1) % listBg.length;
        hero.style.backgroundImage = `url(${listBg[currentIndex]})`;
}, 3000);

// const listFooterBg = [
//     "./asset/img/footer/ar1.png",
//     "./asset/img/footer/art2.png",
//     "./asset/img/footer/art3.png",
// ];

// const resonBg = document.querySelector(".reason")
// let resonIndex = 0 ;

// resonBg.style.backgroundImage = `url(${listFooterBg[resonIndex]})`;

// setInterval(() => {
//         resonIndex = (resonIndex + 1) % listFooterBg.length;
//         resonBg.style.backgroundImage = `url(${listFooterBg[resonIndex]})`;
// }, 1000);