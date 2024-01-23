$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

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