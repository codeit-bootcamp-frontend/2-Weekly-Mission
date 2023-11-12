const CLASSNAME_ERROR = "error";
const CLASSNAME_ERROR_MSG = "error-msg";

function addErrorClass(target, msg=""){
    target.classList.add(CLASSNAME_ERROR)
    if (msg){
        const errorMSG = document.createElement("p")
        errorMSG.classList.add(CLASSNAME_ERROR_MSG)
        errorMSG.textContent = msg
        target.parentElement.append(errorMSG)
    }
}

function removeErrorClass(target){
    target.classList.remove(CLASSNAME_ERROR);
    const errorMSG = target.parentElement.querySelector(`.${CLASSNAME_ERROR_MSG}`);
    if (errorMSG) {
        errorMSG.remove()
    }
}

export {addErrorClass, removeErrorClass};