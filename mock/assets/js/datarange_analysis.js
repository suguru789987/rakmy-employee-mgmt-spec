var start = moment().startOf("month");
var end = moment().endOf("month");

function cb(start, end) {
	$("#kt_daterangepicker_2").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
}

$("#kt_daterangepicker_2").daterangepicker({
	startDate: start,
	endDate: end,
	ranges: {
	"今月": [moment().startOf("month"), moment().endOf("month")],
	"先月": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
	}
}, cb);

cb(start, end);