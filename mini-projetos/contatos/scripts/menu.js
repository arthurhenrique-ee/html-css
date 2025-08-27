let btnNovo = document.querySelector('.btn-novo')
let btnContatos = document.querySelector('.btn-contatos')
let formCadastro = document.querySelector('.cadastro')
let listaContatos = document.querySelector('.contatos')

btnNovo.addEventListener("click", ()=> {
    formCadastro.classList.add('active')
    listaContatos.classList.remove('active')
})