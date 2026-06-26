"use strict";

const userDetailbutton = document.getElementById('kt_statement_submit');

userDetailbutton.addEventListener('click', e => {
	e.preventDefault();

	Swal.fire({
		text: "仕入明細書を送信しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});
