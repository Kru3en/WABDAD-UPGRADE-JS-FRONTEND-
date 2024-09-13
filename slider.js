let currentSlide = 0
const slides = document.querySelectorAll('.card')
const totalSlides = slides.length
const dots = document.querySelectorAll('.dot')

const intervalTime = 500000
let autoSlideInterval

const slideAnimation = document.querySelector('.slide-animation')

function initializeSlider() {
  if (window.innerWidth <= 768) {
    showSlide(currentSlide)
    resetAutoSlide()
  } else {
    clearInterval(autoSlideInterval)
    slideAnimation.style.transform = `translateX(0%)`
  }
}

function showSlide(index, step) {
  if (step !== undefined) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides
  } else {
    currentSlide = index
  }

  if (window.innerWidth <= 320) {
    offset = -currentSlide * 66.5
  } else {
    offset = -currentSlide * 49
  }
  document.querySelector('.row-slider').style.transform =
    `translateX(${offset}%)`

  dots.forEach(dot => dot.classList.remove('active'))
  dots[currentSlide % dots.length].classList.add('active')
}

function moveSlide(step) {
  showSlide(currentSlide + step, step)
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(() => {
    moveSlide(1)
  }, intervalTime)
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      showSlide(index)
      resetAutoSlide()
    }
  })
})

initializeSlider()
window.addEventListener('resize', initializeSlider)
