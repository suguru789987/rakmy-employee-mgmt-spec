var options = {
	series: [{
		name: '累計売上目標',
		type: 'area',
		data: [400000, 800000, 1200000, 1600000, 2000000, 2400000, 2800000, 3200000, 3600000, 4000000, 4400000, 4800000, 5200000, 5600000, 6000000, 6400000, 6800000, 7200000, 7600000, 8000000, 8400000, 8800000, 9200000, 9600000, 10000000, 10400000, 10800000, 11200000, 11600000, 12000000]	
		}, {		
		name: '累計売上実績',
		type: 'area',
		data: [442030, 834130, 1216130, 1639130, 2070130, 2462230, 2844230, 3267230, 3698230, 4199630, 4630630, 5034830, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]	
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
		categories: ["2022/11/1 ㈫", "2022/11/2 ㈬", "2022/11/3 ㈭", "2022/11/4 ㈮", "2022/11/5 ㈯", "2022/11/6 ㈰", "2022/11/7 ㈪", "2022/11/8 ㈫", "2022/11/9 ㈬", "2022/11/10 ㈭", "2022/11/11 ㈮", "2022/11/12 ㈯", "2022/11/13 ㈰", "2022/11/14 ㈪", "2022/11/15 ㈫", "2022/11/16 ㈬", "2022/11/17 ㈭", "2022/11/18 ㈮", "2022/11/19 ㈯", "2022/11/20 ㈰", "2022/11/21 ㈪", "2022/11/22 ㈫", "2022/11/23 ㈬㈷", "2022/11/24 ㈭", "2022/11/25 ㈮", "2022/11/26 ㈯", "2022/11/27 ㈰", "2022/11/28 ㈪", "2022/11/29 ㈫", "2022/11/30 ㈬"],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: true
		},
		labels: {
			show: false,
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

var cumSalesVarianceDailyChart = new ApexCharts(document.querySelector("#cum_sales_variance_daily"), options);
cumSalesVarianceDailyChart.render();