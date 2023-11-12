const disappearError = (tag) => {
  const inputList = Array.from(document.querySelectorAll('input'));
  if(inputList.includes(tag)) {
    tag.classList.remove('input--error');
    const parent = tag.parentNode;
    const lastNode = tag.parentNode.lastChild;
    if(lastNode.classList.contains('error-message')){
      parent.removeChild(lastNode);
    }
  }
}

export default disappearError;
