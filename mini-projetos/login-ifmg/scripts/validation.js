usuario = document.querySelector('#usuario')
senha = document.querySelector('#senha')
btnEntrar = document.querySelector('.btn-entrar')
loginIncorrect = document.querySelector('.login-incorreto')
boxWelcome = document.querySelector('.welcome')

btnEntrar.addEventListener("click", ()=> {
    if (usuario.value != '0106105' && senha.value != '96333030') {
        boxWelcome.style.top = '-100px'
        loginIncorrect.style.top = '20px'
    } else {
        loginIncorrect.style.top = '-100px'
        boxWelcome.style.top = '20px'
    }
})