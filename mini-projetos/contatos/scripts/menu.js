let btnNovo = document.querySelector('.btn-novo')
let btnContatos = document.querySelector('.btn-contatos')
let formCadastro = document.querySelector('.cadastro')
let listaContatos = document.querySelector('.contatos')

btnNovo.addEventListener("click", ()=> {
    formCadastro.classList.add('active')
    listaContatos.classList.remove('active')
    btnNovo.classList.add('click')
    btnContatos.classList.remove('click')
})

btnContatos.addEventListener("click", ()=> {
    listaContatos.classList.add('active')
    formCadastro.classList.remove('active')
    btnContatos.classList.add('click')
    btnNovo.classList.remove('click')
})