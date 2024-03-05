const props ={
    inputEl : document.querySelector('#name-input'),
    spanEl : document.querySelector('#name-output')
}
console.dir(props.inputEl)
console.dir(props.spanEl)

props.inputEl.addEventListener('input', inputHandler)

function inputHandler(evt){
// console.log(evt)
// console.log(evt.currentTarget.value)

if(!evt.currentTarget.value.trim()){
    props.spanEl.textContent = "Anonymous"
    return
}
props.spanEl.textContent = evt.currentTarget.value.trim()

}