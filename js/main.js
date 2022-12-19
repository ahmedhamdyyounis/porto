// start toggle menu 

let xmark = document.getElementById("xmark")
let bars = document.getElementById("bars")
let mobMenu = document.getElementById("mob-menu-wrapper")
console.log(mobMenu)

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

mobMenu.onclick = xmark.onclick

//end toggle menu
