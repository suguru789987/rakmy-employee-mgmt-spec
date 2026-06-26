const fixedDeletebutton1 = document.getElementById('kt_delete_fixedcost1');

fixedDeletebutton1.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "販促費を削除します。集計結果からも削除されますが、よろしいですか？",
		icon: "warning",
		buttonsStyling: false,
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: 'キャンセル',
		customClass: {
			confirmButton: "btn btn-danger",
			cancelButton: 'btn btn-light-dark'
		}
	});
});

const fixedDeletebutton2 = document.getElementById('kt_delete_fixedcost2');

fixedDeletebutton2.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "通信費を削除します。集計結果からも削除されますが、よろしいですか？",
		icon: "warning",
		buttonsStyling: false,
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: 'キャンセル',
		customClass: {
			confirmButton: "btn btn-danger",
			cancelButton: 'btn btn-light-dark'
		}
	});
});

const fixedDeletebutton3 = document.getElementById('kt_delete_fixedcost3');

fixedDeletebutton3.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "保険料を削除します。集計結果からも削除されますが、よろしいですか？",
		icon: "warning",
		buttonsStyling: false,
		showCancelButton: true,
		confirmButtonText: "OK",
		cancelButtonText: 'キャンセル',
		customClass: {
			confirmButton: "btn btn-danger",
			cancelButton: 'btn btn-light-dark'
		}
	});
});