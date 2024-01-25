function charIsNumber(char) {
  return !Number.isNaN(Number(char));
}

function validatePassword(password) {
  let containsLowercase = false;
  let containsUppercase = false;
  let containsNumber = false;
  let containsSpecialCharacters = false;

  const specialChars = '!@#$%^&*(){}';

  for (const char of password) {
    if (char === char.toLowerCase()) {
      containsLowercase = true;
    }

    if (char === char.toUpperCase()) {
      containsUppercase = true;
    }

    if (charIsNumber(char)) {
      containsNumber = true;
    }

    if (specialChars.includes(char)) {
      containsSpecialCharacters = true;
    }
  }

  return  containsLowercase &&
          containsUppercase &&
          containsNumber &&
          containsSpecialCharacters;
  }

function validateInputs() {
  let inputsValid = true;

  if ($('#name').val() === '') {
    showInputError('#name_error', 'This input is required.');
    inputsValid = false;
  }

  if ($('#surname').val() === '') {
    showInputError('#surname_error', 'This input is required.');
    inputsValid = false;
  }

  if ($('#email').val() === '') {
    showInputError('#email_error', 'This input is required.');
    inputsValid = false;
  }

  if (!validatePassword($('#password').val())) {
    showInputError('#password_error', 'The password must contain at least a number, lowercase, uppercase and special characters.');
    inputsValid = false;
  }

  if ($('#password').val() === '') {
    showInputError('#password_error', 'This input is required.');
    inputsValid = false;
  }

  if ($('#check_password').val() !== $('#password').val()) {
    showInputError('#check_password_error', 'The passwords do not match!');
    inputsValid = false;
  }

  return inputsValid;
}

$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    resetError();
    resetInputErrors();

    if (!validateInputs()) return;

    const account = {
      name: $('#name').val(),
      surname: $('#surname').val(),
      email: $('#email').val(),
      password: $('#password').val()
    };

    if (localStorage.getItem('accounts') === null) {
      localStorage.setItem('accounts', '[]');
    }

    const currentAccounts = JSON.parse(localStorage.getItem('accounts'));

    currentAccounts.push(account);

    localStorage.setItem('accounts', JSON.stringify(currentAccounts));
  });
})