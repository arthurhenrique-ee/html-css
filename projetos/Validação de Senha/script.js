senha = document.querySelector('#senha')
btnCad = document.querySelector('.btn-criar-senha')
mostrarSenha = document.querySelector('#mostrar-senha')

criterioLength = document.querySelector('.min-length')
criterioLetter = document.querySelector('.letter')
criterioNumber = document.querySelector('.number')
criterioSpace = document.querySelector('.space')

iconLength = document.querySelector('#erro-length')
iconLetter = document.querySelector('#erro-letter')
iconNumber = document.querySelector('#erro-number')
iconSpace = document.querySelector('#erro-space')

validLength = false
validLetter = false
validNumber = false
validSpace = false

mostrarSenha.addEventListener('click', ()=> {
    mostrarSenha.classList.toggle('bi-eye-slash-fill')
    mostrarSenha.classList.toggle('bi-eye-fill')

    if (senha.type == 'password') {
        senha.type = 'text'
    } else {
        senha.type = 'password'
    }
})

senha.addEventListener('keyup', ()=> {
    if (senha.value.length < 8) {
        criterioLength.style.color = 'darkred'
        iconLength.className = 'bi bi-x-circle-fill'
        validLength = false
    } else {
        criterioLength.style.color = 'darkgreen'
        iconLength.className = 'bi bi-check-circle-fill'
        validLength = true
    }
})

senha.addEventListener('keyup', ()=> {
    function temMinusculo() {
        return /[a-z]/.test(senha.value)
    }

    function temMaiusculo() {
        return /[A-Z]/.test(senha.value)
    }

    if (temMinusculo() && temMaiusculo()) {
        criterioLetter.style.color = 'darkgreen'
        iconLetter.className = 'bi bi-check-circle-fill'
        validLetter = true
    } else {
        criterioLetter.style.color = 'darkred'
        iconLetter.className = 'bi bi-x-circle-fill'
        validLetter = false
    }
})

senha.addEventListener('keyup', ()=> {
    function temNumero() {
        return /[0-9]/.test(senha.value)
    }

    if (temNumero()) {
        criterioNumber.style.color = 'darkgreen'
        iconNumber.className = 'bi bi-check-circle-fill'
        validNumber = true
    } else {
        criterioNumber.style.color = 'darkred'
        iconNumber.className = 'bi bi-x-circle-fill'
        validNumber = false
    }
})

senha.addEventListener('keyup', ()=> {
    function temSpace() {
        return /\s/.test(senha.value)
    }

    if (temSpace()) {
        criterioSpace.style.color = 'darkred'
        iconSpace.className = 'bi bi-x-circle-fill'
        validSpace = false
    } else {
        criterioSpace.style.color = 'darkgreen'
        iconSpace.className = 'bi bi-check-circle-fill'
        validSpace = true
    }
})

btnCad.addEventListener('click', ()=> {
    if (senha.value.length == 0) {
        alert('O preenchimento da senha é obrigatório.')
    } else {
        if (validLength && validLetter && validNumber && validSpace) {
            alert('Senha Cadastrada!')
            location.reload(true)
        } else {
            alert('A senha não atende aos critérios exigidos.')
        }
    }
})