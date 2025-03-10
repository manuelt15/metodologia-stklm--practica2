"use strict"
const headerMenu = document.querySelector(`.Header-menu`)
const headerLeft = document.querySelector(`.Header-left`)
const main = document.querySelector(`main`)

headerMenu.addEventListener(`click` , ()=>{
    headerLeft.classList.add(`isActive`)
})
main.addEventListener(`click` , ()=>{
    headerLeft.classList.remove(`isActive`)
})
