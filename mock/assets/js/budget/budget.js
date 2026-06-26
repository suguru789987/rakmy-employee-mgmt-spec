// Stepper lement
var element = document.querySelector("#modal_budget_bias_clickable");

// Initialize Stepper
var stepper = new KTStepper(element);

// Handle navigation click
stepper.on("kt.stepper.click", function (stepper) {
	stepper.goTo(stepper.getClickedStepIndex()); // go to clicked step
});

// Handle next step
stepper.on("kt.stepper.next", function (stepper) {
	stepper.goNext(); // go next step
});

// Handle previous step
stepper.on("kt.stepper.previous", function (stepper) {
	stepper.goPrevious(); // go previous step
});


const budgetSavebutton = document.getElementById('kt_budget_save');

budgetSavebutton.addEventListener('click', e => {
	e.preventDefault();

	Swal.fire({
		text: "設定保存が完了しました",
		icon: "success",
		buttonsStyling: false,
		confirmButtonText: "OK",
		customClass: {
			confirmButton: "btn btn-primary"
		}
	});
});

