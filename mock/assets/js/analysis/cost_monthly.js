var options = {
	series: [{
		name: 'PA人件費',
		type: "bar",
		data: [1800000, 2727270, 1827870, 1963620, 2263620, 2400000, 2263620, 1963620, 2727270, 2263620, 1827870, 2263620]
	}, {
		name: '仕入',
		type: "bar",
		data: [2221500, 2302500, 2250000, 2140500, 2343000, 2302500, 2140500, 2250000, 2221500, 2343000, 2302500, 2221500]
	}, {
		name: '固定費',
		type: "bar",
		data: [3600000, 3600000, 3600000, 3600000, 3600000, 3600000, 3600000, 3600000, 3600000, 3600000, 3600000, 3600000]
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

var analysisChart = new ApexCharts(document.querySelector("#chart_cost_monthly"), options);
analysisChart.render();