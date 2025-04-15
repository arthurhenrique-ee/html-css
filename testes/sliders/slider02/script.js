let wrapper = document.querySelector('.wrapper')
let slides = document.querySelectorAll('.slide')
let btnNext = document.querySelector('.next')
let btnPrev = document.querySelector('.prev')

btnNext.addEventListener('click', () => {
    let slideWidth = slides[0].offsetWidth + 30
    wrapper.scrollLeft += slideWidth
})

btnPrev.addEventListener('click', () => {
    let slideWidth = slides[0].offsetWidth + 30
    wrapper.scrollLeft -= slideWidth
})