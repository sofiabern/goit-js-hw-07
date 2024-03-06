const formEl = document.querySelector('.login-form')

const form = {  
}

formEl.addEventListener('submit', formHandler)

function formHandler(evt){
    evt.preventDefault()
    
    if(!formEl.elements.email.value.trim() || !formEl.elements.password.value.trim()){
        alert('All form fields must be filled in')
        formEl.reset()
        return
    }

    form.email = formEl.elements.email.value.trim();
    form.password=formEl.elements.password.value.trim();
    console.log(form)
    formEl.reset()
    
}

