var $zipcodeInput = $('.zipcode');
$zipcodeInput.mask('00000-000');

$zipcodeInput.on('keyup', getAddress);

function getAddress() {
  var isZipCodeValid = $zipcodeInput.val().length === 9;
  if (isZipCodeValid) {
    showLoading();
    requestAddress();
  }
}

function showLoading() {
  var $loading = $('.loading');
  $loading.removeClass('hidden');
}

function hideLoading() {
  var $loading = $('.loading');
  $loading.addClass('hidden');
}

function requestAddress() {
  var zipcode = $zipcodeInput.val().replace('-','');
  var url = 'http://192.168.0.54:3000/address/' + zipcode;
  $.get(url, showAddress);
}

function showInputs() {
  $('input.hidden').removeClass('hidden');
}

function showAddress(response) {
  hideLoading();
  $('.street').val(response.street);
  $('.city').val(response.city);
  $('.district').val(response.district);
  $('.state').val(response.state);
  showInputs();
  $('.number').focus();
}

