let btnCadastro = document.querySelector('.btn-cadastro')
let inputs = document.querySelectorAll('.input-cad')
let btnBuscar = document.querySelector('.btn-buscar')


btnCadastro.addEventListener("click", ()=> {
    let cont = 0
    inputs.forEach(input => {
        if (input.value === "") {
            cont += 1
        }
    });

    if (cont >= 1) {
        alert('Preencha todos os campos!')
    } else {
        let usuario = {}

        inputs.forEach(input => {
            usuario[input.id] = input.value
            input.value = ""
        });

        
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
        usuarios.push(usuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }
})

btnBuscar.addEventListener("click", ()=> {
    let campoBusca = document.querySelector('#search')

    usuarios = JSON.parse(localStorage.getItem("usuarios"))
    if (usuarios) {
        let encontrado = false
        usuarios.forEach(usuario => {
            if (usuario.nome === campoBusca.value) {
                document.querySelector('.result').innerHTML = `
                    <h2>Usuário encontrado!</h2>
                    <p>Nome: ${usuario.nome}</p>
                    <p>E-mail: ${usuario.email}</p>
                    <p>Data de Nascimento: ${usuario.nasc}</p>
                    <p>CPF: ${usuario.cpf}</p>
                    <p>Telefone: ${usuario.telefone}</p>
                    <p>Profissão: ${usuario.prof}</p>
                    `
                encontrado = true
            }
        });

        if (!encontrado) {
            document.querySelector('.result').innerHTML = `<h2>"${campoBusca.value}" não encontrado!</h2>`
        }
    } else {
        alert('Nenhum usuário cadastrado.')
    }
})