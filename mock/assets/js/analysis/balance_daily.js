var options = {
	series: [{
		name: '経常利益',
		type: "bar",
		data: [94050, 156750, 189900, 113500, 188100, 156750, 31350]
	}, {
		name: '変動利益',
		type: "bar",
		data: [300000, 490909, 529259, 245454, 245454, 300000, 245454]
	}],
	chart: {
		type: 'bar',
		height: 300,
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: [6],
			columnWidth: '35%',
			endingShape: 'rounded'
		},
	},
	legend: {
		show: false
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: "smooth",
		show: true,
		width: 2,
		colors: ['transparent']
	},
	xaxis: {
		categories: ["10/22(金)", "10/23(土)", "10/24(日)", "10/25(月)", "10/26(火)", "10/27(水)", "10/28(木)"],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		},
		labels: {
			style: {
				fontFamily: 'inherit',
				colors: KTUtil.getCssVariableValue("--bs-gray-500"),
				fontSize: "12px"
			}
		}
	},
	yaxis: [
		{
		  seriesName: '経常利益',
		  show: false
		},
		{
		  seriesName: '経常利益',
		  show: false
		}
	  ],
	fill: {
	  opacity: [1, 1],
	},
	tooltip: {
		shared: true,
		intersect: false,
		y: [{
			formatter: function(y) {
				if (typeof y !== "undefined") {
					return "¥" + y.toFixed(0);
				}
				return y;
			}
		}, {
			formatter: function(y) {
				if (typeof y !== "undefined") {
					return "¥" + y.toFixed(0);
				}
				return y;
			}
		}]
	},
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-lightgreen")],
	grid: {
		borderColor: KTUtil.getCssVariableValue("--bs-gray-200"),
		strokeDashArray: 2,
		yaxis: {
			lines: {
				show: true
			}
		},
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
};

var analysisChart = new ApexCharts(document.querySelector("#chart_balance_daily"), options);
analysisChart.render();