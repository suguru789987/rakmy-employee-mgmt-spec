const labelDeletebutton = document.getElementById('kt_label_delete_submit');

labelDeletebutton.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "ラベルを削除します。（商品に貼られたラベルも解除されます。）宜しいですか？",
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


const labelReleasebutton = document.getElementById('kt_label_release');

labelReleasebutton.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "ラベルを解除して宜しいですか？",
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