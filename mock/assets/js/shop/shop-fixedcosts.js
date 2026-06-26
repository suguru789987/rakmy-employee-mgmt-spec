const shopFixedcostsbutton = document.getElementById('kt_fixedcosts_submit');

shopFixedcostsbutton.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "変更内容を保存しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});