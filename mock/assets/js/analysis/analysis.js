var options = {
	series: [{
		name: '売上',
		type: "bar",
		data: [300000, 490909, 609259, 245454, 245454, 300000, 245454]
	}, {
		name: '仕入',
		type: "bar",
		data: [94050, 156750, 5000, 313500, 188100, 156750, 31350]
	}, {
		name: '食材仕入率',
		type: "area",
		data: [31.4, 31.9, 0.8, 127.7, 76.6, 52.3, 12.8]
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
		categories: ["4/22(金)", "4/23(土)", "4/24(日)", "4/25(月)", "4/26(火)", "4/27(水)", "4/28(木)"],
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
		  seriesName: '売上',
		  show: false
		},
		{
		  opposite: true,
		  seriesName: '食材仕入率',
		  show: false
		}
	  ],
	fill: {
	  opacity: [1, 1, 0.25],
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
		}, {
			formatter: function(y) {
				if (typeof y !== "undefined") {
					return y.toFixed(2) + "%";
				}
				return y;
			}
		}]
	},
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-gray-400")],
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

var analysisChart = new ApexCharts(document.querySelector("#chart_analysis_company"), options);
analysisChart.render();