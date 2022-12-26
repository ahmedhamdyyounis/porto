// start toggle menu 

let xmark = document.getElementById("xmark")
let bars = document.getElementById("bars")
let mobMenu = document.getElementById("mob-menu-wrapper")
let menuCloseEmpty = document.getElementById("mob-close-empty")
let angleDown = document.querySelectorAll(".fa-angle-down")
let angleUp = document.querySelector(".fa-angle-up")
let subCategorie = document.querySelector(".sub-categories")


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

angleDown[1].onclick = function () {
    subCategorie.classList.add("d-block")
    this.classList.add("d-none")
    angleUp.setAttribute("style", "display:block!important;")
}
angleUp.onclick = function () {
    subCategorie.classList.add("d-none")
    subCategorie.classList.remove("d-block")
    angleUp.setAttribute("style", "display:none!important;")
    angleDown[1].classList.remove("d-none")
    
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
    
}

popUpWrapper.onclick = function () {
    popUp.classList.add("d-none")
}

function popAppear() {
    popUp.style.cssText = "display:block;"
}

setTimeout(popAppear, 3000)







