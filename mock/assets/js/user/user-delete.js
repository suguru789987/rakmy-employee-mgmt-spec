const userDeletebutton = document.getElementById('kt_delete_submit');

userDeletebutton.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "本当に削除して宜しいですか？",
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