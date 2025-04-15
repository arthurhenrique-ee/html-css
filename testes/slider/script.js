const slides = document.querySelectorAll('.slide')
let cont = 0

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[index].classList.add('active')
}

document.getElementById('prev').addEventListener('click', () => {
    cont -= 1
    if (cont < 0) {
        cont = slides.length - 1
    }
    showSlide(cont)
  });
  
  document.getElementById('next').addEventListener('click', () => {
    cont += 1;
    if (cont >= slides.length) {
        cont = 0
    }
    showSlide(cont)
  });


setInterval(() => {
    cont += 1;
    if (cont >= slides.length) {
        cont = 0
    }
    showSlide(cont)
}, 5000);