const eyes = document.querySelectorAll('.eye');

function eyeBlink (e) {
  const eyeClass = e.target.parentElement.classList;
  const pwdText = e.target.parentElement.parentElement.firstElementChild;
  console.log('o');
  if(eyeClass.contains('off')) {
    e.target.src = '../../images/sign/eye-on.svg';
    eyeClass.remove('off');
    eyeClass.add('on');
    pwdText.type = 'text';
  } else {
    e.target.src = '../../images/sign/eye-off.svg';
    eyeClass.remove('on');
    eyeClass.add('off');
    pwdText.type = 'password';
  }
}

const eyeEvent = function (eyes) {
  for(let eye of eyes) {
    eye.addEventListener('click', eyeBlink);
  }
}

export  { eyes, eyeEvent };