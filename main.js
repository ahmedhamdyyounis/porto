// start toggle menu 

let xmark = document.getElementById("xmark")
let bars = document.getElementById("bars")
let mobMenu = document.getElementById("mob-menu-wrapper")
let menuCloseEmpty = document.getElementById("mob-close-empty")
let angleDown = document.getElementsByClassName("fa-angle-down")
let angleUp = document.getElementsByClassName("fa-angle-up")
let subCategorie = document.querySelector(".sub-categories")


let products = document.querySelector(".products")

let cloned = bars.cloneNode(true)



console.log(angleDown)

bars.onclick = function () {
    xmark.style.display = "block"
    this.style.display = "none"
    mobMenu.style.display = "block"
}

xmark.onclick = function () {
    bars.style.display = "block"
    this.style.display = "none"
    mobMenu.style.display = "none"
}

menuCloseEmpty.onclick = function () {
    mobMenu.style.display = "none"
    bars.style.display = "block"
}

//end toggle menu

// pasta option

let opt1 = document.getElementById("one")
let opt2 = document.getElementById("two")

let temp1 = document.getElementById("onee")
let temp2 = document.getElementById("twoo")

opt2.onclick = function () {
        //active class green
    opt1.classList.remove("act")
    opt2.classList.add("act")
//template selection
    temp2.classList.add("d-block")
    temp1.classList.add("d-none")
    temp1.classList.remove("d-block")
}


opt1.onclick = function () {
    //active class green
    opt2.classList.remove("act")
    this.classList.add("act")
//template selection
    temp2.classList.remove("d-block")
    temp2.classList.add("d-none")
    temp1.classList.add("d-block")
}


//popup close

let close = document.getElementById("close")
let popUp = document.getElementById("popup")
let popUpWrapper = document.getElementById("popup-wrapper")
console.log(popUpWrapper)


close.onclick = function () {
    popUp.classList.add("d-none")
    window.onscroll = function () { window.scrollTo() };
}

popUpWrapper.onclick = function () {
    popUp.classList.add("d-none")
    window.onscroll = function () { window.scrollTo() };

}

let theTimeout = setTimeout(popAppear, 3000)

function popAppear() {
    popUp.style.cssText = "display:block;"
    window.onscroll = function () { window.scrollTo(0, 0); };

}


let cof = document.getElementById("coffee")
let flash = setInterval(theFlash, 1000);

function theFlash() {
    cof.classList.toggle("opacity-0")
    
}

console.log(angleDown[4])

let mobRow = document.getElementsByClassName("mob-row")
let manipulate = document.getElementsByClassName("posittion-manipulate-block")

for (let i =0;i<mobRow.length;i++) {
    angleDown[i].addEventListener('click', () => {
        mobRow[i].nextElementSibling.classList.toggle("posittion-manipulate-block")    
        angleDown[i].classList.add("d-none")
        angleDown[i].classList.remove("d-block")
        angleUp[i].classList.add("d-block")
        angleUp[i].classList.remove("d-none")
    })    
    angleUp[i].addEventListener('click', () => {
        mobRow[i].nextElementSibling.classList.toggle("posittion-manipulate-block")
        angleUp[i].classList.add("d-none")
        angleUp[i].classList.remove("d-block")
        angleDown[i].classList.add("d-block")
        angleDown[i].classList.remove("d-none")
    })
}







