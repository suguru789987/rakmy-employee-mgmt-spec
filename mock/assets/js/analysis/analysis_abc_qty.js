var options = {
	series: [{
		name: '販売数',
		type: "bar",
		data: [1245, 1098, 1039, 902, 755, 704, 541, 522, 409, 358, 322, 292, 274, 252, 237, 172, 98, 90, 39, 21]
		}, {
		name: '累計構成比',
	    type: 'line',
		data: [13.5, 25.4, 36.2, 46.6, 54.2, 61.5, 67.3, 73.2, 77.1, 81.5, 84.8, 87.5, 90.3, 93.6, 96.3, 97.4, 98.4, 99.2, 99.8, 100.0]	
	}],
	chart: {
		type: 'line',
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
		enabledOnSeries: [1]
	},
	stroke: {
		curve: 'straight',
		show: true,
		width: 2
	},
	xaxis: {
		categories: ["生春巻き二種盛り合わせ", "ベトナム風生春巻き", "サーモンとアボカドの生春巻き", "Monsoon肉盛り", "四川風よだれ鶏", "スパイシーえびせん",   "海老とアボカドのチリマヨネーズ", "ガーリックシュリンプ", "鶏肉とカシューナッツの麻辣炒飯", "豚ひき肉とフレッシュハーブのサラダ", "オリエンタルポテトフライ", "4色小籠包（4個）", "上海風小籠包（4個）", "タイ風春雨サラダ ヤムウンセン", "ロカボナッツのオリエンタルサラダ", "鶏もも肉のから揚げ", "タイ海老トースト", "鶏手羽先のスパイシー揚げ", "空芯菜のトチオソース炒め", "海老とアボカドの青パパイヤサラダ"],
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
				colors: KTUtil.getCssVariableValue("--bs-gray-500"),
				fontSize: "12px"
			}
		}
	},
	yaxis: [
		{
		  seriesName: '販売数',
		  show: false
		},
		{
		  opposite: true,
		  seriesName: '累計構成比',
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
						return y.toLocaleString()
					}
					return y;
				}
			}, {
				formatter: function(y) {
					if (typeof y !== "undefined") {
						return y.toFixed(1) + "%";
					}
					return y;
				}
			}]
		},
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-500")],
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

var analysisChartAbc = new ApexCharts(document.querySelector("#chart_analysis_abc_qty"), options);
analysisChartAbc.render();