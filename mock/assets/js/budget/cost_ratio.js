var options = {
	
	series: [{
		name: '食材費',
		data: [32]
	}, {
		name: 'PA人件費',
		data: [18]	
	}, {
		name: 'その他変動費',
		data: [10]	
	}, {
		name: '固定費',
		data: [29]	
	}, {
		name: '経常利益',
		data: [11]	
	}],
	chart: {
		height: 120,
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
		},
	},
	legend: {
		show: false
	},
	dataLabels: {
		enabled: true,
		formatter: function (val) {
			return val + "%";
			},
	 	style: {
		 	colors: ['#fff']
	     	},
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['#fff']
	},
	xaxis: {
		categories: ["費用/利益構成比"],
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
			fontSize: "11px",
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
	colors: ['#F6AD54', '#F386B2', '#B2B2B2', '#B5B5C3', '#1BD1A1'],
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

var analysisCostRatioVarianceDailyChart = new ApexCharts(document.querySelector("#budget_cost_ratio"), options);
analysisCostRatioVarianceDailyChart.render();