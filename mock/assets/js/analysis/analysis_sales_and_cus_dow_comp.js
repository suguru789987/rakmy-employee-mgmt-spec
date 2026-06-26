var options = {
	series: [{
		name: '平均売上: 5/1/2022 - 5/31/2022',
		type: "bar",
		data: [378239, 409090, 245454, 513314, 818181, 1009259, 844340]
		}, {
		name: '平均売上: 4/1/2022 - 4/30/2022',
		type: "bar",
		data: [348392, 423490, 213324, 531324, 789482, 989312, 842235]
		}, {
		name: '平均客数: 5/1/2022 - 5/31/2022',
		type: "area",
		data: [89, 94, 64, 96, 129, 141, 154]
		}, {
		name: '平均客数: 4/1/2022 - 4/30/2022',
		type: "area",
		data: [104, 111, 51, 103, 129, 156, 162]
	}],
	chart: {
		type: 'bar',
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
			borderRadius: [6],
			columnWidth: '40%',
			endingShape: 'rounded'
		},
	},
	legend: {
		show: false
	},
	dataLabels: {
		style: {
			fontSize: '12px',
			fontWeight: 'bold',
		  },
		  background: {
			  enabled: true,
			  foreColor: '#fff',
			  borderRadius: 2,
			  padding: 4,
			  opacity: 1,
			  borderWidth: 1,
			  borderColor: '#fff'
			},
		enabled: true,
		enabledOnSeries: [2, 3]
	},
	stroke: {
		curve: "smooth",
		width: 2,
		show: true,
	},
	fill: {
	  opacity: [1, 1, 0.25, 0.25],
	},
	xaxis: {
		categories: ["月", "火", "水", "木", "金", "土", "日"],
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
		  seriesName: '平均売上: 5/1/2022 - 5/31/2022',
		  show: false
		}, {
		  seriesName: '平均売上: 5/1/2022 - 5/31/2022',
		  show: false
		}, {
		  seriesName: '平均客数: 5/1/2022 - 5/31/2022',
		  opposite: true,
		  show: false
		}, {
		  seriesName: '平均客数: 5/1/2022 - 5/31/2022',
		  opposite: true,
		  show: false
		}
	],
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
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-400"), KTUtil.getCssVariableValue("--bs-lightgreen"), KTUtil.getCssVariableValue("--bs-gray-300")],
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

var analysisChartSalesCusDowComp = new ApexCharts(document.querySelector("#chart_analysis_sales_and_cus_dow_comp"), options);
analysisChartSalesCusDowComp.render();