var options = {
	series: [{
		name: '平均売上',
		type: "bar",
		data: [378239, 409090, 245454, 513314, 818181, 1009259, 844340]
		}, {
		name: '平均客数',
		type: "area",
		data: [89, 94, 64, 96, 129, 141, 154]
	}],
	chart: {
		type: 'bar',
		height: 300,
		fontFamily: 'inherit',
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
		enabled: false
	},
	stroke: {
		curve: "smooth",
		width: [0, 2],
		show: true,
	},
	fill: {
	  opacity: [1, 0.25],
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
		  seriesName: '平均売上',
		  show: false
		},{
		  opposite: true,
		  seriesName: '平均客数',
		  show: false
		}
	  ],
	tooltip: {
		shared: true,
		intersect: false,
		y: [{
			formatter: function(y) {
				if (typeof y !== "undefined") {
					return "¥" + y.toLocaleString();
				}
				return y;
			}
		}, {
			formatter: function(y) {
				if (typeof y !== "undefined") {
					return y.toLocaleString() + "人";
				}
				return y;
			}
		}]
	},
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-lightgreen")],
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

var analysisChartSalesCusDow = new ApexCharts(document.querySelector("#chart_analysis_sales_and_cus_dow"), options);
analysisChartSalesCusDow.render();