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
	var $loading = $('.hidden');
	$loading.addClass('visible');
}

function requestAddress{
	
}