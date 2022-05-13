const form = document.getElementById("form");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formMsgType = document.getElementById("msgtype");
const formSubject = document.getElementById("subject");
const formMessage = document.getElementById("message");
const btnSubmit = document.querySelector(".btn-submit");
const formSuccess = document.querySelector(".validation-success");


// error and success messages
const error = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-form');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const success = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-form');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Form validation and eventlistner

form.addEventListener("submit", (e) =>  {
    e.preventDefault();
    let count = 0;
    if (checkForm(formName.value, 5)) {
        error(formName, "Name must be more then 5 characters long");
    } else {
        success(formName);
        count++;
    }

    if (emailValidation(formEmail.value)) {
        success(formEmail);
        count++;
    } else {
        error(formEmail, "Provide a valid email address");
    }
    
    if (checkForm(formSubject.value, 4)) {
        error(formSubject, "Subject must be more then 4 characters long");
    } else {
        success(formSubject);
        count++;
    }

    if (checkForm(formMessage.value, 25)) {
        error(formMessage, "Message must be more than 25 characters long");
    } else {
        success(formMessage);
        count++;
    }
    console.log(count);
    if (count === 4) {
        form.reset();
        return formSuccess.innerHTML = `<h2 class="h2-success">Message is recived, thank you<h2>`;
    }
})

// form validation function for less repeat
function checkForm(value, leng) {
    if (value.trim().length >= leng) {
        return false;
    } else {
        return true;
    }
}


//testing keyup 
// formName.addEventListener("keyup", logKey);
// function logKey(e) {
//     console.log(`${e.code}`);
// }

// RegEx email validation
function emailValidation(email){
    // denne burde være nokså sikker, har også lagt til valgfri andre dommene tilfelle co.uk etc
    const regEx = /^([a-zA-Z0-9-_\.]+)@([a-z-?]+)\.([a-z]{2,6})(\.[a-z]{2,4})?/g;
    const emailMatche = regEx.test(email);
    return emailMatche;
}









