let menuMobile = document.querySelector('.menu-mobile')
let btnMenu = document.querySelector('.btn-menu-mobile')
let lines = btnMenu.querySelectorAll('.line')
let linksMenu = document.querySelectorAll('.menu-mobile a')

btnMenu.addEventListener("click", ()=> {
    menuMobile.classList.toggle('active')
    lines.forEach(line => {
        line.classList.toggle('active')
    });
})

linksMenu.forEach(link => {
    link.addEventListener("click", ()=> {
        menuMobile.classList.remove('active')
        lines.forEach(line => {
            line.classList.remove('active')
        });
    })
});