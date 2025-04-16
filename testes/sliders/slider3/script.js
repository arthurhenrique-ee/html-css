let slides = document.querySelectorAll('.slide')
let btnNext = document.querySelector('.next')
let btnPrev = document.querySelector('.prev')
let cont = 0

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });

    slides[index].classList.add('active')
}

btnNext.addEventListener('click', () => {
    cont ++
    if (cont >= 3 ) {
        cont = 0
    }
    showSlide(cont)
})

btnPrev.addEventListener('click', () => {
    cont --
    if (cont < 0 ) {
        cont = slides.length - 1
    }
    showSlide(cont)
})