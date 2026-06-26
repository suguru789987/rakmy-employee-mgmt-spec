var options = {
	series: [{
		name: '売上目標',
		type: "bar",
		data: [400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000]
		}, {
		name: '売上実績',
		type: "bar",
		data: [442030, 392100, 382000, 423000, 431000, 392100, 382000, 423000, 431000, 501400, 431000, 404200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		}, {	
		name: '累計売上目標',
		type: 'area',
		data: [400000, 800000, 1200000, 1600000, 2000000, 2400000, 2800000, 3200000, 3600000, 4000000, 4400000, 4800000, 5200000, 5600000, 6000000, 6400000, 6800000, 7200000, 7600000, 8000000, 8400000, 8800000, 9200000, 9600000, 10000000, 10400000, 10800000, 11200000, 11600000, 12000000]	
		}, {		
		name: '累計売上実績',
	    type: 'area',
		data: [442030, 834130, 1216130, 1639130, 2070130, 2462230, 2844230, 3267230, 3698230, 4199630, 4630630, 5034830, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]	
	}],
	chart: {
		height: 300,
		fontFamily: 'inherit',
		stacked: false,
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: [3],
			columnWidth: '40%',
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
		}, {
		  seriesName: '売上',
		  show: false
		}, {
		  seriesName: '累計',
		  opposite: true,
		  show: false
		}, {
		  seriesName: '累計',
		  opposite: true,
		  show: false
		}
	  ],
	fill: {
	  opacity: [1, 1, 0.25, 0.25],
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
			}, {	
				formatter: function(y) {
					if (typeof y !== "undefined") {
						return "¥" + y.toFixed(0);
					}
					return y;
				}
			}]
		},
	colors: [KTUtil.getCssVariableValue("--bs-gray-400"), KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300"), KTUtil.getCssVariableValue("--bs-lightgreen")],
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

var analysisVarianceChart = new ApexCharts(document.querySelector("#chart_variance_daily"), options);
analysisVarianceChart.render();