// start toggle menu 

let xmark = document.getElementById("xmark")
let bars = document.getElementById("bars")
let mobMenu = document.getElementById("mob-menu-wrapper")

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


