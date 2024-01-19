let toggle = document.getElementById("toggleBtn");

let closeNav = document.getElementById("closeBtn");
 
let sideBar = document.getElementById("sidebar");

let body0 = document.getElementById("mainBody");

let overflowBody0 = document.getElementById("bodyOverflow");

let overlay0 = document.querySelector(".overlay-main");

toggle.addEventListener('click', function(){
    sideBar.style.transform = "translateX(0%)";
    body0.style.pointerEvents = "none";
    overflowBody0.style.overflowY = "hidden";
    overlay0.style.opacity = "1";
})

closeNav.addEventListener('click', function(){
    sideBar.style.transform = "translateX(-100%)";
    body0.style.pointerEvents = "auto";
    overflowBody0.style.overflowY = "auto";
    overlay0.style.opacity = "0";
})

let srchBar = document.getElementById("searchbar");

let search = document.getElementById("search");

let search2 = document.getElementById("search2");

let search3 = document.getElementById("search3");

let vaBtn = document.getElementById("vaBtn");

let body = document.getElementById("mainBody");

let overflowBody = document.getElementById("bodyOverflow");

let overlay = document.querySelector(".overlay-main");

let cartBar = document.getElementById("cartbar");

let cartOpen = document.getElementById("cartOpen");

let cartOpen2 = document.getElementById("cartOpen2");


search.addEventListener("click", function(){
    srchBar.style.transform = "translateX(0%)";
    vaBtn.style.transform = "translateY(0%)";
    vaBtn.style.opacity = "1";
    body.style.pointerEvents = "none";
    overflowBody.style.overflowY = "hidden";
    overlay.style.opacity = "1";


})

search2.addEventListener("click", function(){
    srchBar.style.transform = "translateX(0%)";
    vaBtn.style.transform = "translateY(0%)";
    vaBtn.style.opacity = "1";
    body.style.pointerEvents = "none";
    overflowBody.style.overflowY = "hidden";
    overlay.style.opacity = "1";

})

search3.addEventListener("click", function(){
    srchBar.style.transform = "translateX(0%)";
    vaBtn.style.transform = "translateY(0%)";
    vaBtn.style.opacity = "1";
    body.style.pointerEvents = "none";
    overflowBody.style.overflowY = "hidden";
    overlay.style.opacity = "1";

})

cartOpen.addEventListener("click", function(){
    cartBar.style.transform = "translate(0%)";
    body.style.pointerEvents = "none";
    overflowBody.style.overflowY = "hidden";
    overlay.style.opacity = "1";

})

cartOpen2.addEventListener("click", function(){
    cartBar.style.transform = "translate(0%)";
    body.style.pointerEvents = "none";
    overflowBody.style.overflowY = "hidden";
    overlay.style.opacity = "1";

})

function closeSbBtn(){
    srchBar.style.transform = "translateX(100%)";
    accountBar.style.transform = "translateX(100%)";
    vaBtn.style.transform = "translateY(100%)";
    cartBar.style.transform = "translateX(100%)";
    vaBtn.style.opacity = "0";
    body.style.pointerEvents = "auto";
    overflowBody.style.overflowY = "auto";
    overlay.style.opacity = "0";

    
}


let accountBar = document.getElementById("accountbar");

let accountBtn = document.getElementById("account");

let accountBtn2 = document.getElementById("account2");

let loginBtn = document.getElementById("logBtn");

let loginBar = document.getElementById("login");

let registerBtn = document.getElementById("regBtn");

let registerBar = document.getElementById("register");  

let body1 = document.getElementById("mainBody");

let overflowBody1 = document.getElementById("bodyOverflow");

let overlay1 = document.querySelector(".overlay-main");



