btnRegister = document.querySelector('#btn-register')
modalCad = document.querySelector('.modal-cad')
formCad = document.querySelector('.form-cad')
btnFecharModal = document.querySelector('.fechar-modal')

btnCad = document.querySelector('.btn-cad')
nomeCad = document.querySelector('#nome')
userCad = document.querySelector('#cad-user')
senhaCad = document.querySelector('#cad-password')

lblnome = document.querySelector('#lblnome')
lbluser = document.querySelector('#lbluser')
lblsenha = document.querySelector('#lblsenha')

validNome = false
validUser = false
validSenha = false

btnRegister.addEventListener('click', ()=> {
    modalCad.classList.add('ativo')
    formCad.classList.add('ativo')
})

btnFecharModal.addEventListener('click', ()=> {
    modalCad.classList.remove('ativo')
})

nomeCad.addEventListener('keyup', ()=> {
    if (nomeCad.value.length < 3) {
        lblnome.style.color = 'darkred'
        validNome = false
    } else {
        lblnome.style.color = 'darkgreen'
        validNome = true
    }
})

userCad.addEventListener('keyup', ()=> {
    if (userCad.value.length < 4 || userCad.value.length > 8) {
        lbluser.style.color = 'darkred'
        validUser = false
    } else {
        lbluser.style.color = 'darkgreen'
        validUser = true
    }
})

senhaCad.addEventListener('keyup', ()=> {
    if (senhaCad.value.length < 8 || senhaCad.value.length > 10) {
        lblsenha.style.color = 'darkred'
        validSenha = false
    } else {
        lblsenha.style.color = 'darkgreen'
        validSenha = true
    }
})

btnCad.addEventListener('click', ()=> {
    if (validNome = true && validSenha == true && validUser == true) {
        nomeCad.value = ''
        userCad.value = ''
        senhaCad.value = ''

        validNome = false
        validUser = false
        validSenha = false

        lblnome.style.color = 'white'
        lbluser.style.color = 'white'
        lblsenha.style.color = 'white'

        alert('Cadastro Realizado!')
    } else {
        alert('Preencha todos os campos corretamente.')
    }
})