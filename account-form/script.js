$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    const account = {
      name: $('#name').val(),
      surname: $('#surname').val(),
      email: $('#email').val(),
      password: $('#password').val()
    };
    
    localStorage.setItem('account', JSON.stringify(account));

    const contCitit = JSON.parse(localStorage.getItem('account'));

    console.log(contCitit);
  });
})