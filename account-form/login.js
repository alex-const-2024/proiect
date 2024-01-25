
function validateInputs() {
  let inputsValid = true;

  if ($('#email').val() === '') {
    showInputError('#email_error', 'This input is required.');
    inputsValid = false;
  }

  if ($('#password').val() === '') {
    showInputError('#password_error', 'This input is required.');
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

    const email = $('#email').val();
    const password = $('#password').val();

    if (localStorage.getItem('accounts') === null) {
      showError('There are no accounts');
      return;
    }

    const accounts = JSON.parse(localStorage.getItem('accounts'));

    let accountFound = false;
    for (const account of accounts) {
      if (account.email !== email) continue;
      if (account.password !== password) continue;
      accountFound = true;
      break;
    }

    if (accountFound) {
      console.log(`User with email ${email} has logged in successfully!`);
      localStorage.setItem('currentUser', email);
      window.location = 'index.html';
    } else {
      showError('No matching account was found.');
    }
  });
})