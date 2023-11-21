function accessTokenValid (){
  const check = window.localStorage.getItem('accessToken')
  
  if(check){
    window.location.href = "./folder/"
  }
  else{
    window.location.href = "./signin.html"
  }
}



const toSignIn = document.querySelector('#toSignin')
toSignIn.addEventListener('click', accessTokenValid );