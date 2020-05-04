const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');

const showError = (input,message) => {
    const formControl = input.parentElement;
    formControl.className = 'form__control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
 
}
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form__control success'
}
function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
}

const checkRequired = (inputArray) => {
    inputArray.forEach((input) => {
        if(input.value.trim() === '') {
            showError(input,`${getFieldName(input)} is required`);
        }else {
            showSuccess(input)
        }
    })
}

const checkLength = (input,min,max) => {
    if(input.value.trim().length < min) {
        showError(input,`${getFieldName(input)} requires at least ${min} characters`)
    }
    else if(input.value.trim().length > max) {
        showError(input,`${getFieldName(input)} requires less than ${max} characters}`)
    }else {
        showSuccess(input)
    }
}

const checkConfirmPassword = (input1,input2) => {
    if(input2.value === '') {
        showError(input2,'Re enter password')
    }
    if(input1.value !== input2.value) {
        showError(input2,'Passwords do not match');
    }
}

const getFieldName = (input) => input.id.charAt(0).toUpperCase() + input.id.slice(1)
form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,5,20);
    checkLength(password,7,15);
    checkLength(password2,7,15);
    checkConfirmPassword(password,password2);
    

})