const holidaysSubmitbutton = document.getElementById('kt_holiday_submit');

holidaysSubmitbutton.addEventListener('click', e => {
	e.preventDefault();

	Swal.fire({
		text: "休業日設定を保存しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});