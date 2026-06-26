var options = {
	series: [{
		name: '売上 (税込)',
		type: "bar",
		data: [5840000, 6190909, 6709259, 6145454, 7245454, 6700000, 8245454, 7245454, 7345454, 6945454, 7245454, 8145454]
	}, {
		name: '客数',
		type: "area",
		data: [1257, 1468, 1872, 1232, 1489, 1529, 2103, 1489, 1889, 1689, 1389, 1789]
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
		categories: ["2022/10", "2022/09", "2022/08", "2022/07", "2022/06", "2022/05", "2022/04", "2022/03", "2022/02", "2022/01", "2021/12", "2021/11"],
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
		  seriesName: '売上',
		  show: false
		},
		{
		  opposite: true,
		  seriesName: '客数',
		  show: false
		}
	  ],
	fill: {
	  opacity: [1, 0.25],
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
		}]
	},
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-400")],
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

var analysisChart = new ApexCharts(document.querySelector("#chart_report_monthly"), options);
analysisChart.render();