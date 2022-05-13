const form = document.getElementById("form");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formMsgType = document.getElementById("msgtype");
const formSubject = document.getElementById("subject");

function submitForm(e) {
    e.defaultPrevented();

    form.reset();
} 
form.addEventListener("submit", submitForm);

// form.addEventListener("submit", e => {
//     e.defaultPrevented();

//     validateForm();

// });

const setInputError = (element, msg) => {
    const inputVali = element.parentElement;
    const errorMsg = inputVali.queryselector(".error");

    errorMsg.innerHtml = msg;
    inputVali.classList.add("error");
    inputVali.classList.remove("success");

}

const setInputOk = element => {
    const inputVali = element.parentElement;
    const errorMsg = inputVali.queryselector(".error");

    errorMsg.innerHtml = "";
    inputVali.classList.add("success");
    inputVali.classList.remove("error");
}

function emailValidation(email){
    // denne burde være nokså sikker, har også lagt til valgfri andre dommene tilfelle co.uk etc
    const regEx = /^([a-zA-Z0-9-_\.]+)@([a-z-?]+)\.([a-z]{2,6})(\.[a-z]{2,4})?/g;
    const emailMatche = regEx.test(email);
    return emailMatche(String(email).toLocaleLowerCase());
}

const validateForm = () => {
    const nameInput = formName.value.trim().toLocaleLowerCase();
    const emailInput = formemail.value.trim().toLocaleLowerCase();
    const msgTypeInput = formMsgType.value.trim().toLocaleLowerCase();
    const subjectInput = formSubject.value.trim().toLocaleLowerCase();

    if (nameInput > 4) {
        setInputError(formName, "Name must be more then 5 characters");
    } else {
        setInputOk(formName);
    }
    if (emailInput === "") {
        setInputError(formEmail, "Must be a valid email");
    } else if (!emailValidation(email)) {
        setInputError(formEmail, "Must be a valid email");
    } else {
        setInputOk(formEmail);
    }
}


function validateForm() {
    const nameInput = formName.value.trim().toLocaleLowerCase();
    const emailInput = formemail.value.trim().toLocaleLowerCase();
    const msgTypeInput = formMsgType.value.trim().toLocaleLowerCase();
    const subjectInput = formSubject.value.trim().toLocaleLowerCase();

    if (checkForm(formName.value, 4)) {
        setInputError(formName, "Name must be more then 5 characters");
    } else {
        setInputOk(formName);
    }
    if (emailValidation(email.value)) {

    }
}

function checkForm(value, leng) {
    if (value.trim().toLocaleLowerCase().length >= leng) {
        return true;
    } else {
        return false;
    }
}



if (formEmail === "") {
    setError(formEmail, "Email is required");
} else if (!emailValidation(formEmail)) {
    setError(formEmail, "Provide a valid email address");
} else if (emailValidation(formEmail)) {
    setSuccess(formEmail);
}






const form = document.querySelector("#contact-form");
const formsucess = document.querySelector(".form-sucess")
const fullName = document.querySelector("#name");
const nameErr = document.querySelector("#err-name");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector("#err-sub");
const email = document.querySelector("#email");
const emailErr = document.querySelector("#err-email");
const btnSubmit = document.querySelector(".submit-btn");


if(emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}


if (checkForm(formSubject.value, )

// required i html fungerer ikke sammen med javascript, den vil
// aktivere submit selv om du ikke har skrevet noe der, men får feil når du trykker
function valiForm() {
    if(checkForm(fullName.value, 1) && checkForm(subject.value, 9) && emailValidation(email.value)) {
        btnSubmit.disabled = false;
    } else {
        formsucess.innerHTML = "";
        btnSubmit.disabled = true;
    }
}
fullName.addEventListener("keyup", valiForm);
subject.addEventListener("keyup", valiForm);
email.addEventListener("keyup", valiForm);

function submitForm(event) {
    event.preventDefault();
    formsucess.innerHTML = `<h3 class="ok">The form has been sent</h3>`;
    form.reset();

}

form.addEventListener("submit", submitForm);

function checkForm(value, leng) {
    if (value.trim().length >= leng) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email){
    // denne burde være nokså sikker, har også lagt til valgfri andre dommene tilfelle co.uk etc
    const regEx = /^([a-zA-Z0-9-_\.]+)@([a-z-?]+)\.([a-z]{2,6})(\.[a-z]{2,4})?/g;
    const emailMatche = regEx.test(email);
    return emailMatche;
}

