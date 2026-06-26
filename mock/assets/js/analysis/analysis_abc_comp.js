var options = {
	series: [{
		name: '売上合計: 5/1/2022 - 5/28/2022',
		type: "bar",
		data: [748562, 659758, 542186, 453972, 325496, 245681, 215235, 58765, 54121, 23654, 12548]
		}, {
		name: '売上合計: 4/1/2022 - 4/30/2022',
		type: "bar",
		data: [734462, 634558, 512586, 433532, 334496, 224281, 205215, 53765, 57121, 27654, 18548]
		}, {	
		name: '累計構成比: 5/1/2022 - 5/28/2022',
		type: 'line',
		data: [22, 41, 56, 69, 79, 86, 92, 97, 99, 100, 100]	
		}, {		
		name: '累計構成比: 4/1/2022 - 4/30/2022',
	    type: 'line',
		data: [24, 39, 53, 63, 76, 82, 90, 93, 97, 99, 100]	
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
		enabledOnSeries: [2, 3]
	},
	stroke: {
		curve: 'straight',
		show: true,
		width: 2
	},
	xaxis: {
		categories: ["生春巻き二種盛り合わせ", "ベトナム風生春巻き", "Monsoon肉盛り", "四川風よだれ鶏", "海老とアボカドのチリマヨネーズ", "鶏肉とカシューナッツの麻辣炒飯", "豚ひき肉とフレッシュハーブのサラダ", "タイ海老トースト", "鶏手羽先のスパイシー揚げ", "空芯菜のトチオソース炒め", "海老とアボカドの青パパイヤサラダ"],
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
		  seriesName: '売上合計',
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
						return y.toFixed(0) + "%";
					}
					return y;
				}
			}, {
				formatter: function(y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + "%";
					}
					return y;
				}
			}]
		},
	colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300"), KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-500")],
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

var analysisChartAbc = new ApexCharts(document.querySelector("#chart_analysis_abc"), options);
analysisChartAbc.render();