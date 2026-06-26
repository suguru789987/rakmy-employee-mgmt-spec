var options = {
	series: [2001857, 1201226, 907345, 761521, 544742, 150293, 20114],
	chart: {
		height: 400,
		width: '100%',
		fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
		type: 'donut',
		toolbar: {
			show: false
		}
	},
	dataLabels: {
		enabled: true,
		style: {
			fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			fontWeight: 600,
			colors: [KTUtil.getCssVariableValue("--bs-white")]
		}
	},
	tooltip: {
		enabled: true,
		shared: true,
		intersect: false,
		fillSeriesColor: [KTUtil.getCssVariableValue("--bs-white")],
		style: {
			fontSize: '12px',
			fontFamily: 'inherit'
		},
		onDatasetHover: {
			highlightDataSeries: false,
		},
		x: {
			show: true
		},
		y: {
			formatter: function(y) {
				return "¥" + y.toLocaleString();
			},
		},
		marker: {
			show: true,
		}
	},
	legend: {
		show: true,
		position: 'bottom',
		fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif'
	},
	plotOptions: {
	  pie: {
		donut: {
		  labels: {
			show: true,
			name: {
			  show: true,
			  fontSize: '14px',
			  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			  fontWeight: 500,
			  formatter: function (val) {
				return val
			  }
			},
			value: {
			  show: true,
			  fontSize: '24px',
			  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			  fontWeight: 600,
			  color: undefined,
			  offsetY: 16,
			  formatter: function (val) {
			  	return "¥" + val.toLocaleString();
			  }
			},
		  }
		}
	  }
	},
	labels: ['ラクミート', 'ラクミー青果', 'ラクミーパン', 'ラクミー資材', 'ラクミー酒', 'ラクミー調味料', '小口仕入'],
	colors: [KTUtil.getCssVariableValue("--bs-info"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
	responsive: [{
		breakpoint: 576,
		options: {
			legend: {
				position: 'bottom'
			}
		}
	}]
};

var chartCostbysupplier = new ApexCharts(document.querySelector("#chart_costbysupplier"), options);
chartCostbysupplier.render();

var options = {
	series: [2002000, 907500, 825000, 761750, 544500, 376200, 150150, 20000],
	chart: {
		height: 400,
		width: '100%',
		fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
		type: 'donut',
		toolbar: {
			show: false
		}
	},
	dataLabels: {
		enabled: true,
		style: {
			fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			fontWeight: 'bold',
			colors: [KTUtil.getCssVariableValue("--bs-white")]
		}
	},
	tooltip: {
		enabled: true,
		shared: true,
		intersect: false,
		fillSeriesColor: [KTUtil.getCssVariableValue("--bs-white")],
		style: {
			fontSize: '12px',
			fontFamily: 'inherit'
		},
		onDatasetHover: {
			highlightDataSeries: false,
		},
		x: {
			show: true
		},
		y: {
			formatter: function(val) {
				return val
			},
		},
		marker: {
			show: true,
		}
	},
	legend: {
		show: true,
		position: 'bottom',
		fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
	},
	plotOptions: {
	  pie: {
		donut: {
		  labels: {
			show: true,
			name: {
			  show: true,
			  fontSize: '14px',
			  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			  fontWeight: 500,
			  formatter: function (val) {
				return val
			  }
			},
			value: {
			  show: true,
			  fontSize: '24px',
			  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			  fontWeight: 600,
			  color: undefined,
			  offsetY: 16,
			  formatter: function (val) {
				  return "¥" + val.toLocaleString();
			  }
			},
		  }
		}
	  }
	},
	labels: ['和牛ミンチ（粗挽き）パティ', 'レタス', '専用バンズ', 'ストロー', 'コーラ', 'トマト', '調味料', '小口仕入'],
	colors: [KTUtil.getCssVariableValue("--bs-info"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
	responsive: [{
		breakpoint: 576,
		options: {
			legend: {
				position: 'bottom'
			}
		}
	}]
};

var chartCostbyitem = new ApexCharts(document.querySelector("#chart_costbyitem"), options);
chartCostbyitem.render();

var options = {
	series: [2035493, 1839294, 1464392],
	chart: {
		height: 400,
		width: '100%',
		fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
		type: 'donut',
		toolbar: {
			show: false
		}
	},
	dataLabels: {
		enabled: true,
		style: {
			fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			fontWeight: 600,
			colors: [KTUtil.getCssVariableValue("--bs-white")]
		}
	},
	tooltip: {
		enabled: true,
		shared: true,
		intersect: false,
		fillSeriesColor: [KTUtil.getCssVariableValue("--bs-white")],
		style: {
			fontSize: '12px',
			fontFamily: 'inherit'
		},
		onDatasetHover: {
			highlightDataSeries: false,
		},
		x: {
			show: true
		},
		y: {
			formatter: function(y) {
				return "¥" + y.toLocaleString();
			},
		},
		marker: {
			show: true,
		}
	},
	legend: {
		show: true,
		position: 'bottom',
		fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif'
	},
	plotOptions: {
	  pie: {
		donut: {
		  labels: {
			show: true,
			name: {
			  show: true,
			  fontSize: '14px',
			  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			  fontWeight: 500,
			  formatter: function (val) {
				return val
			  }
			},
			value: {
			  show: true,
			  fontSize: '24px',
			  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
			  fontWeight: 600,
			  color: undefined,
			  offsetY: 16,
			  formatter: function (val) {
				  return "¥" + val.toLocaleString();
			  }
			},
		  }
		}
	  }
	},
	labels: ['食材', 'ドリンク', '資材'],
	colors: [KTUtil.getCssVariableValue("--bs-info"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-danger"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
	responsive: [{
		breakpoint: 576,
		options: {
			legend: {
				position: 'bottom'
			}
		}
	}]
};

var chartCostbysupplier = new ApexCharts(document.querySelector("#chart_costbylabel"), options);
chartCostbysupplier.render();

// 仕入分析: 費目別分析

var options = {
	series: [{
		name: '仕入金額',
		type: "bar",
		data: [2035493, 1839294, 1464392, 507222]
	}],
	chart: {
		type: 'bar',
		height: '200%',
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: [6],
			columnWidth: '50%',
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
		xaxis: {
			labels: {
			show: false
			}
		}
	  }
	}],
	xaxis: {
		categories: ["食材", "ドリンク", "資材", "未設定"],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		},
		labels: {
			show: false
		}
	},
	yaxis: {
		labels: {
		  style: {
			colors: KTUtil.getCssVariableValue("--bs-gray-600"),
			fontSize: "10px"
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
					return "¥" + y.toLocaleString();
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

var analysisChartSalesItem = new ApexCharts(document.querySelector("#chart_costbylabel2"), options);
analysisChartSalesItem.render();

// 仕入分析: 商品別分析

var options = {
	series: [{
		name: '仕入金額',
		type: "bar",
		data: [2002000, 907500, 825000, 761750, 544500, 376200, 150150, 20000]
	}],
	chart: {
		type: 'bar',
		height: '300%',
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: [6],
			columnWidth: '50%',
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
		xaxis: {
			labels: {
			show: false
			}
		}
	  }
	}],
	xaxis: {
		categories: ['和牛ミンチ（粗挽き）パティ', 'レタス', '専用バンズ', 'ストロー', 'コーラ', 'トマト', '調味料', '小口仕入'],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		},
		labels: {
			show: false
		}
	},
	yaxis: {
		labels: {
		  style: {
			colors: KTUtil.getCssVariableValue("--bs-gray-600"),
			fontSize: "10px"
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
					return "¥" + y.toLocaleString();
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

var analysisChartSalesItem = new ApexCharts(document.querySelector("#chart_costbyitem2"), options);
analysisChartSalesItem.render();

// 仕入分析: 仕入先別分析

var options = {
	series: [{
		name: '仕入金額',
		type: "bar",
		data: [2001857, 1201226, 907345, 761521, 544742, 150293, 20114]
	}],
	chart: {
		type: 'bar',
		height: '300%',
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: [6],
			columnWidth: '50%',
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
		xaxis: {
			labels: {
			show: false
			}
		}
	  }
	}],
	xaxis: {
		categories: ['ラクミート', 'ラクミー青果', 'ラクミーパン', 'ラクミー資材', 'ラクミー酒', 'ラクミー調味料', '小口仕入'],
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		},
		labels: {
			show: false
		}
	},
	yaxis: {
		labels: {
		  style: {
			colors: KTUtil.getCssVariableValue("--bs-gray-600"),
			fontSize: "10px"
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
					return "¥" + y.toLocaleString();
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

var analysisChartSalesItem = new ApexCharts(document.querySelector("#chart_costbysupplier2"), options);
analysisChartSalesItem.render();

// ウィンドウリサイズ時にチャートもリサイズ
window.addEventListener('resize', function() {
  analysisChartSalesItem.resize();
});