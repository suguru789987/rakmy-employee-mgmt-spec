var options = {
	series: [{
		name: '5/1/2022 - 5/28/2022',
		type: "bar",
		data: [4231, 4311, 3813, 5311, 6321, 7131, 5481, 4231, 4311, 3813, 5311, 6321, 7131, 5481, 5481, 4231, 4311, 3813, 5311, 6321]
	},{
		name: '4/1/2022 - 4/30/2022',
		type: "bar",
		data: [3342, 3791, 4133, 5128, 6123, 6314, 5191, 3342, 3791, 4133, 5128, 6123, 6314, 5191, 5191, 3342, 3791, 4133, 5128, 6123]
	}],
	chart: {
		type: 'bar',
		height:  '100%',
		fontFamily: 'inherit',
		toolbar: {
			show: false
		}
	},
	plotOptions: {
		bar: {
			horizontal: true,
			borderRadius: [6],
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
			height: 700,
		},
		xaxis: {
			labels: {
			show: false
			}
		}
	  }
	}],
	xaxis: {
		categories: ["生春巻き二種盛り合わせ", "ベトナム風生春巻き", "サーモンとアボカドの生春巻き", "Monsoon肉盛り", "四川風よだれ鶏", "スパイシーえびせん", "ガーリックシュリンプ", "タイ海老トースト", "オリエンタルポテトフライ", "鶏もも肉のから揚げ", "鶏手羽先のスパイシー揚げ", "海老とアボカドのチリマヨネーズ", "4色小籠包（4個）", "上海風小籠包（4個）", "空芯菜のトチオソース炒め", "鶏肉とカシューナッツの麻辣炒飯", "豚ひき肉とフレッシュハーブのサラダ", "タイ風春雨サラダヤムウンセン", "ロカボナッツのオリエンタルサラダ", "海老とアボカドの青パパイヤサラダ"],
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

var analysisChartSalesItemComp = new ApexCharts(document.querySelector("#chart_analysis_sales_item_comp"), options);
analysisChartSalesItemComp.render();