accountBtn.addEventListener("click", function(){
    accountBar.style.transform = "translateX(0%)";
    body1.style.pointerEvents = "none";
    overflowBody1.style.overflowY = "hidden";
    overlay1.style.opacity = "1";
})
accountBtn2.addEventListener("click", function(){
    accountBar.style.transform = "translateX(0%)";
    body1.style.pointerEvents = "none";
    overflowBody1.style.overflowY = "hidden";
    overlay1.style.opacity = "1";
})

// registerBtn.addEventListener("click", function(){
//     registerBar.style.opacity = "1";
//     loginBar.style.opacity = "0";
// });

// loginBtn.addEventListener("click", function(){
//     loginBar.style.opacity = "1";
//     registerBar.style.opacity = "0";

// });


function registerOpen(){
    loginBar.style.display = "none";
    registerBar.style.display = "block";
}

function loginOpen(){
    loginBar.style.display = "block";
    registerBar.style.display = "none";
}



// sidebar toggle buttons

let sideList = document.getElementById("sideList");
let catList = document.getElementById("catList");
let menuBtn = document.getElementById("menuBtn");
let catBtn = document.getElementById("catBtn");

menuBtn.addEventListener("click", ()=>{
    sideList.style.display = "block";
    catList.style.display = "none";
    sideList.style.opacity = "1";
    catList.style.opacity = "0";
    menuBtn.classList.add("active1");
    catBtn.classList.remove("active1");
})
catBtn.addEventListener("click", ()=>{
    catList.style.display = "block";
    sideList.style.display = "none";
    sideList.style.opacity = "0";
    catList.style.opacity = "1";
    catBtn.classList.add("active1");
    menuBtn.classList.remove("active1");
})


// popup

let pop1 = document.getElementById("popup1");
let load1 = document.getElementById("loading1");

setTimeout(() => {
    pop1.style.opacity = "1";
    pop1.style.transform = "translateY(0%)";
    load1.classList.add("border-anime");
}, 5000);

setTimeout(() => {
    pop1.style.opacity = "0";
    pop1.style.transform = "translateY(100%)";
    load1.classList.remove("border-anime");
}, 10000);


let pop2 = document.getElementById("popup2");
let load2 = document.getElementById("loading2");

setTimeout(() => {
    pop2.style.opacity = "1";
    pop2.style.transform = "translateY(0%)";
    load2.classList.add("border-anime");
}, 15000);

setTimeout(() => {
    pop2.style.opacity = "0";
    pop2.style.transform = "translateY(100%)";
    load2.classList.remove("border-anime");
}, 20000);



let pop3 = document.getElementById("popup3");
let load3 = document.getElementById("loading3");

setTimeout(() => {
    pop3.style.opacity = "1";
    pop3.style.transform = "translateY(0%)";
    load3.classList.add("border-anime");
}, 25000);

setTimeout(() => {
    pop3.style.opacity = "0";
    pop3.style.transform = "translateY(100%)";
    load3.classList.remove("border-anime");
}, 30000);


let pop4 = document.getElementById("popup4");
let load4 = document.getElementById("loading4");

setTimeout(() => {
    pop4.style.opacity = "1";
    pop4.style.transform = "translateY(0%)";
    load4.classList.add("border-anime");
}, 35000);

setTimeout(() => {
    pop4.style.opacity = "0";
    pop4.style.transform = "translateY(100%)";
    load4.classList.remove("border-anime");
}, 40000);


function popClose() {
    pop1.style.transform = "translateY(100%)";
    pop2.style.transform = "translateY(100%)";
    pop3.style.transform = "translateY(100%)";
    pop4.style.transform = "translateY(100%)";
    pop1.style.opacity = "0";
    pop2.style.opacity = "0";
    pop3.style.opacity = "0";
    pop4.style.opacity = "0";

}





















// var slidesCard = document.querySelectorAll(".scrollOver");

// let number = 0;

// slidesCard.forEach(
//     (slidesCard, index) => {
//         slidesCard.style.left = `${index * 100}%`;
//     }
// )

// function scrollPrev() {
//     number--;
//     imgSlider();

//     if (number === 0) {
//         number = slidesCard.length - 0;
//     }
// }

