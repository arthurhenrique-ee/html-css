let btnCadastro = document.querySelector('.btn-cad')
let inputs = document.querySelectorAll('.cad-form input, .cad-form select')

email = document.querySelector('input#email')

btnCadastro.addEventListener('click', () => {

    function emailValid() {
        return /[@]/.test(email.value)
    }

    if (emailValid()) {
        alert('Tudo certo')
    } else {
        alert('Email Inválido')
    }

})