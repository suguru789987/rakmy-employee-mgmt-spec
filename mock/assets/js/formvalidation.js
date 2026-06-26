// Class definition
var CostConfig = function () {
	// Shared variables


	// Private functions
	const initForm = () => {
		// Select form
		const form = document.getElementById('cost_config_form');

		if (!form) {
			return;
		}

		// Dynamically create validation non-empty rule
		const requiredFields = form.querySelectorAll('.required');
		var detectedField;
		var validationFields = {
			fields: {},

			plugins: {
				trigger: new FormValidation.plugins.Trigger(),
				bootstrap: new FormValidation.plugins.Bootstrap5({
					rowSelector: '.fv-row',
					eleInvalidClass: '',
					eleValidClass: ''
				})
			}
		}

		// Detect required fields
		requiredFields.forEach(el => {
			const input = el.closest('.fv-row').querySelector('input');
			if (input) {
				detectedField = input;
			}

			const select = el.closest('.fv-row').querySelector('select');
			if (select) {
				detectedField = select;
			}

			// Add validation rule                
			const name = detectedField.getAttribute('name');
			validationFields.fields[name] = {
				validators: {
					notEmpty: {
						message: el.innerText + 'を入力してください'
					}
				}
			}
		});

		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		var validator = FormValidation.formValidation(
			form,
			validationFields
		);

		// Submit button handler
		const submitButton = form.querySelector('[data-cost-config="submit"]');
		submitButton.addEventListener('click', function (e) {
			// Prevent default button action
			e.preventDefault();

			// Validate form before submit
			if (validator) {
				validator.validate().then(function (status) {
					console.log('validated!');

					if (status == 'Valid') {
						// Show loading indication
						submitButton.setAttribute('data-kt-indicator', 'on');

						// Disable button to avoid multiple click 
						submitButton.disabled = true;

						// Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
						setTimeout(function () {
							// Remove loading indication
							submitButton.removeAttribute('data-kt-indicator');

							// Enable button
							submitButton.disabled = false;

							// Show popup confirmation 
							Swal.fire({
								text: "変更内容を保存しました",
								icon: "success",
								buttonsStyling: false,
								confirmButtonText: '<a href="" class="text-white">OK</a>',
								customClass: {
									confirmButton: "btn btn-primary"
								}
							});

							//form.submit(); // Submit form
						}, 2000);
					} else {
						// Show popup error 
						Swal.fire({
							text: "入力内容に不足もしくは修正が必要な内容があります",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "OK",
							customClass: {
								confirmButton: "btn btn-light-danger"
							}
						});
					}
				});
			}
		});
	}


	// Public methods
	return {
		init: function () {

			initForm();

		}
	};
}();

var AddCategory = function () {
	// Shared variables


	// Private functions
	const initForm = () => {
		// Select form
		const form = document.getElementById('add_category_form');

		if (!form) {
			return;
		}

		// Dynamically create validation non-empty rule
		const requiredFields = form.querySelectorAll('.required');
		var detectedField;
		var validationFields = {
			fields: {},

			plugins: {
				trigger: new FormValidation.plugins.Trigger(),
				bootstrap: new FormValidation.plugins.Bootstrap5({
					rowSelector: '.fv-row',
					eleInvalidClass: '',
					eleValidClass: ''
				})
			}
		}

		// Detect required fields
		requiredFields.forEach(el => {
			const input = el.closest('.fv-row').querySelector('input');
			if (input) {
				detectedField = input;
			}

			const select = el.closest('.fv-row').querySelector('select');
			if (select) {
				detectedField = select;
			}

			// Add validation rule                
			const name = detectedField.getAttribute('name');
			validationFields.fields[name] = {
				validators: {
					notEmpty: {
						message: el.innerText + 'を入力してください'
					}
				}
			}
		});

		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		var validator = FormValidation.formValidation(
			form,
			validationFields
		);

		// Submit button handler
		const submitButton = form.querySelector('[data-cost-config="submit"]');
		submitButton.addEventListener('click', function (e) {
			// Prevent default button action
			e.preventDefault();

			// Validate form before submit
			if (validator) {
				validator.validate().then(function (status) {
					console.log('validated!');

					if (status == 'Valid') {
						// Show loading indication
						submitButton.setAttribute('data-kt-indicator', 'on');

						// Disable button to avoid multiple click 
						submitButton.disabled = true;

						// Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
						setTimeout(function () {
							// Remove loading indication
							submitButton.removeAttribute('data-kt-indicator');

							// Enable button
							submitButton.disabled = false;

							// Show popup confirmation 
							Swal.fire({
								text: "変更内容を保存しました",
								icon: "success",
								buttonsStyling: false,
								confirmButtonText: '<a href="" class="text-white">OK</a>',
								customClass: {
									confirmButton: "btn btn-primary"
								}
							});

							//form.submit(); // Submit form
						}, 2000);
					} else {
						// Show popup error 
						Swal.fire({
							text: "入力内容に不足もしくは修正が必要な内容があります",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "OK",
							customClass: {
								confirmButton: "btn btn-light-danger"
							}
						});
					}
				});
			}
		});
	}


	// Public methods
	return {
		init: function () {

			initForm();

		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	CostConfig.init();
	AddCategory.init();
});