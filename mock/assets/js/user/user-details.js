"use strict";
var KTAccountSettingsProfileDetails = function() {
	var e, t;
	return {
		init: function() {
			e = document.getElementById("kt_account_profile_details_form"), e.querySelector("#kt_account_profile_details_submit"), t = FormValidation.formValidation(e, {
				fields: {
					phone: {
						validators: {
							notEmpty: {
								message: "電話番号を入力してください"
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

const userDetailbutton = document.getElementById('kt_user_submit');

userDetailbutton.addEventListener('click', e => {
	e.preventDefault();

	Swal.fire({
		text: "ユーザー情報を登録しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});
