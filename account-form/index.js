$(function () {
  $('.logout').on({
    'click': function () {
      localStorage.removeItem('currentUser');
      window.location = 'login.html';
    }
  })

  const currentUser = localStorage.getItem('currentUser');
  if (currentUser === null) {
    window.location = 'login.html';
  } else {
    $('.email').text(currentUser);
  }
});