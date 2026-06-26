var options = {
	series: [{
		name: '5/1/2025 - 5/28/2025',
		type: "bar",
		data: [25960, 25280, 25200, 24780, 24500, 23040, 22440, 22000, 21840, 21840, 20240, 19320, 19200, 18620, 18360, 17920, 17760, 17640, 17280]
	}],
	chart: {
		type: 'bar',
		height: '100%',
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
			height: 500,
		},
		xaxis: {
			labels: {
			show: false
			}
		}
	  }
	}],
	xaxis: {
		categories: ["四川風よだれ鶏 (7422)", "ガーリックシュリンプ (4732)", "Monsoon肉盛り (3822)", "4色小籠包（4個） (3921)", "ベトナム風生春巻き (3294)", "生春巻き二種盛り合わせ (9842)", "オリエンタルポテトフライ (2194)", "タイ風春雨サラダヤムウンセン (2391)", "スパイシーえびせん (7149)", "鶏もも肉のから揚げ (2940)", "空芯菜のトチオソース炒め (3991)", "海老とアボカドの青パパイヤサラダ (9392)", "鶏肉とカシューナッツの麻辣炒飯 (2894)", "鶏手羽先のスパイシー揚げ (8737)", "上海風小籠包（4個） (3841)", "海老とアボカドのチリマヨネーズ (4942)", "サーモンとアボカドの生春巻き (3423)", "豚ひき肉とフレッシュハーブのサラダ (3984)", "ロカボナッツのオリエンタルサラダ (1394)"],
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
			left: 80
		}
	}
};

var analysisChartSalesItem = new ApexCharts(document.querySelector("#chart_analysis_sales_item"), options);
analysisChartSalesItem.render();

// Initialize all tooltips
document.addEventListener("DOMContentLoaded", function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});