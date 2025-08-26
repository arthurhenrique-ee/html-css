let btnCadastro = document.querySelector('.btn-salvar')
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
let inputs = document.querySelectorAll('input')

btnCadastro.addEventListener("click", ()=> {
    if (nome.value == "" || email.value == "" || telefone.value == "") {
        alert('Preencha todos os campos!')
    } else {
        // ARMAZENA OS DADOS
        let usuario = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value
        }
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
        usuarios.push(usuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))

        // LIMPA OS CAMPOS
        inputs.forEach(input => {
            input.value = ""
        });

        // ALERTA
        alert('Cadastro bem-sucedido!')
    }
})