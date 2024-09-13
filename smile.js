const images = document.querySelectorAll('.smile img')

images.forEach(img => {
  img.addEventListener('click', () => {
    images.forEach(el => (el.style.transform = 'scale(1)'))
    img.style.transform = 'scale(1.4)'
    console.log("Человек выбрал: ", img.alt)
  })
})
