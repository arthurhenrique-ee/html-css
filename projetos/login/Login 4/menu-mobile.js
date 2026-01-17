let menuMobile = document.querySelector('.menu-mobile')
let btnMenuMobile = document.querySelector('.btn-menu')
let btnCloseMenu = document.querySelector('.close-menu-mobile')

btnMenuMobile.addEventListener("click", ()=> {
    menuMobile.classList.add('active')
})

btnCloseMenu.addEventListener("click", ()=> {
    menuMobile.classList.remove('active')
})