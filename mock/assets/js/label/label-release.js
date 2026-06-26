const labelReleasebutton1 = document.getElementById('kt_label_release1');

labelReleasebutton1.addEventListener('click', e =>{
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

const labelReleasebutton2 = document.getElementById('kt_label_release2');

labelReleasebutton2.addEventListener('click', e =>{
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

const labelReleasebutton3 = document.getElementById('kt_label_release3');

labelReleasebutton3.addEventListener('click', e =>{
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