var options = {
	series: [{
		name: '食材仕入率目標',
		type: "bar",
		data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
		}, {
		name: '食材仕入率実績',
		type: "bar",
		data: [32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0]
	}],
	chart: {
		height: 200,
		fontFamily: 'inherit',
		stacked: false,
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: [6],
			columnWidth: '30%',
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
		curve: 'smooth',
		show: true,
		width: 2
	},
	xaxis: {
		categories: ["2022年1月", "2022年2月", "2022年3月", "2022年4月", "2022年5月", "2022年6月", "2022年7月", "2022年8月", "2022年9月", "2022年10月", "2022年11月", "2022年12月"],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: true
		},
		labels: {
			show: true,
			style: {
				fontFamily: 'inherit',
				colors: KTUtil.getCssVariableValue("--bs-gray-500"),
				fontSize: "10px"
			}
		}
	},
	yaxis: [
		{
		  seriesName: '売上',
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
						return y.toFixed(2) + "%";
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
	colors: [KTUtil.getCssVariableValue("--bs-gray-300"), '#f6ad54'],
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

var purchasingVarianceMonthlyChart = new ApexCharts(document.querySelector("#purchasing_variance_monthly"), options);
purchasingVarianceMonthlyChart.render();