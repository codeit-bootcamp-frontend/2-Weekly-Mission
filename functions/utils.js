export let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function updateAlert(inputElement, parentElement, className, message){
    let div = document.createElement('div');
    div.classList.add(className);
    div.innerHTML = message;
    inputElement.classList.add('alert-line');
    parentElement.appendChild(div);  
}

export function removeAlert(alert,inputElement){
    inputElement.classList.remove('alert-line');
    alert.remove();
}
