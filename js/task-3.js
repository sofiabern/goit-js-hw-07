const props ={
    inputEl : document.querySelector('#name-input'),
    spanEl : document.querySelector('#name-output')
}

props.inputEl.addEventListener('input', inputHandler)

function inputHandler(evt){
    
props.spanEl.textContent = evt.currentTarget.value.trim() || "Anonymous";

}