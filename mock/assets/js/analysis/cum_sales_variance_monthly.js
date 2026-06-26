var options = {
	series: [{
		name: '累計売上目標',
		type: 'area',
		data: [12300000, 24600000, 36900000, 49200000, 61500000, 73800000, 86100000, 98400000, 110700000, 123000000, 135300000, 147600000]	
		}, {		
		name: '累計売上実績',
		type: 'area',
		data: [13300000, 26600000, 39900000, 53200000, 66500000, 79800000, 93100000, 106400000, 119700000, 133000000, 142424000, 0]	
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
			borderRadius: [5],
			columnWidth: '60%',
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
	  opacity: [0.25, 0.25],
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
	colors: [KTUtil.getCssVariableValue("--bs-gray-300"), KTUtil.getCssVariableValue("--bs-primary")],
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

var cumSalesVarianceMonthlyChart = new ApexCharts(document.querySelector("#cum_sales_variance_monthly"), options);
cumSalesVarianceMonthlyChart.render();