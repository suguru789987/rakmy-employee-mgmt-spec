var options = {
	series: [{
		name: "生春巻き二種盛り合わせ",
		data: [3.5, 6.5]
	}, {
		name: "生春巻き二種盛り合わせ",
		data: [6.5, 2.5]
	}, {
		name: "ベトナム風生春巻き",
		data: [2.5, 8.5]
	}, {
		name:  "サーモンとアボカドの生春巻き",
		data: [8.5, 5.5]
	}, {
		name: "Monsoon肉盛り",
		data: [5.5, 4.5]
	}, {
		name: "四川風よだれ鶏" ,
		data: [4.5, 6.5]
	}, {
		name: "スパイシーえびせん",
		data: [6.5, 1.5]
	}, {
		name: "ガーリックシュリンプ" ,
		data: [1.5, 8.5]
	}, {
		name: "タイ海老トースト" ,
		data: [8.5, 2.5]
	}, {
		name: "オリエンタルポテトフライ" ,
		data: [2.5, 7.5]
	}, {
		name: "鶏もも肉のから揚げ" ,
		data: [7.5, 7.5]
	}, {
		name: "鶏手羽先のスパイシー揚げ" ,
		data: [7.5, 5.5]
	}, {
		name: "海老とアボカドのチリマヨネーズ" ,
		data: [5.5, 4.5]
	}, {
		name: "4色小籠包（4個）" ,
		data: [4.5, 3.5]
	}, {
		name: "上海風小籠包（4個）" ,
		data: [3.5, 6.5]
	}, {
		name:  "空芯菜のトチオソース炒め" ,
		data: [6.5, 1.5]
	}, {
		name: "鶏肉とカシューナッツの麻辣炒飯",
		data: [1.5, 8.5]
	}, {
		name: "豚ひき肉とフレッシュハーブのサラダ" ,
		data: [8.5, 6.5]
	}, {
		name: "タイ風春雨サラダヤムウンセン" ,
		data: [6.5, 3.5]
	}, {
		name: "ロカボナッツのオリエンタルサラダ",
		data: [3.5, 5.0]
	}, {
		name: "海老とアボカドの青パパイヤサラダ",
		data: [5.0, 1.5]
	}],
	chart: {
		type: 'bar',
		height: '100%',
		stacked: true,
		stackType: '100%',
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
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
			height: 350,
		}
	  }
	}],
	xaxis: {
		categories: ["5/1/2022 - 5/28/2022", "4/1/2022 - 4/30/2022"],
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
		y: [{
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
			}, {
			formatter: function(y) {
					if (typeof y !== "undefined") {
						return y + "%";
					}
					return y;
				}
		}]
	},
	colors: ['#F687B3', '#B794F4', '#63B3ED', '#76E4F7', '#4FD1C5', '#68D391', '#F6E05E', '#F6AD55', '#FC8181', '#CCD5DF', '#B2B2B2'],
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

var analysisChartSalesItemRatioComp = new ApexCharts(document.querySelector("#chart_analysis_sales_item_ratio_comp"), options);
analysisChartSalesItemRatioComp.render();