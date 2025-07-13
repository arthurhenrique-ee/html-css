let eyeSenha = document.querySelector('#mostrar-senha')
let loginSenha = document.querySelector('#login-senha')
let loginUsuario = document.querySelector('#login-usuario')
let btnLogin = document.querySelector('.btn-login')

let usuario = {
    usuario: 'arthur',
    senha: '123456'
}

localStorage.setItem("usuario", JSON.stringify(usuario))
usuarioSalvo = JSON.parse(localStorage.getItem("usuario"))

eyeSenha.addEventListener('click', ()=> {
    if (loginSenha.type == 'password') {
        eyeSenha.className = 'bi-eye-slash-fill'
        loginSenha.type = 'text'
    } else {
        eyeSenha.className = 'bi-eye-fill'
        loginSenha.type = 'password'
    }
})

btnLogin.addEventListener('click', ()=> {
    if (loginUsuario.value == usuarioSalvo.usuario && loginSenha.value == usuarioSalvo.senha) {
        alert('Entrou!')
    } else {
        alert('Usuário ou senha incorretos.')
    }
})