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
        let contato = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value
        }
        let contatos = JSON.parse(localStorage.getItem("contatos")) || []
        contatos.push(contato)
        localStorage.setItem("contatos", JSON.stringify(contatos))

        // LIMPA OS CAMPOS
        inputs.forEach(input => {
            input.value = ""
        });

        // ALERTA
        alert('Cadastro bem-sucedido!')
    }
})