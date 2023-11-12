function togglePasswordHidden(e){
    const passwordInput = e.target.parentElement.firstElementChild
    e.preventDefault()
    passwordInput.type = passwordInput.type === "text" ? "password" : "text" 

}

export default togglePasswordHidden;