var options = {
	series: [{
		name: '施策コスト',
		type: "bar",
		data: [-5000, 0, 0, -12400, -6100, 0, 0, 0, 0, -30000, -10000, -10000, -10000, -10000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}, {
		name: 'リターン実績',
		type: "bar",
		data: [42030, 0, 0, 23000, 31000, 0, 0, 0, 0, 101400, 31000, 4200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}],
	chart: {
		height: 200,
		fontFamily: 'inherit',
		stacked: true,
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: [6],
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
		  seriesName: '¥',
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
	colors: [KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-primary")],
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

var actionReturnDailyChart = new ApexCharts(document.querySelector("#action_return_daily"), options);
actionReturnDailyChart.render();