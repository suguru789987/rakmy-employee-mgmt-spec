const inventoryRequestbutton = document.getElementById('kt_request_submit');

inventoryRequestbutton.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "指示を送ります。よろしいですか？",
		icon: "warning",
		buttonsStyling: false,
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: 'キャンセル',
		customClass: {
			confirmButton: "btn btn-primary",
			cancelButton: 'btn btn-danger'
		}
	});
});