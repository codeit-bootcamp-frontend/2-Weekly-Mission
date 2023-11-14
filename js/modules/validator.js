const regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const isRegEmail = (value) => regEmail.test(value);
const isRegPassword = (value) => regPassword.test(value);

export { isRegEmail, isRegPassword };
