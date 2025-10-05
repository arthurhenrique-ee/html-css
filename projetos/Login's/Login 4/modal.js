let modalLogin = document.querySelector('.modal-login')
let btnAbrirModal = document.querySelector('.btn-login')
let btnClose = document.querySelector('.close-modal')

btnAbrirModal.addEventListener("click", ()=> {
    modalLogin.classList.add('active')
})

btnClose.addEventListener("click", ()=> {
    modalLogin.classList.remove('active')
})