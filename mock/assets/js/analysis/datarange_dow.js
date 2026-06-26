var start = moment().startOf("month");
var end = moment().subtract(1, "day");

function cb(start, end) {
	$("#kt_daterangepicker_dow").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
}

$("#kt_daterangepicker_dow").daterangepicker({
	startDate: start,
	endDate: end,
	ranges: {
	"今月": [moment().startOf("month"), moment().subtract(1, "day")],
	"先月": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
	}
}, cb);

var start = moment().subtract(1, "month").startOf("month");
var end =  moment().subtract(1, "month").endOf("month");

function cb(start, end) {
	$("#kt_daterangepicker_dow_comp").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
}

$("#kt_daterangepicker_dow_comp").daterangepicker({
	startDate: start,
	endDate: end,
	ranges: {
	"先月": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
	"先々月": [moment().subtract(2, "month").startOf("month"), moment().subtract(2, "month").endOf("month")]
	}
}, cb);

cb(start, end);