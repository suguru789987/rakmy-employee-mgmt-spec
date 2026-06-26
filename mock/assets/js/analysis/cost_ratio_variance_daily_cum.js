var options = {
	
	series: [{
		name: '食材費',
		data: [40, 43]
	}, {
		name: 'PA人件費',
		data: [40, 42]	
	}, {
		name: '固定費',
		data: [20, 15]	
	}],
	chart: {
		height: 140,
		type: 'bar',
		stacked: true,
		stackType: '100%',
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: true,
		}
	},
	legend: {
		show: false
	},
	dataLabels: {
		enabled: true
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['#fff']
	},
	xaxis: {
		categories: ["コスト比率目標", "コスト比率実績"],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		},
		labels: {
			show: false,
			style: {
				fontFamily: 'inherit',
				colors: KTUtil.getCssVariableValue("--bs-gray-400"),
				fontSize: "12px"
			}
		}
	},
	yaxis: {
		show: true,
		labels: {
		  style: {
			colors: KTUtil.getCssVariableValue("--bs-gray-600"),
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
		y: {
			formatter: function(val) {
				return val + '%'
			}
		},
		marker: {
			show: true,
		}
	},
	colors: ['#F6AD54', '#F386B2', '#B2B2B2'],
	grid: {
		borderColor: KTUtil.getCssVariableValue("--bs-gray-200"),
		strokeDashArray: 2,
		yaxis: {
			lines: {
				show: false
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

var analysisCostRatioVarianceDailyChart = new ApexCharts(document.querySelector("#chart_analysis_cost_ratio_daily_cum"), options);
analysisCostRatioVarianceDailyChart.render();