var options = {
	series: [{
		name: '売上目標',
		type: "bar",
		data: [400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000]
		}, {
		name: '売上実績',
		type: "bar",
		data: [442030, 392100, 382000, 423000, 431000, 392100, 382000, 423000, 431000, 501400, 431000, 404200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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

var salesVarianceDailyChart = new ApexCharts(document.querySelector("#sales_variance_daily"), options);
salesVarianceDailyChart.render();