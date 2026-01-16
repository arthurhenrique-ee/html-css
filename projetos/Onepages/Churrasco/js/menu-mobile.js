let menuMobile = document.querySelector('.menu-mobile')
let btnMenu = document.querySelector('.btn-menu-mobile')
let linksMenu = document.querySelectorAll('.menu-mobile a')

btnMenu.addEventListener("click", ()=> {
    menuMobile.classList.toggle('ativo')
})

linksMenu.forEach(link => {
    link.addEventListener("click", ()=> {
        menuMobile.classList.toggle('ativo')
    })
});