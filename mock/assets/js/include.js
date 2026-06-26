function include_header_company(){
	$.ajax({
		url: 'header_company.html',
		async: false,
	}).done(function(header_html){
		document.write(header_html);
	});
}

function include_sidebar_company(){
	$.ajax({
		url: 'sidebar_company.html',
		async: false,
	}).done(function(sidebar_html){
		document.write(sidebar_html);
	});
}

function include_header_store(){
	$.ajax({
		url: 'header_store.html',
		async: false,
	}).done(function(header_html){
		document.write(header_html);
	});
}

function include_sidebar_store(){
	$.ajax({
		url: 'sidebar_store.html',
		async: false,
	}).done(function(sidebar_html){
		document.write(sidebar_html);
	});
}

// Initialize number and decimal input handlers
$(document).ready(function() {
	// Number input - integers only with thousand separators
	$(document).on('input', '.number-input', function() {
		let value = $(this).val().replace(/[^\d]/g, '');
		if (value) {
			$(this).val(parseInt(value).toLocaleString());
		}
	});

	// Decimal input - decimals only (for percentages)
	$(document).on('input', '.decimal-input', function() {
		let value = $(this).val().replace(/[^\d.]/g, '');
		// Allow only one decimal point
		let parts = value.split('.');
		if (parts.length > 2) {
			value = parts[0] + '.' + parts.slice(1).join('');
		}
		$(this).val(value);
	});
});