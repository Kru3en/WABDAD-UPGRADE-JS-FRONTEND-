const hamb = document.querySelector('.burger-icon')
const nav = document.querySelector('.containerNavUl')
const links = document.querySelectorAll('.itemNavUl')

const body = document.body

hamb.addEventListener('click', hambHandler)

links.forEach(link => {
  link.addEventListener('click', () => {
    closeOnClick()
  })
})

function hambHandler(e) {
  e.preventDefault()
  hamb.classList.toggle('active')
  body.classList.toggle('noscroll')
  nav.classList.toggle('open')
}

function closeOnClick() {
  hamb.classList.remove('active')
  body.classList.remove('noscroll')
  nav.classList.remove('open')
}
