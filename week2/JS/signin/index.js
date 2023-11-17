import { email, password, inputs, btn, eye2, testData } from "../sig_all/contants.js";
import { errText, isValidEmail, isValidPassword,passwordError ,eyeToggle} from "../sig_all/utils/sig_all_func.js";


function checkTemplate (e) {
  if (e.target === email) {
    if (isValidEmail(e.target.value)){
     e.target.classList.remove('err');
     e.target.nextElementSibling === errText ? errText.remove() : undefined;
    }
  }
  if (e.target === password){
    if (isValidPassword(e.target.value)){
      e.target.classList.remove('err')
      e.target.nextElementSibling === errText ? errText.remove() : undefined;
    }
  }
}

const {0: testAdress} = testData

function goServer () {
  fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(testAdress)
    })
    .then((response) => response.json())
    .then((a)=> {return a.data.accessToken})
    .then((token) => localStorage.setItem('accessToken', token))
    .then(localStorage.getItem('accessToken')? location.replace('/folder'): undefined)
}

function ourMembers (e) {
  e.preventDefault()
  if (testData.some((member) => member.email === 'test@codeit.com' && member.password === "sprint101")) {
    goServer()
  } else if(testData.some((member) => member.email !== email.valuel)){
    e.preventDefault()
    email.classList.add('err');
    return alert('이메일을 확인해 주세요');
  } else {
    e.preventDefault()
    password.classList.add('err');
    return alert ('비밀번호를 확인해 주세요')
  }
}

password.addEventListener('focusout', passwordError)
inputs.forEach(inputElement => {
  inputElement.addEventListener('focusout',checkTemplate);
});

btn.addEventListener('click', ourMembers);

eye2.addEventListener('click', eyeToggle);