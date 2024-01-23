$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    const email = $('#email').val();
    const password = $('#password').val();

    if (localStorage.getItem('accounts') === null) {
      console.log('There are no accounts');
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
      console.log('No matching account was found.');
    }
  });
})