const shopDetailbutton = document.getElementById('kt_shop_submit');

shopDetailbutton.addEventListener('click', e =>{
	e.preventDefault();

	Swal.fire({
		text: "店舗情報を登録しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});