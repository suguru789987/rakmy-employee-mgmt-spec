var options = {
	series: [{
		name: 'PA人件費',
		type: "bar",
		data: [60000, 90909, 60929, 65454, 75454, 80000, 75454]
	}, {
		name: '仕入',
		type: "bar",
		data: [74050, 76750, 75000, 71350, 78100, 76750, 71350]
	}, {
		name: '固定費',
		type: "bar",
		data: [120000, 120000, 120000, 120000, 120000, 120000, 120000]
	}],
	chart: {
		type: 'bar',
		stacked: true,
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
		  seriesName: 'コスト',
		  show: false
		}
	  ],
	fill: {
	  opacity: [1, 1, 1],
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
					return "¥" + y.toFixed(0);
				}
				return y;
			}
		}]
	},
	colors: ['#F687B3', '#F6AD55', '#B2B2B2'],
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

var analysisChart = new ApexCharts(document.querySelector("#chart_cost_daily"), options);
analysisChart.render();