// function scrollNext() {
//     number++;
//     imgSlider();

//     if (number === slidesCard.length - 1) {
//         number = -1;
//     }
// }

// function imgSlider() {
//     slidesCard.forEach(
//         (slidesCard) => {
//             slidesCard.style.transform = `translateX(-${number * 100}%)`;
//         }
//     )
// }



let carBtn = document.querySelectorAll(".dotBtn");

for(var i = 0; i < carBtn.length; i++){
    carBtn[i].addEventListener("click", function(){
        let btnName = this.dataset.btn;

        let imgContent = document.getElementById(btnName);

        let imgContentRemove = document.querySelectorAll(".slideImg");

        let buttonRemove = document.querySelectorAll(".dotBtn");

        for(var c = 0; c < buttonRemove.length; c++){
            buttonRemove[c].classList.remove("active");
        }

        for(var a = 0; a < imgContentRemove.length; a++){
            imgContentRemove[a].style.transform = "translateX(0%)";
        }

        imgContent.style.transform = "translateX(-100%)";

        this.classList.add("active");
    })
}


// let carbutton2 = document.getElementById("carBtn2");

// if(carbutton2.classList.toggle("swiper-pagination-bullet-active")){
//     car2h5.classList.add("lookbookact");
// }
// else{
//     car2h5.classList.remove("lookbookact");
// }

// let carousBtn = document.querySelectorAll(".carouselBtn");





function imgChange1(){
    let img1 = document.getElementById("cardImg1");
    let img1inner = document.getElementById("cardimg1inner");
    img1.style.opacity = "1";
    img1.style.transform = "scale(1.1)"
    img1inner.style.transform = "scale(1.1)"
    img1inner.style.opacity = "0";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(-35px)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(40%)";
    document.querySelector(".anIcons").style.transform = "translateX(0%)";
    document.querySelector(".size").style.transform = "translateY(0%)";
    document.querySelector(".size").style.opacity = "1";
    document.querySelector(".quickBtn").style.transform = "translateY(0%)";
    document.querySelector(".quickBtn").style.opacity = "1";
}
function imgChange1Out(){
    let img1 = document.getElementById("cardImg1");
    let img1inner = document.getElementById("cardimg1inner");
    img1.style.opacity = "0";
    img1.style.transform = "scale(1)"
    img1inner.style.transform = "scale(1)"
    img1inner.style.opacity = "1";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(0%)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(0%)";
    document.querySelector(".anIcons").style.transform = "translateX(-140%)";
    document.querySelector(".size").style.transform = "translateY(-100%)";
    document.querySelector(".size").style.opacity = "0";
    document.querySelector(".quickBtn").style.transform = "translateY(-50%)";
    document.querySelector(".quickBtn").style.opacity = "0";
}


function imgChange2(){
    let img2 = document.getElementById("cardImg2");
    let img2inner = document.getElementById("cardimg2inner");
    img2.style.opacity = "1";
    img2.style.transform = "scale(1.1)"
    img2inner.style.transform = "scale(1.1)"
    img2inner.style.opacity = "0";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(-35px)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(40%)";
    document.querySelector(".anIcons2").style.transform = "translateX(0%)";
    document.querySelector(".quickBtn2").style.transform = "translateY(0%)";
    document.querySelector(".quickBtn2").style.opacity = "1";
}
function imgChange2Out(){
    let img2 = document.getElementById("cardImg2");
    let img2inner = document.getElementById("cardimg2inner");
    img2.style.opacity = "0";
    img2.style.transform = "scale(1)"
    img2inner.style.transform = "scale(1)"
    img2inner.style.opacity = "1";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(0%)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(0%)";
    document.querySelector(".anIcons2").style.transform = "translateX(-140%)";
    document.querySelector(".quickBtn2").style.transform = "translateY(-50%)";
    document.querySelector(".quickBtn2").style.opacity = "0";
}


