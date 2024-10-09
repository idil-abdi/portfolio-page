function hamburgerBar () {
    const x =document.getElementById('myLink');
    if (x.style.display === 'block') {
        x.style.display ='none';
    } else {
        x.style.display = 'block';
    }
}

// form validation
const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const messageError = document.getElementById('message-error')
const submitError = document.getElementById('submit-error')

function validateName() {
  const name = document.getElementById('contact-name').value;
  if(name.length == 0){
    nameError.innerHTML = 'Enter full name.';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
    const email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Enter email address.';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
      emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
}

function validateMessage() {
    const message = document.getElementById('contact-message').value;
    const required = 30;
    const left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
    return false;        
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
}