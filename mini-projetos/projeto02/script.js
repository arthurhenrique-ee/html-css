let btnLogin = document.querySelector('.btn-login')
let modalLogin = document.querySelector('#modal-login')
let fundoModal = document.querySelector('.fundo-modal')

btnLogin.addEventListener('click', ()=> {
    modalLogin.classList.add('ativo')
})

fundoModal.addEventListener('click', ()=> {
    fundoModal.classList.remove('ativo')
})