function sendEmail() {
  const emailInput = document.getElementById('emailInput')
  const emailValue = emailInput.value

  console.log('Отправлено:', emailValue)
  emailInput.value = ''
}