function imgChange3(){
    let img3 = document.getElementById("cardImg3");
    let img3inner = document.getElementById("cardimg3inner");
    img3.style.opacity = "1";
    img3.style.transform = "scale(1.1)"
    img3inner.style.transform = "scale(1.1)"
    img3inner.style.opacity = "0";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(-35px)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(40%)";
    document.querySelector(".anIcons3").style.transform = "translateX(0%)";
}
function imgChange3Out(){
    let img3 = document.getElementById("cardImg3");
    let img3inner = document.getElementById("cardimg3inner");
    img3.style.opacity = "0";
    img3.style.transform = "scale(1)"
    img3inner.style.transform = "scale(1)"
    img3inner.style.opacity = "1";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(0%)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(0%)";
    document.querySelector(".anIcons3").style.transform = "translateX(-140%)";
}

function imgChange4(){
    let img4 = document.getElementById("cardImg4");
    let img4inner = document.getElementById("cardimg4inner");
    img4.style.opacity = "1";
    img4.style.transform = "scale(1.1)"
    img4inner.style.transform = "scale(1.1)"
    img4inner.style.opacity = "0";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(-35px)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(40%)";
    document.querySelector(".anIcons4").style.transform = "translateX(0%)";
}
function imgChange4Out(){
    let img4 = document.getElementById("cardImg4");
    let img4inner = document.getElementById("cardimg4inner");
    img4.style.opacity = "0";
    img4.style.transform = "scale(1)"
    img4inner.style.transform = "scale(1)"
    img4inner.style.opacity = "1";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(0%)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(0%)";
    document.querySelector(".anIcons4").style.transform = "translateX(-140%)";
}

function imgChange5(){
    let img5 = document.getElementById("cardImg5");
    let img5inner = document.getElementById("cardimg5inner");
    img5.style.opacity = "1";
    img5.style.transform = "scale(1.1)"
    img5inner.style.transform = "scale(1.1)"
    img5inner.style.opacity = "0";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(-35px)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(40%)";
    document.querySelector(".anIcons5").style.transform = "translateX(0%)";
}
function imgChange5Out(){
    let img5 = document.getElementById("cardImg5");
    let img5inner = document.getElementById("cardimg5inner");
    img5.style.opacity = "0";
    img5.style.transform = "scale(1)"
    img5inner.style.transform = "scale(1)"
    img5inner.style.opacity = "1";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(0%)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(0%)";
    document.querySelector(".anIcons5").style.transform = "translateX(-140%)";
}
function imgChange6(){
    let img6 = document.getElementById("cardImg6");
    let img6inner = document.getElementById("cardimg6inner");
    img6.style.opacity = "1";
    img6.style.transform = "scale(1.1)"
    img6inner.style.transform = "scale(1.1)"
    img6inner.style.opacity = "0";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(-35px)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(40%)";
    document.querySelector(".anIcons6").style.transform = "translateX(0%)";
}
function imgChange6Out(){
    let img6 = document.getElementById("cardImg6");
    let img6inner = document.getElementById("cardimg6inner");
    img6.style.opacity = "0";
    img6.style.transform = "scale(1)"
    img6inner.style.transform = "scale(1)"
    img6inner.style.opacity = "1";
    document.querySelector(".swiper-button-prev").style.transform = "translateX(0%)";
    document.querySelector(".swiper-button-next").style.transform = "translateX(0%)";
    document.querySelector(".anIcons6").style.transform = "translateX(-140%)";
}



function qbtn1over(){

    let qBtn1 = document.getElementById("quickview1");
    let qBtn1inner1 = document.getElementById("btOne");
    let qBtn1inner2 = document.getElementById("btTwo");

    qBtn1inner1.style.transform = "translateY(-150%)";
    qBtn1inner2.style.transform = "translateY(-200%)";
    qBtn1inner1.style.color = "white";
    qBtn1inner2.style.color = "white";
    qBtn1.style.backgroundColor = "black";
}

