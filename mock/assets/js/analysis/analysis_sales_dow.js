var options = {
	series: [{
		name: '5/1/2022 - 5/28/2022',
		type: "bar",
		data: [378239, 409090, 245454, 513314, 818181, 1009259, 844340]
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
		show: true,
		width: 2,
		colors: ['transparent']
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
		  seriesName: '売上',
		  show: false
		}
	  ],
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
	colors: [KTUtil.getCssVariableValue("--bs-primary")],
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

var analysisChartSalesDow = new ApexCharts(document.querySelector("#chart_analysis_sales_dow"), options);
analysisChartSalesDow.render();