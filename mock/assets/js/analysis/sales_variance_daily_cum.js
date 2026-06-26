var options = {
	
	series: [{
		name: '累計売上実績',
		type: "bar",
		data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5034830, 4630630, 4199630, 3698230, 3267230, 2844230, 2462230, 2070130, 1639130, 1216130, 834130, 442030]
	}],
	chart: {
		height: 475,
		type: 'bar',
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: [4],
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
		curve: "smooth",
		show: true,
		width: 2,
		colors: ['transparent']
	},
	responsive: [{
	  breakpoint: 576,
	  options: {
		chart: {
			height: 400,
		},
		yaxis: {
			labels: {
			  style: {
				colors: KTUtil.getCssVariableValue("--bs-gray-500"),
				fontSize: "10px",
			  }
			}
		},
		xaxis: {
			max: 12000000,
			labels: {
				show: false
			}
		}
	  }
	}],
	xaxis: {
		categories: ["2022/11/30 ㈬", "2022/11/29 ㈫", "2022/11/28 ㈪", "2022/11/27 ㈰", "2022/11/26 ㈯", "2022/11/25 ㈮", "2022/11/24 ㈭", "2022/11/23 ㈬㈷", "2022/11/22 ㈫", "2022/11/21 ㈪", "2022/11/20 ㈰", "2022/11/19 ㈯", "2022/11/18 ㈮", "2022/11/17 ㈭", "2022/11/16 ㈬", "2022/11/15 ㈫", "2022/11/14 ㈪", "2022/11/13 ㈰", "2022/11/12 ㈯", "2022/11/11 ㈮", "2022/11/10 ㈭", "2022/11/9 ㈬", "2022/11/8 ㈫", "2022/11/7 ㈪", "2022/11/6 ㈰", "2022/11/5 ㈯",  "2022/11/4 ㈮", "2022/11/3 ㈭", "2022/11/2 ㈬", "2022/11/1 ㈫"],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
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
	yaxis: {
		max: 12000000,
		show: true,
		labels: {
		  style: {
			colors: KTUtil.getCssVariableValue("--bs-gray-500"),
			fontSize: "10px",
		  }
		}
	  },
	fill: {
		opacity: 1
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
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300")],
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

var analysisSalesVarianceDailyChart = new ApexCharts(document.querySelector("#chart_analysis_sales_daily_cum"), options);
analysisSalesVarianceDailyChart.render();