function qbtn1out(){
    let qBtn1 = document.getElementById("quickview1");
    let qBtn1inner1 = document.getElementById("btOne");
    let qBtn1inner2 = document.getElementById("btTwo");

    qBtn1inner1.style.transform = "translateY(0%)";
    qBtn1inner2.style.transform = "translateY(50%)";
    qBtn1inner1.style.color = "black";
    qBtn1inner2.style.color = "black";
    qBtn1.style.backgroundColor = "white";
}

function qbtn1over2(){

    let qBtn1 = document.getElementById("quickview2");
    let qBtn1inner1 = document.getElementById("btOne2");
    let qBtn1inner2 = document.getElementById("btTwo2");

    qBtn1inner1.style.transform = "translateY(-150%)";
    qBtn1inner2.style.transform = "translateY(-200%)";
    qBtn1inner1.style.color = "white";
    qBtn1inner2.style.color = "white";
    qBtn1.style.backgroundColor = "black";
}

function qbtn1out2(){
    let qBtn1 = document.getElementById("quickview2");
    let qBtn1inner1 = document.getElementById("btOne2");
    let qBtn1inner2 = document.getElementById("btTwo2");

    qBtn1inner1.style.transform = "translateY(0%)";
    qBtn1inner2.style.transform = "translateY(50%)";
    qBtn1inner1.style.color = "black";
    qBtn1inner2.style.color = "black";
    qBtn1.style.backgroundColor = "white";
}



// cursor

// let cursor = document.querySelector(".cursor");

//         document.addEventListener("mousemove", (e) => {
//             let x = e.clientX;
//             let y = e.clientY;

//             cursor.style.top = y + "px";
//             cursor.style.left = x + "px";
//         });




// let scrollCard = document.querySelectorAll(".scroll-card2");
// let cardImageOne = document.querySelectorAll(".cardImage1");
// let cardImageOneImg = document.getElementsByClassName("cardImage1Inner");
// let cardImageTwo = document.getElementById("cardImage2");
// let icons = document.getElementById("icons");

// for(let elem of cardImageOne){
//     elem.addEventListener("mouseover", () => {
        
//         for(let elements of cardImageOneImg){
//             elements.style.transform = "scale(1.2)";
//             elements.style.transition = "all 0.6s";
//         }

//         icons.style.transform = "translateX(0%)";
//     })

//     elem.addEventListener("mouseout", () => {
        
//         for(let elements of cardImageOneImg){
//             elements.style.transform = "scale(1)";
//             elements.style.transition = "all 0.6s";
//         }

//         // icons.style.transform = "translateX(-140%)";
//     })
// }


// let demos = document.getElementById("demo");
// let results = document.getElementById("result");

// demos.onchange = function(){
//     results.innerText = demos.innerText;
// }

let currencyDrop = document.querySelectorAll(".langdrop");

currencyDrop.forEach(currencyDrop => {
     let dropMenu = document.querySelector(".dropdown-menu");
     let menuList = document.querySelectorAll(".dropdown-item");
     let langchanger = document.querySelector(".langchanger");
     let dropItemInner = document.querySelectorAll(".drop-item-inner")

     menuList.forEach( menuList => {
        menuList.addEventListener("click", () => {
            dropItemInner.forEach(dropItemInner => {
                langchanger.innerText = dropItemInner.innerText;
            })
        })
     })


})


function cartCounting(click){
    let inputCount = document.getElementById("shopQuantity");
    let sumCount = parseInt(inputCount.innerText) + click;

    inputCount.innerText = sumCount;

    if(inputCount.innerText < 1){
        inputCount.innerText = 1;
    }
}
function cartCountingBs1(click){
    let inputCount = document.getElementById("shopQuantity");
    let sumCount = parseInt(inputCount.innerText) + click;

    inputCount.innerText = sumCount;

    if(inputCount.innerText < 1){
        inputCount.innerText = 1;
    }
}



