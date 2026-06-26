"use strict";
var KTAccountSettingsProfileDetails = function() {
	var e, t;
	return {
		init: function() {
			e = document.getElementById("kt_account_profile_details_form"), e.querySelector("#kt_account_profile_details_submit"), t = FormValidation.formValidation(e, {
				fields: {
					name: {
						validators: {
							notEmpty: {
								message: "名前を入力してください"
							}
						}
					},
					repname: {
						validators: {
							notEmpty: {
								message: "代表者名を入力してください"
							}
						}
					},
					comname: {
						validators: {
							notEmpty: {
								message: "会社または個人事業主名を入力してください"
							}
						}
					},
					postal: {
						validators: {
							notEmpty: {
								message: "郵便番号を入力してください"
							}
						}
					},
					address: {
						validators: {
							notEmpty: {
								message: "住所を入力してください"
							}
						}
					},
					phone: {
						validators: {
							notEmpty: {
								message: "電話番号を入力してください"
							}
						}
					},
					email: {
						validators: {
							notEmpty: {
								message: "メールアドレスを入力してください"
							}
						}
					},
					shopname: {
						validators: {
							notEmpty: {
								message: "店舗名を入力してください"
							}
						}
					},
					id: {
						validators: {
							notEmpty: {
								message: "IDを入力してください"
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger,
					submitButton: new FormValidation.plugins.SubmitButton,
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: ".fv-row",
						eleInvalidClass: "",
						eleValidClass: ""
					})
				}
			})
		}
	}
}();
KTUtil.onDOMContentLoaded((function() {
	KTAccountSettingsProfileDetails.init()
}));

const button = document.getElementById('kt_account_profile_details_submit');

button.addEventListener('click', e => {
	e.preventDefault();

	Swal.fire({
		text: "変更内容を保存しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});

