function showError(text) {
  $('.error').text(text);
  $('.error').slideDown();
}

function resetError() {
  $('.error').slideUp();
  $('.error').text('');
}

function showInputError(selector, text) {
  $(selector).show();
  $(selector).text(text);
}

function resetInputErrors() {
  $('.input-error').hide();
  $('.input-error').text('');
}