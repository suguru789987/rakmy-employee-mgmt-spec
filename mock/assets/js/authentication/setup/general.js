const form = document.getElementById('kt_setup_form');

var validator = FormValidation.formValidation(
	form,
	{
		fields: {
			'comname': {
				validators: {
					notEmpty: {
						message: "会社または個人事業主名を入力してください"
					}
				}
			},
			'repname': {
				validators: {
					notEmpty: {
						message: '代表者名を入力してください'
					}
				}
			},
			'postal': {
				validators: {
					notEmpty: {
						message: '郵便番号を入力してください'
					}
				}
			},
			'address': {
				validators: {
					notEmpty: {
						message: '住所を入力してください'
					}
				}
			},
			'bldg': {
				validators: {
					notEmpty: {
						message: '建物を入力してください'
					}
				}
			},
			'email': {
				validators: {
					notEmpty: {
						message: '担当者メールアドレスを入力してください'
					}
				}
			},
			'shopname': {
				validators: {
					notEmpty: {
						message: '店舗名を入力してください'
					}
				}
			},
			'shoppostal': {
				validators: {
					notEmpty: {
						message: '郵便番号を入力してください'
					}
				}
			},
			'shopaddress': {
				validators: {
					notEmpty: {
						message: '住所を入力してください'
					}
				}
			},
			'shopbldg': {
				validators: {
					notEmpty: {
						message: '建物を入力してください'
					}
				}
			},
			'shopphone': {
				validators: {
					notEmpty: {
						message: '電話番号を入力してください'
					}
				}
			}
		},

		plugins: {
			trigger: new FormValidation.plugins.Trigger(),
			bootstrap: new FormValidation.plugins.Bootstrap5({
				rowSelector: '.fv-row',
				eleInvalidClass: '',
				eleValidClass: ''
			})
		}
	}
);


const submitButton = document.getElementById('kt_setup_submit');
submitButton.addEventListener('click', function (e) {
	e.preventDefault();

	if (validator) {
		validator.validate().then(function (status) {
			console.log('validated!');

			if (status == 'Valid') {
				submitButton.setAttribute('data-kt-indicator', 'on');

				submitButton.disabled = true;

				setTimeout(function () {
					// Remove loading indication
					submitButton.removeAttribute('data-kt-indicator');

					submitButton.disabled = false;

					Swal.fire({
						text: "セットアップが完了しました",
						icon: "success",
						buttonsStyling: false,
						confirmButtonText: "OK",
						customClass: {
							confirmButton: "btn btn-primary"
						}
					});

					//form.submit(); // Submit form
				}, 2000);
			}
		});
	}
});
