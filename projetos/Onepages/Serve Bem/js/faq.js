itensFaq = document.querySelectorAll('.faq .perguntas li')

itensFaq.forEach(item => {
    item.addEventListener("click", () => {

        const p = item.querySelector('p')
        const span = item.querySelector('span')

        const isActive = p.classList.contains('active')

        // Fecha todos
        itensFaq.forEach(i => {
            i.querySelector('p')?.classList.remove('active')
            i.querySelector('span')?.classList.remove('active')
        })

        // Se não estava ativo, abre
        if (!isActive) {
            p.classList.add('active')
            span.classList.add('active')
        }
    })
})
