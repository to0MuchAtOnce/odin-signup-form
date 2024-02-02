const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.form-input');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const emailError = document.querySelector('#email + span.email-error');
const phoneError = document.querySelector('#phone + span.phone-error');
const firstNameError = document.querySelector(
  '#first-name + span.first-name-error'
);
const lastNameError = document.querySelector(
  '#last-name + span.last-name-error'
);
const passwordError = document.querySelector('#password + span.password-error');
const confirmPasswordError = document.querySelector(
  '#confirm-password + span.confirm-password-error'
);

formInputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    if (!input.validity.valid) {
      input.classList.add('error');
      input.style.border = '1px solid hsl(0, 93%, 68%)';
    } else {
      input.classList.remove('error');
      input.style.border = '1px solid hsl(119, 85%, 64%)';
    }
    e.preventDefault();
  });
});

firstName.addEventListener('input', () => {
  if (firstName.validity.valid) {
    firstNameError.textContent = '';
    firstNameError.className = 'name-error';
  } else {
    showError();
  }
});

lastName.addEventListener('input', () => {
  if (lastName.validity.valid) {
    lastNameError.textContent = '';
    lastNameError.className = 'name-error';
  } else {
    showError();
  }
});

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'email-error';
  } else {
    showError();
  }
});

phone.addEventListener('input', () => {
  if (phone.validity.vaild) {
    phoneError.textContent = '';
    phoneError.className = 'phone-error';
  } else {
    showError();
  }
});

password.addEventListener('input', () => {
  if (password.validity.vaild) {
    passwordError.textContent = '';
    passwordError.className = 'password-error';
  } else {
    showError();
  }
});

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.validity.vaild) {
    confirmPasswordError.textContent = '';
    confirmPasswordError.className = 'confirm-password-error';
  } else {
    showError();
  }
});

form.addEventListener('submit', (e) => {
  if (!firstName.validity.vaild) {
    showError();
    e.preventDefault();
  }
  if (!lastName.validity.vaild) {
    showError();
    e.preventDefault();
  }
  if (!email.validity.vaild) {
    showError();
    e.preventDefault();
  }
  if (!phone.validity.vaild) {
    showError();
    e.preventDefault();
  }
  if (!password.validity.vaild) {
    showError();
    e.preventDefault();
  }
  if (!confirmPassword.validity.vaild) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = 'Please enter your first name.';
  }

  if (lastName.validity.valueMissing) {
    lastNameError.textContent = 'Please enter your last name.';
  }

  if (email.validity.valueMissing) {
    emailError.textContent = 'Please enter a vaild email address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'The entered value must be an email address';
  }

  if (phone.validity.valueMissing) {
    phoneError.textContent = 'Please enter a vaild phone number.';
  } else if (phone.validity.tooShort) {
    phoneError.textContent = 'Phone number must be atleast 9 digits.';
  } else {
    phoneError.textContent = '';
  }

  if (password.validity.valueMissing) {
    passwordError.textContent = 'Please enter a valid password.';
  } else {
    passwordError.textContent = '';
  }

  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = 'Please confirm your password.';
  } else {
    confirmPasswordError.textContent = '';
  }

  // Set css classes
  emailError.className = 'error active';
  phoneError.className = 'error active';
  firstNameError.className = 'error active';
  lastNameError.className = 'error active';
  passwordError.className = 'error active';
  confirmPasswordError.className = 'error active';
}
