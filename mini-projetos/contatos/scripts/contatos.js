let listaContatosContainer = document.querySelector('.contatos')

function listarContatos() {
    listaContatosContainer.innerHTML = `
        <h1>Lista de <span>Contatos</span></h1>
    `;

    let contatos = JSON.parse(localStorage.getItem("contatos")) || []

    if (contatos.length === 0) {
        listaContatosContainer.innerHTML += "<p>Nenhum contato cadastrado ainda.</p>"
        return
    }

    contatos.forEach(contato => {
        let item = document.createElement("div")
        item.classList.add("item-list")
        item.innerHTML = `
            <h2 class="nome">${contato.nome}</h2>
            <p class="email">${contato.email}</p>
            <p class="tel">${contato.telefone}</p>
        `
        listaContatosContainer.appendChild(item)
    });
}

btnContatos.addEventListener("click", listarContatos)
document.addEventListener("DOMContentLoaded", listarContatos)