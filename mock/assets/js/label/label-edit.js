const labelEditbutton = document.getElementById('kt_label_edit_submit');

labelEditbutton.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "本当に変更して宜しいですか？",
		icon: "warning",
		buttonsStyling: false,
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: 'キャンセル',
		customClass: {
			confirmButton: "btn btn-primary",
			cancelButton: 'btn btn-light-danger'
		}
	});
});