function printError(input, message) {
  if(input.parentElement.querySelector('.error-message')) {
    input.parentElement.lastElementChild.remove();
  }
  if(!input.parentElement.querySelector('.error-message')) {
    const emailError = document.createElement('p');
    emailError.classList.add('error-message');
    emailError.textContent = message;
    input.parentElement.append(emailError);
  }
}

export { printError };