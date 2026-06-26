"use strict";
var KTConnectSettings = function() {
	var e, t;
	return {
		init: function() {
			e = document.getElementById("kt_connect_new_form"), e.querySelector("#kt_connect_new_submit"), t = FormValidation.formValidation(e, {
				fields: {
					id: {
						validators: {
							notEmpty: {
								message: "IDを入力してください"
							}
						}
					},
					password: {
						validators: {
							notEmpty: {
								message: "パスワードを入力してください"
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
	KTConnectSettings.init()
}));

const connectNewbutton = document.getElementById('kt_connect_new_submit');

connectNewbutton.addEventListener('click', e => {
	e.preventDefault();

	Swal.fire({
		text: "連携設定が完了しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});

const connectDisconnectbutton = document.getElementById('kt_disconnect_submit');

connectDisconnectbutton.addEventListener('click', e => {
	e.preventDefault();

	Swal.fire({
		text: "連携解除が完了しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});