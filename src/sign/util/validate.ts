export const isEmpty = (value:string) => {
  if(value === '') return true;
  return false;
}

export const isEmail = (email:string) => {
  const emailValue = email.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(emailValue)) return true;
  if(!email) return true;
  return false;
}

export const isPassword = (password:string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (passwordRegex.test(password)) return true;
  if(!password) return true;
  return false;
}

export const checkAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    window.location.href = './folder.html';
  }
}
