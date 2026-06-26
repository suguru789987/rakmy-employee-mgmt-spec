"use strict";
var KTNewCard = function () {
  var t, e, n, r, o, i;
  return {
	init: function () {
	  (i = document.querySelector("#kt_new_card")) && (o = new bootstrap.Modal(i), r = document.querySelector("#kt_new_card_form"), t = document.getElementById("kt_new_card_submit"), e = document.getElementById("kt_new_card_cancel"), $(r.querySelector('[name="card_expiry_month"]')).on("change", (function () {
		n.revalidateField("card_expiry_month")
	  })), $(r.querySelector('[name="card_expiry_year"]')).on("change", (function () {
		n.revalidateField("card_expiry_year")
	  })), n = FormValidation.formValidation(r, {
		fields: {
		  card_name: {
			validators: {
			  notEmpty: {
				message: "カード名義を入力してください"
			  }
			}
		  },
		  card_number: {
			validators: {
			  notEmpty: {
				message: "カード番号を入力してください"
			  },
			  creditCard: {
				message: "カード番号が正しくありません"
			  }
			}
		  },
		  card_expiry_month: {
			validators: {
			  notEmpty: {
				message: "月を選択してください"
			  }
			}
		  },
		  card_expiry_year: {
			validators: {
			  notEmpty: {
				message: "年を選択してください"
			  }
			}
		  },
		  card_cvv: {
			validators: {
			  notEmpty: {
				message: "セキュリティコードを入力してください"
			  },
			  digits: {
				message: "セキュリティコードは数字のみで入力してください"
			  },
			  stringLength: {
				min: 3,
				max: 4,
				message: "セキュリティコードは3-4桁の数字のみを入力してください"
			  }
			}
		  }
		},
		plugins: {
		  trigger: new FormValidation.plugins.Trigger,
		  bootstrap: new FormValidation.plugins.Bootstrap5({
			rowSelector: ".fv-row",
			eleInvalidClass: "",
			eleValidClass: ""
		  })
		}
	  }), t.addEventListener("click", (function (e) {
		e.preventDefault(), n && n.validate().then((function (e) {
		  console.log("validated!"), "Valid" == e ? (t.setAttribute("data-kt-indicator", "on"), t.disabled = !0, setTimeout((function () {
			t.removeAttribute("data-kt-indicator"), t.disabled = !1, Swal.fire({
			  text: "ご契約内容が正しく登録されました",
			  icon: "success",
			  buttonsStyling: !1,
			  confirmButtonText: "OK",
			  customClass: {
				confirmButton: "btn btn-primary"
			  }
			}).then((function (t) {
			  t.isConfirmed && o.hide()
			}))
		  }), 2e3)) : Swal.fire({
			text: "必要な情報が正しく入力されていません",
			icon: "error",
			buttonsStyling: !1,
			confirmButtonText: "OK",
			customClass: {
			  confirmButton: "btn btn-primary"
			}
		  })
		}))
	  })), e.addEventListener("click", (function (t) {
		t.preventDefault(), Swal.fire({
		  text: "フォーム登録をキャンセルして宜しいでしょうか？",
		  icon: "warning",
		  showCancelButton: !0,
		  buttonsStyling: !1,
		  confirmButtonText: "キャンセルする",
		  cancelButtonText: "戻る",
		  customClass: {
			confirmButton: "btn btn-primary",
			cancelButton: "btn btn-active-light"
		  }
		}).then((function (t) {
		  t.value ? (r.reset(), o.hide()) : "cancel" === t.dismiss && Swal.fire({
			text: "フォーム入力はキャンセルされていません",
			icon: "error",
			buttonsStyling: !1,
			confirmButtonText: "OK!",
			customClass: {
			  confirmButton: "btn btn-primary"
			}
		  })
		}))
	  })))
	}
  }
}();
KTUtil.onDOMContentLoaded((function () {
  KTNewCard.init()
}));