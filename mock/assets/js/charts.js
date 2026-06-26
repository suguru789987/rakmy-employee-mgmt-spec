// profit chart

(function() {
  var options = {
    series: [{
      name: '利益',
      type: "bar",
      data: [88329, 89392, 84290, 82942, 91423, 93493, 88323, 84954, 88324, 91493, 89392, 93202, 91304, 87329]
    }, {
      name: '利益目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 41.7]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    /*
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      formatter: function(value) {
        return value + "%"
      },
      style: {
        fontSize: '11px',
        fontWeight: 'bold',
      },
      background: {
        enabled: true,
        foreColor: KTUtil.getCssVariableValue("--bs-gray-600"),
        borderRadius: 2,
        padding: 2,
        opacity: 1,
      },
    },
    */
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '利益',
        show: false
      },
      {
        seriesName: '利益目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 88000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次利益目標ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_daily"), options);
  analysisChart.render();
})();

// revenue chart

(function() {
  var options = {
    series: [{
      name: '売上',
      type: "bar",
      data: [334329, 389392, 344290, 392942, 361423, 393493, 328323, 384954, 378324, 361493, 399392, 363202, 391304, 367329]
    }, {
      name: '期間売上目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 42.0]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '売上',
        show: false
      },
      {
        seriesName: '期間売上目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 350000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次売上目標ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_daily"), options);
  analysisChart.render();
})();

// cost chart

(function() {
  var options = {
    series: [{
      name: '費用',
      type: "bar",
      data: [238329, 259392, 284290, 262942, 261423, 253493, 288323, 244954, 258324, 291493, 289392, 253202, 241304, 267329]
    }, {
      name: '費用予算消化率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 40.8]
    }],
    chart: {
      type: 'bar',
      height: '300',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '費用',
        show: false
      },
      {
        seriesName: '費用予算消化率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 260000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次費用予算ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_daily"), options);
  analysisChart.render();
})();


// # customer

(function() {
  var options = {
    series: [{
      name: '客数',
      type: "bar",
      data: [89, 93, 90, 69, 64, 93, 83, 95, 83, 91, 89, 83, 73, 73]
    }, {
      name: '客数目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 28, 31, 35, 38, 42, 49, 52.8]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '客数',
        show: false
      },
      {
        seriesName: '客数目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 75,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次客数目標ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_daily"), options);
  analysisChart.render();
})();

// Average Customer Spend

(function() {
  var options = {
    series: [{
      name: '客単価',
      type: "bar",
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }, {
      name: '客単価目標進捗率',
      type: "area",
      data: [93, 101, 98, 94, 99, 92, 94, 96, 99, 102, 94, 102, 99, 97]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '客数',
        show: false
      },
      {
        seriesName: '客数目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 3000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '目標客単価',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_daily"), options);
  analysisChart.render();
})();

// profit variance chart

(function() {
  var options = {
    series: [{
      name: '期間利益実績',
      type: 'area',
      data: [88329, 177721, 262011, 344953, 436376, 529869, 618192, 703146, 791470, 882963, 972355, 1065557, 1156861, 1249960]
    }, {
      name: '期間利益目標',
      type: 'line',
      data: [2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_variance"), options);
  analysisChart.render();
})();

// revenue variance chart

(function() {
  var options = {
    series: [{
      name: '期間売上実績',
      type: 'area',      
      data: [334329, 723721, 1068011, 1460953, 1822376, 2215869, 2544192, 2929146, 3307470, 3668963, 4068355, 4431557, 4822861, 5034830]
    }, {
      name: '期間売上目標',
      type: 'line',
      data: [10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_variance"), options);
  analysisChart.render();
})();

// cost variance chart

(function() {
  var options = {
    series: [{
      name: '期間費用実績',
      type: 'area',      
      data: [238329, 497721, 782011, 1044953, 1306376, 1559869, 1848192, 2093146, 2351470, 2642963, 2932355, 3285557, 3526861, 3915000]
    }, {
      name: '期間費用予算',
      type: 'line',
      data: [8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_variance"), options);
  analysisChart.render();
})();

// customer variance chart

(function() {
  var options = {
    series: [{
      name: '期間客数実績',
      type: 'area',      
      data: [89, 182, 272, 341, 405, 498, 581, 676, 759, 850, 939, 1022, 1095, 1168]
    }, {
      name: '期間客数目標',
      type: 'line',
      data: [2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_variance"), options);
  analysisChart.render();
})();

// ACS variance chart

(function() {
  var options = {
    series: [{
      name: '客単価実績',
      type: 'area',      
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }, {
      name: '客単価目標',
      type: 'line',
      data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_variance"), options);
  analysisChart.render();
})();

// profit compare chart

(function() {
  var options = {
    series: [{
      name: '日次利益実績',
      type: "bar",
      data: [88329, 89392, 84290, 82942, 91423, 93493, 88323, 84954, 88324, 91493, 89392, 93202, 91304, 87329]
    }, {
      name: '日次利益目標',
      type: "bar",
      data: [85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000]
    }, {
      name: '利益目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 41.7]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '利益実績',
        show: false
      },
      {
        seriesName: '利益目標',
        show: false
      },
      {
        seriesName: '期間利益目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_compare"), options);
  analysisChart.render();
})();

// revenue compare chart

(function() {
  var options = {
    series: [{
      name: '日次売上実績',
      type: "bar",
      data: [334329, 389392, 344290, 392942, 361423, 393493, 328323, 384954, 378324, 361493, 399392, 363202, 391304, 367329]
    }, {
      name: '日次売上目標',
      type: "bar",
      data: [330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000]
    }, {
      name: '期間売上目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 42.0]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '売上実績',
        show: false
      },
      {
        seriesName: '売上目標',
        show: false
      },
      {
        seriesName: '期間売上目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_compare"), options);
  analysisChart.render();
})();

// cost compare chart

(function() {
  var options = {
    series: [{
      name: '日次費用実績',
      type: "bar",
      data: [238329, 259392, 284290, 262942, 261423, 253493, 288323, 244954, 258324, 291493, 289392, 253202, 241304, 267329]
    }, {
      name: '日次費用予算',
      type: "bar",
      data: [245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000]
    }, {
      name: '期間費用予算消化率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 40.8]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '日次費用実績',
        show: false
      },
      {
        seriesName: '日次費用予算',
        show: false
      },
      {
        seriesName: '期間費用予算消化率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_compare"), options);
  analysisChart.render();
})();

// customer compare chart

(function() {
  var options = {
    series: [{
      name: '日次客数実績',
      type: "bar",
      data: [89, 93, 90, 69, 64, 93, 83, 95, 83, 91, 89, 83, 73, 73]
    }, {
      name: '日次客数目標',
      type: "bar",
      data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75]
    }, {
      name: '期間客数目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 28, 31, 35, 38, 42, 49, 52.8]  
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '日次客数実績',
        show: false
      },
      {
        seriesName: '日次客数目標',
        show: false
      },
      {
        seriesName: '期間客数目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_compare"), options);
  analysisChart.render();
})();

// ACS compare chart

(function() {
  var options = {
    series: [{
      name: '日次客単価実績',
      type: "bar",
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }, {
      name: '日次客単価目標',
      type: "bar",
      data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]
    }, {
      name: '期間客単価目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 42.0]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '客単価実績',
        show: false
      },
      {
        seriesName: '客単価目標',
        show: false
      },
      {
        seriesName: '期間客単価目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_compare"), options);
  analysisChart.render();
})();

// profit daily variance chart

(function() {
  var options = {
    series: [{
      name: '累積利益実績',
      type: 'column',
      data: [-1924300, -1814500, -1693900, -1615300, -1485400, -1379500, -1255900, -1189500, -1024900, -929400, -823900, -744900, -603400, -482700, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      name: '累積利益目標',
      type: 'area',
      data: [-1930000, -1820000, -1710000, -1600000, -1490000, -1380000, -1270000, -1160000, -1050000, -940000, -830000, -720000, -610000, -500000, -390000, -280000, -170000, -60000, 50000, 160000, 270000, 380000, 490000, 600000, 710000, 820000, 930000, 1040000, 1150000, 1260000]
    }, {
      name: '期間利益目標',
      type: 'line',
      data: [2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000]
    }],
    chart: {
      type: 'line',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'straight',
      width: [0, 4, 2],
      dashArray: [0, 0, 2]
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫", "4/15㈬", "4/16㈭", "4/17㈮", "4/18㈯", "4/19㈰", "4/20㈪", "4/21㈫", "4/22㈬", "4/23㈭", "4/24㈮", "4/25㈯", "4/26㈰", "4/27㈪", "4/28㈫", "4/29㈬", "4/30㈭"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        labels: {
          style: {
              colors: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
              fontSize: '11px'
          },
          formatter: function(y) {
            return "¥" + y.toLocaleString();
          }
        }
    },
    fill: {
      type:'solid',
      opacity: [1, 0.5, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300"), KTUtil.getCssVariableValue("--bs-gray-600")],
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
        right: 24,
        bottom: 5,
        left: 5
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_variance_daily"), options);
  analysisChart.render();
})();

// revenue daily variance chart

(function() {
  var options = {
    series: [{
      name: '累積売上実績',
      type: 'column',      
      data: [334329, 723721, 1068011, 1460953, 1822376, 2215869, 2544192, 2929146, 3307470, 3668963, 4068355, 4431557, 4822861, 5034830, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      name: '累積売上目標',
      type: 'area',
      data: [340000, 680000, 1020000, 1360000, 1700000, 2040000, 2380000, 2720000, 3060000, 3400000, 3740000, 4080000, 4420000, 4760000, 5100000, 5440000, 5780000, 6120000, 6460000, 6800000, 7140000, 7480000, 7820000, 8160000, 8500000, 8840000, 9180000, 9520000, 9860000, 10200000]
    }, { 
      name: '期間売上目標',
      type: 'line',
      data: [10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'straight',
      width: [0, 4, 2],
      dashArray: [0, 0, 2]
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫", "4/15㈬", "4/16㈭", "4/17㈮", "4/18㈯", "4/19㈰", "4/20㈪", "4/21㈫", "4/22㈬", "4/23㈭", "4/24㈮", "4/25㈯", "4/26㈰", "4/27㈪", "4/28㈫", "4/29㈬", "4/30㈭"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        labels: {
          style: {
              colors: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
              fontSize: '11px'
          },
          formatter: function(y) {
            return "¥" + y.toLocaleString();
          }
        }
    },
    fill: {
      type:'solid',
      opacity: [1, 0.5, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300"), KTUtil.getCssVariableValue("--bs-gray-600")],
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
        right: 24,
        bottom: 5,
        left: 5
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 7500000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-500"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-500"),
            borderRadius: 3,
            offsetY: 6,
            offsetX: 6,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '損益分岐売上',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_variance_daily"), options);
  analysisChart.render();
})();

// cost daily variance chart

(function() {
  var options = {
    series: [{
      name: '日次対売上変動費率実績',
      type: 'area',      
      data: [72.2, 69.2, 70.2, 68.3, 72.3, 71.2, 70.3, 68.4, 71.0, 73.2, 70.5, 69.4, 71.4, 69.5]
    }, {
      name: '日次対売上変動費率目標',
      type: 'line',
      data: [70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
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
        right: 30,
        bottom: 5,
        left: 30
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_variance_daily"), options);
  analysisChart.render();
})();

// KPI daily chart

(function() {
  var options = {
    series: [{
      name: '平均日次客数',
      type: "line",
      data: [89, 93, 90, 69, 64, 93, 83, 95, 83, 91, 89, 83, 73, 73]
    }, {
      name: '平均客単価',
      type: "line",
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }],
    chart: {
      type: 'line',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      curve: 'smooth',
      width: [4, 4],
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫", "4/15㈬", "4/16㈭", "4/17㈮", "4/18㈯", "4/19㈰", "4/20㈪", "4/21㈫", "4/22㈬", "4/23㈭", "4/24㈮", "4/25㈯", "4/26㈰", "4/27㈪", "4/28㈫", "4/29㈬", "4/30㈭"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '累積客数',
        show: false
      },
      {
        seriesName: '客単価',
        opposite: true, 
        show: false
      },
      ],
    fill: {
      type:'solid',
      opacity: [1, 0.8],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA"],
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
        right: 24,
        bottom: 5,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_kpi_daily"), options);
  analysisChart.render();
})();


// Cost ratio

(function() {
  var options = {
    series: [{
      name: '食材費',
      data: [36.8]
    }, {
      name: 'PA人件費',
      data: [24.0]	
    }, {
      name: 'その他変動費',
      data: [10]	
    }, {
      name: '固定費',
      data: [20.0]	
    }, {
      name: '経常利益',
      data: [9.2]	
    }],
    chart: {
      height: 100,
      type: 'bar',
      stacked: true,
      stackType: '100%',
      fontFamily: 'inherit',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
        },
       style: {
         colors: ['#fff']
           },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["費用/利益構成比"],
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
          colors: KTUtil.getCssVariableValue("--bs-gray-400"),
          fontSize: "12px"
        }
      }
    },
    yaxis: {
      show: false,
      labels: {
        style: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
        fontSize: "11px",
        }
      }
      },
    fill: {
      opacity: 1
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(val) {
          return val + '%'
        }
      },
      marker: {
        show: true,
      }
    },
    colors: ['#F6AD54', '#F386B2', '#B2B2B2', '#B5B5C3', '#1BD1A1'],
    grid: {
      borderColor: KTUtil.getCssVariableValue("--bs-gray-200"),
      strokeDashArray: 2,
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: -20,
        right: 0,
        bottom: -15,
        left: -15
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_ratio"), options);
  analysisChart.render();
})();

// ACS progress chart

(function() {
  var options = {
    series: [{
      name: '客単価実績',
      type: 'area',      
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2883, 2449]
      }, {
      name: '客単価目標',
      type: 'line',
      data: [2900, 3000, 2900, 2700, 2700, 2700, 2900, 2700, 2900, 2900, 3000, 2700, 2700, 2900, 2900, 3000, 2900, 2700, 2700, 2700, 2900, 2700, 2900, 2900, 3000, 2700, 2700, 2900, 2900, 2700]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 3,
      hover: {
        size: 4
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [3],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        }
      }
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.6],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_progress"), options);
  analysisChart.render();
})();

// customer progress chart

(function() {
  var options = {
    series: [{
      name: '日次客数実績',
      type: 'area',      
      data: [89, 92, 102, 70, 104, 98, 91, 84, 129, 78, 91, 83, 79, 104, 89, 92, 102, 70, 104, 98, 91, 84, 129, 78, 91, 83, 79, 104, 91, 84]
    }, {
      name: '日次客数目標',
      type: 'line',
        data: [80, 90, 100, 80, 90, 90, 90, 80, 100, 80, 90, 80, 80, 90, 80, 90, 100, 80, 90, 90, 90, 80, 100, 80, 90, 80, 80, 90, 90, 80]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 3,
      hover: {
      size: 4
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [3],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        }
      }
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.6],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_progress"), options);
  analysisChart.render();
})();
/*
(function() {
  var options = {
    series: [{
      name: '期間客数実績',
      type: 'area',      
      data: [89, 182, 272, 341, 405, 498, 581, 676, 759, 850, 939, 1022, 1095, 1168]
    }, {
      name: '期間客数目標',
      type: 'line',
      data: [2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tickAmount: 6,
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_progress"), options);
  analysisChart.render();
})();
*/


// pa cost ratio

(function() {
  var options = {
    series: [{
      name: '人件費率 (PA人件費率)実績',
      type: 'column',      
      data: [8438, 7342, 8234, 8324, 7932, 8230, 8948, 7473, 6382, 9134, 8246, 7432, 8472, 9413, 8472, 8437, 8762, 9236, 7364, 7832, 8134, 8263, 7472, 9134, 8741, 8734, 8232, 7811, 8134, 8362]
    }, {
      name: '人件費率 (PA人件費率)目標',
      type: 'area',
      data: [31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 32.5, 31.2] 
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [0],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
      labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        }
      }
    },{
      opposite: true,
      labels: {
      style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
      }
      }
    }
    ],
    fill: {
      type:'solid',
      opacity: [0.9, 0.9],
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
      }, {
        formatter: function(y) {
          if (typeof y !== "undefined") {
          return y.toFixed(1) + "%";
          }
          return y;
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),'#F6C4DA'],
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
        right: 10,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_pacost_progress"), options);
  analysisChart.render();
})();

// gross profit & gross margin

(function() {
  var options = {
    series: [{
      name: '粗利益実績',
      type: 'column',      
      data: [18438, 17342, 18234, 18324, 17932, 18230, 18948, 17473, 16382, 19134, 18246, 17432, 18472, 19413, 18472, 18437, 18762, 19236, 17364, 17832, 18134, 18263, 17472, 19134, 18741, 18734, 18232, 17811, 18134, 18362]
      }, {
      name: '粗利益率実績',
      type: 'area',      
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2] 
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [0],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
          }
      }
    },{
      opposite: true,
      labels: {
        style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        }
      }
    }
    ],
    fill: {
      type:'solid',
      opacity: [0.9, 0.9],
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
      }, {
        formatter: function(y) {
          if (typeof y !== "undefined") {
          return y.toFixed(1) + "%";
          }
          return y;
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"),'#C8F1E3'],
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
        right: 10,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_grossprofit_progress"), options);
  analysisChart.render();
})();

// purchasing cost ratio

(function() {
  var options = {
    series: [{
      name: '仕入費実績',
      type: 'column',      
      data: [8438, 7342, 8234, 8324, 7932, 8230, 8948, 7473, 6382, 9134, 8246, 7432, 8472, 9413, 8472, 8437, 8762, 9236, 7364, 7832, 8134, 8263, 7472, 9134, 8741, 8734, 8232, 7811, 8134, 8362]
      }, {
      name: '食材仕入率実績',
      type: 'area',      
      data: [31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 32.5, 31.2] 
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [0],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
          }
      }
    },{
      opposite: true,
      labels: {
        style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        }
      }
    }
    ],
    fill: {
      type:'solid',
      opacity: [0.9, 0.9],
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
      }, {
        formatter: function(y) {
          if (typeof y !== "undefined") {
          return y.toFixed(1) + "%";
          }
          return y;
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-orange"),'#FFD9C0'],
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
        right: 10,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_purchasingcost_progress"), options);
  analysisChart.render();
})();

// profit compare progress

(function() {
  var options = {
    series: [{
      name: '当月利益実績',
      type: 'area',
      data: [88329, 177721, 262011, 344953, 436376, 529869, 618192, 703146, 791470, 882963, 972355, 1065557, 1156861, 1249960]
    }, {
      name: '前月利益実績',
      type: 'line',
      data: [86324, 174283, 259802, 324583, 437483, 526492, 613494, 702435, 784523, 872324, 983244, 1073245, 1163251, 1259324, 1324935, 1413264, 1501593, 1589922, 1678251, 1766580, 1854909, 1943238, 2031567, 2119896, 2208225, 2296554, 2384883, 2473212, 2561541, 2649870]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈬", "5/17㈬", "5/18㈬", "5/19㈬", "5/20㈬", "5/21㈬", "5/22㈬", "5/23㈬", "5/24㈬", "5/25㈬", "5/26㈬", "5/27㈬", "5/28㈬", "5/29㈬", "5/30㈬", "5/31㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_comp_progress"), options);
  analysisChart.render();
})();

// revenue compare progress

(function() {
  var options = {
    series: [{
      name: '当月売上実績',
      type: 'area',
      data: [334329, 723721, 1068011, 1460953, 1822376, 2215869, 2544192, 2929146, 3307470, 3668963, 4068355, 4431557, 4822861, 5034830]
    }, {
      name: '前月売上実績',
      type: 'line',
      data: [324934, 649868, 974802, 1299736, 1624670, 1949604, 2274538, 2599472, 2924406, 3249340, 3574274, 3899208, 4224142, 4549076, 4874010, 5198944, 5523878, 5848812, 6173746, 6498680, 6823614, 7148548, 7473482, 7798416, 8123350, 8448284, 8773218, 9098152, 9423086, 9748020]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈬", "5/17㈬", "5/18㈬", "5/19㈬", "5/20㈬", "5/21㈬", "5/22㈬", "5/23㈬", "5/24㈬", "5/25㈬", "5/26㈬", "5/27㈬", "5/28㈬", "5/29㈬", "5/30㈬", "5/31㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_comp_progress"), options);
  analysisChart.render();
})();

// daily trend

(function() {
  var options = {
    series: [{
      name: '売上',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953, 332420]
      }, {
      name: '仕入費',
      data: [73552, 72842, 78429, 71493, 74920, 73240, 69328, 77345, 77324, 71294, 72953, 74583, 75391, 71394, 73552, 72842, 78429, 71493, 74920, 73240, 69328, 77345, 77324, 71294, 72953, 74583, 75391, 71394, 77345, 77324, 71294]
      }, {
      name: 'PA人件費',
      data: [62943, 62394, 61294, 63842, 62395, 64593, 63495, 62395, 66439, 65392, 62435, 63535, 62453, 62554, 62943, 62394, 61294, 63842, 62395, 64593, 63495, 62395, 66439, 65392, 62435, 63535, 62453, 62554, 63495, 62395, 66439]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.25,
        stops: [100, 100, 100, 100]
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"),KTUtil.getCssVariableValue("--bs-orange"),KTUtil.getCssVariableValue("--bs-pink")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_daily_trend"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 1

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [340533, 382420, 313340, 318424, 374729, 363245, 374035, 303842, 347381, 328243, 348032, 394924, 318432, 393753, 324893]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_1"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 2

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [313482, 382420, 313340, 318424, 374729, 363245, 374035, 303842, 347381, 328243, 318032, 358922, 329482, 368925, 309832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_2"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 3

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [63482, 62420, 63340, 68424, 64729, 63245, 64035, 63842, 67381, 68243, 68032, 68922, 69482, 68925, 69832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [74329, 64342, 65233, 74382, 64342, 62490, 64934, 65952, 69325, 73953, 62420, 64042, 69435, 64034, 64329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64342, 65233, 64382, 64342, 72490, 64934, 65952, 69325, 63953, 72420, 64042, 69435, 64034, 69325, 63953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_3"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 4

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61482, 63420, 65340, 64424, 68729, 62245, 65035, 65842, 62381, 66243, 64032, 62922, 67482, 62925, 65832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [64329, 65342, 61233, 70382, 74342, 65490, 68934, 63952, 67325, 72953, 64420, 61042, 66435, 65034, 68329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [74342, 62233, 60382, 67342, 70490, 66934, 62952, 63325, 66953, 71420, 66042, 64435, 66034, 64325, 67953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_4"), options);
  analysisChart.render();
})();

// daily trend comp pacost by store 5

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [51482, 53420, 55340, 54424, 58729, 52245, 55035, 55842, 52381, 56243, 54032, 52922, 57482, 52925, 55832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [54329, 55342, 61233, 60382, 54342, 55490, 58934, 53952, 57325, 62953, 54420, 51042, 56435, 55034, 58329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [54342, 52233, 60382, 57342, 60490, 56934, 52952, 53325, 56953, 51420, 56042, 54435, 56034, 54325, 57953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_5"), options);
  analysisChart.render();
})();

// daily trend comp pacost by store 6

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [55482, 51420, 57340, 52424, 54729, 58245, 51035, 57842, 54381, 55243, 52032, 57922, 54482, 59925, 56832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [58329, 54342, 61233, 50382, 57342, 52490, 59934, 55952, 52325, 60953, 56420, 58042, 54435, 52034, 56329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [59342, 53233, 60382, 54342, 50490, 59934, 56952, 58325, 52953, 57420, 52042, 51435, 58034, 59325, 53953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_6"), options);
  analysisChart.render();
})();

// daily trend comp gross profit by store 6

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [18438, 17342, 18234, 18324, 17932, 18230, 18948, 17473, 16382, 19134, 18246, 17432, 18472, 19413, 18472]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [16437, 18762, 19236, 17364, 17832, 18134, 18263, 17472, 19134, 18741, 18734, 18232, 17811, 18134, 18362]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [17438, 18342, 17234, 15324, 16932, 19230, 17948, 16473, 19382, 17134, 19246, 17432, 19472, 17413, 19472]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_7"), options);
  analysisChart.render();
})();

// daily trend comp gross profit by store 7

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [14438, 17342, 12234, 14324, 14932, 12230, 16948, 15473, 12382, 13134, 15246, 13432, 16472, 14413, 16472]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [17437, 15762, 15236, 16364, 18832, 13134, 15263, 16472, 14134, 16741, 19734, 15232, 16811, 15134, 14362]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [16438, 18342, 19234, 16324, 17932, 15230, 17948, 15473, 14382, 17134, 13246, 14432, 16472, 15413, 18472]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_8"), options);
  analysisChart.render();
})();

// daily trend comp gross margin by store 9

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_9"), options);
  analysisChart.render();
})();

// daily trend comp gross margin by store 10

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_10"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 11

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [63482, 62420, 63340, 68424, 64729, 63245, 64035, 63842, 67381, 68243, 68032, 68922, 69482, 68925, 69832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [74329, 64342, 65233, 74382, 64342, 62490, 64934, 65952, 69325, 73953, 62420, 64042, 69435, 64034, 64329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64342, 65233, 64382, 64342, 72490, 64934, 65952, 69325, 63953, 72420, 64042, 69435, 64034, 69325, 63953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_11"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 12

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61482, 63420, 65340, 64424, 68729, 62245, 65035, 65842, 62381, 66243, 64032, 62922, 67482, 62925, 65832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [64329, 65342, 61233, 70382, 74342, 65490, 68934, 63952, 67325, 72953, 64420, 61042, 66435, 65034, 68329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [74342, 62233, 60382, 67342, 70490, 66934, 62952, 63325, 66953, 71420, 66042, 64435, 66034, 64325, 67953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_12"), options);
  analysisChart.render();
})();

// daily trend comp purchasing ratio by store 13

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_13"), options);
  analysisChart.render();
})();

// daily trend comp purchasing ratio by store 14

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_14"), options);
  analysisChart.render();
})();

// daily trend comp pa by store 15

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [55482, 51420, 57340, 52424, 54729, 58245, 51035, 57842, 54381, 55243, 52032, 57922, 54482, 59925, 56832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [58329, 54342, 61233, 50382, 57342, 52490, 59934, 55952, 52325, 60953, 56420, 58042, 54435, 52034, 56329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [59342, 53233, 60382, 54342, 50490, 59934, 56952, 58325, 52953, 57420, 52042, 51435, 58034, 59325, 53953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_15"), options);
  analysisChart.render();
})();

// daily trend comp pa by store 16

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [18438, 17342, 18234, 18324, 17932, 18230, 18948, 17473, 16382, 19134, 18246, 17432, 18472, 19413, 18472]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [16437, 18762, 19236, 17364, 17832, 18134, 18263, 17472, 19134, 18741, 18734, 18232, 17811, 18134, 18362]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [17438, 18342, 17234, 15324, 16932, 19230, 17948, 16473, 19382, 17134, 19246, 17432, 19472, 17413, 19472]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_16"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 17

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_17"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 18

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_18"), options);
  analysisChart.render();
})();

// daily trend comp customers by store 19

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61, 62, 66, 65, 67, 64, 69, 62, 60, 63, 66, 68, 62, 65, 63] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [64, 62, 66, 65, 67, 63, 69, 60, 65, 61, 65, 68, 60, 61, 61]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63, 66, 75, 64, 62, 64, 60, 73, 63., 66, 64, 65, 67, 60, 72]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "人";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_19"), options);
  analysisChart.render();
})();

// daily trend comp customers by store 20

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64, 61, 62, 63, 65, 64, 64, 63, 60, 63, 66, 64, 62, 65, 63] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61, 62, 60, 64, 61, 63, 69, 62, 65, 61, 62, 68, 62, 65, 61]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63, 66, 66, 67, 72, 69, 64, 65, 62, 66, 68, 62, 65, 65, 62]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "人";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_20"), options);
  analysisChart.render();
})();

// profit chart

(function() {
  var options = {
    series: [{
      name: '利益',
      type: "bar",
      data: [88329, 89392, 84290, 82942, 91423, 93493, 88323, 84954, 88324, 91493, 89392, 93202, 91304, 87329]
    }, {
      name: '利益目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 41.7]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    /*
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      formatter: function(value) {
        return value + "%"
      },
      style: {
        fontSize: '11px',
        fontWeight: 'bold',
      },
      background: {
        enabled: true,
        foreColor: KTUtil.getCssVariableValue("--bs-gray-600"),
        borderRadius: 2,
        padding: 2,
        opacity: 1,
      },
    },
    */
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '利益',
        show: false
      },
      {
        seriesName: '利益目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 88000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次利益目標ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_daily"), options);
  analysisChart.render();
})();

// revenue chart

(function() {
  var options = {
    series: [{
      name: '売上',
      type: "bar",
      data: [334329, 389392, 344290, 392942, 361423, 393493, 328323, 384954, 378324, 361493, 399392, 363202, 391304, 367329]
    }, {
      name: '期間売上目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 42.0]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '売上',
        show: false
      },
      {
        seriesName: '期間売上目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 350000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次売上目標ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_daily"), options);
  analysisChart.render();
})();

// cost chart

(function() {
  var options = {
    series: [{
      name: '費用',
      type: "bar",
      data: [238329, 259392, 284290, 262942, 261423, 253493, 288323, 244954, 258324, 291493, 289392, 253202, 241304, 267329]
    }, {
      name: '費用予算消化率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 40.8]
    }],
    chart: {
      type: 'bar',
      height: '300',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '費用',
        show: false
      },
      {
        seriesName: '費用予算消化率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 260000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次費用予算ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_daily"), options);
  analysisChart.render();
})();


// # customer

(function() {
  var options = {
    series: [{
      name: '客数',
      type: "bar",
      data: [89, 93, 90, 69, 64, 93, 83, 95, 83, 91, 89, 83, 73, 73]
    }, {
      name: '客数目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 28, 31, 35, 38, 42, 49, 52.8]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '客数',
        show: false
      },
      {
        seriesName: '客数目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 75,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '日次客数目標ライン',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_daily"), options);
  analysisChart.render();
})();

// Average Customer Spend

(function() {
  var options = {
    series: [{
      name: '客単価',
      type: "bar",
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }, {
      name: '客単価目標進捗率',
      type: "area",
      data: [93, 101, 98, 94, 99, 92, 94, 96, 99, 102, 94, 102, 99, 97]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '客数',
        show: false
      },
      {
        seriesName: '客数目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 3000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-400"),
            borderRadius: 3,
            offsetY: -10,
            offsetX: 10,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '目標客単価',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_daily"), options);
  analysisChart.render();
})();

// profit variance chart

(function() {
  var options = {
    series: [{
      name: '期間利益実績',
      type: 'area',
      data: [88329, 177721, 262011, 344953, 436376, 529869, 618192, 703146, 791470, 882963, 972355, 1065557, 1156861, 1249960]
    }, {
      name: '期間利益目標',
      type: 'line',
      data: [2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_variance"), options);
  analysisChart.render();
})();

// revenue variance chart

(function() {
  var options = {
    series: [{
      name: '期間売上実績',
      type: 'area',      
      data: [334329, 723721, 1068011, 1460953, 1822376, 2215869, 2544192, 2929146, 3307470, 3668963, 4068355, 4431557, 4822861, 5034830]
    }, {
      name: '期間売上目標',
      type: 'line',
      data: [10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_variance"), options);
  analysisChart.render();
})();

// cost variance chart

(function() {
  var options = {
    series: [{
      name: '期間費用実績',
      type: 'area',      
      data: [238329, 497721, 782011, 1044953, 1306376, 1559869, 1848192, 2093146, 2351470, 2642963, 2932355, 3285557, 3526861, 3915000]
    }, {
      name: '期間費用予算',
      type: 'line',
      data: [8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000, 8250000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_variance"), options);
  analysisChart.render();
})();

// customer variance chart

(function() {
  var options = {
    series: [{
      name: '期間客数実績',
      type: 'area',      
      data: [89, 182, 272, 341, 405, 498, 581, 676, 759, 850, 939, 1022, 1095, 1168]
    }, {
      name: '期間客数目標',
      type: 'line',
      data: [2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_variance"), options);
  analysisChart.render();
})();

// ACS variance chart

(function() {
  var options = {
    series: [{
      name: '客単価実績',
      type: 'area',      
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }, {
      name: '客単価目標',
      type: 'line',
      data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_variance"), options);
  analysisChart.render();
})();

// profit compare chart

(function() {
  var options = {
    series: [{
      name: '日次利益実績',
      type: "bar",
      data: [88329, 89392, 84290, 82942, 91423, 93493, 88323, 84954, 88324, 91493, 89392, 93202, 91304, 87329]
    }, {
      name: '日次利益目標',
      type: "bar",
      data: [85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000, 85000]
    }, {
      name: '利益目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 41.7]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '利益実績',
        show: false
      },
      {
        seriesName: '利益目標',
        show: false
      },
      {
        seriesName: '期間利益目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_compare"), options);
  analysisChart.render();
})();

// revenue compare chart

(function() {
  var options = {
    series: [{
      name: '日次売上実績',
      type: "bar",
      data: [334329, 389392, 344290, 392942, 361423, 393493, 328323, 384954, 378324, 361493, 399392, 363202, 391304, 367329]
    }, {
      name: '日次売上目標',
      type: "bar",
      data: [330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000, 330000]
    }, {
      name: '期間売上目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 42.0]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '売上実績',
        show: false
      },
      {
        seriesName: '売上目標',
        show: false
      },
      {
        seriesName: '期間売上目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_compare"), options);
  analysisChart.render();
})();

// cost compare chart

(function() {
  var options = {
    series: [{
      name: '日次費用実績',
      type: "bar",
      data: [238329, 259392, 284290, 262942, 261423, 253493, 288323, 244954, 258324, 291493, 289392, 253202, 241304, 267329]
    }, {
      name: '日次費用予算',
      type: "bar",
      data: [245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000, 245000]
    }, {
      name: '期間費用予算消化率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 40.8]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '日次費用実績',
        show: false
      },
      {
        seriesName: '日次費用予算',
        show: false
      },
      {
        seriesName: '期間費用予算消化率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_compare"), options);
  analysisChart.render();
})();

// customer compare chart

(function() {
  var options = {
    series: [{
      name: '日次客数実績',
      type: "bar",
      data: [89, 93, 90, 69, 64, 93, 83, 95, 83, 91, 89, 83, 73, 73]
    }, {
      name: '日次客数目標',
      type: "bar",
      data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75]
    }, {
      name: '期間客数目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 28, 31, 35, 38, 42, 49, 52.8]  
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '日次客数実績',
        show: false
      },
      {
        seriesName: '日次客数目標',
        show: false
      },
      {
        seriesName: '期間客数目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_compare"), options);
  analysisChart.render();
})();

// ACS compare chart

(function() {
  var options = {
    series: [{
      name: '日次客単価実績',
      type: "bar",
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }, {
      name: '日次客単価目標',
      type: "bar",
      data: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]
    }, {
      name: '期間客単価目標進捗率',
      type: "area",
      data: [3, 8, 10, 14, 19, 22, 24, 26, 29, 32, 34, 37, 39, 42.0]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '客単価実績',
        show: false
      },
      {
        seriesName: '客単価目標',
        show: false
      },
      {
        seriesName: '期間客単価目標進捗率',
        opposite: true, 
        show: false
      }
      ],
    fill: {
      opacity: [1, 1, 0.1],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA", KTUtil.getCssVariableValue("--bs-dark")],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_compare"), options);
  analysisChart.render();
})();

// profit daily variance chart

(function() {
  var options = {
    series: [{
      name: '累積利益実績',
      type: 'column',
      data: [-1924300, -1814500, -1693900, -1615300, -1485400, -1379500, -1255900, -1189500, -1024900, -929400, -823900, -744900, -603400, -482700, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      name: '累積利益目標',
      type: 'area',
      data: [-1930000, -1820000, -1710000, -1600000, -1490000, -1380000, -1270000, -1160000, -1050000, -940000, -830000, -720000, -610000, -500000, -390000, -280000, -170000, -60000, 50000, 160000, 270000, 380000, 490000, 600000, 710000, 820000, 930000, 1040000, 1150000, 1260000]
    }, {
      name: '期間利益目標',
      type: 'line',
      data: [2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000, 2640000]
    }],
    chart: {
      type: 'line',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'straight',
      width: [0, 4, 2],
      dashArray: [0, 0, 2]
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫", "4/15㈬", "4/16㈭", "4/17㈮", "4/18㈯", "4/19㈰", "4/20㈪", "4/21㈫", "4/22㈬", "4/23㈭", "4/24㈮", "4/25㈯", "4/26㈰", "4/27㈪", "4/28㈫", "4/29㈬", "4/30㈭"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        labels: {
          style: {
              colors: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
              fontSize: '11px'
          },
          formatter: function(y) {
            return "¥" + y.toLocaleString();
          }
        }
    },
    fill: {
      type:'solid',
      opacity: [1, 0.5, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300"), KTUtil.getCssVariableValue("--bs-gray-600")],
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
        right: 24,
        bottom: 5,
        left: 5
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_variance_daily"), options);
  analysisChart.render();
})();

// revenue daily variance chart

(function() {
  var options = {
    series: [{
      name: '累積売上実績',
      type: 'column',      
      data: [334329, 723721, 1068011, 1460953, 1822376, 2215869, 2544192, 2929146, 3307470, 3668963, 4068355, 4431557, 4822861, 5034830, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      name: '累積売上目標',
      type: 'area',
      data: [340000, 680000, 1020000, 1360000, 1700000, 2040000, 2380000, 2720000, 3060000, 3400000, 3740000, 4080000, 4420000, 4760000, 5100000, 5440000, 5780000, 6120000, 6460000, 6800000, 7140000, 7480000, 7820000, 8160000, 8500000, 8840000, 9180000, 9520000, 9860000, 10200000]
    }, { 
      name: '期間売上目標',
      type: 'line',
      data: [10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000, 10200000]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'straight',
      width: [0, 4, 2],
      dashArray: [0, 0, 2]
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫", "4/15㈬", "4/16㈭", "4/17㈮", "4/18㈯", "4/19㈰", "4/20㈪", "4/21㈫", "4/22㈬", "4/23㈭", "4/24㈮", "4/25㈯", "4/26㈰", "4/27㈪", "4/28㈫", "4/29㈬", "4/30㈭"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        labels: {
          style: {
              colors: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
              fontSize: '11px'
          },
          formatter: function(y) {
            return "¥" + y.toLocaleString();
          }
        }
    },
    fill: {
      type:'solid',
      opacity: [1, 0.5, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"), KTUtil.getCssVariableValue("--bs-gray-300"), KTUtil.getCssVariableValue("--bs-gray-600")],
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
        right: 24,
        bottom: 5,
        left: 5
      }
    },
    annotations: {
      yaxis: [
        {
          yAxisIndex: 0,
          y: 7500000,
          borderColor: KTUtil.getCssVariableValue("--bs-gray-500"),
          strokeDashArray: 2,
          borderWidth: 1,
          label: {
            borderColor: KTUtil.getCssVariableValue("--bs-gray-500"),
            borderRadius: 3,
            offsetY: 6,
            offsetX: 6,
            style: {
              color: '#fff',
              background: KTUtil.getCssVariableValue("--bs-gray-500"),
              fontSize: '10px',
              fontWeight: 600,
              fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            },
            text: '損益分岐売上',
            textAnchor: 'start',
            position: 'left',
          }
        }
      ]
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_variance_daily"), options);
  analysisChart.render();
})();

// cost daily variance chart

(function() {
  var options = {
    series: [{
      name: '日次対売上変動費率実績',
      type: 'area',      
      data: [72.2, 69.2, 70.2, 68.3, 72.3, 71.2, 70.3, 68.4, 71.0, 73.2, 70.5, 69.4, 71.4, 69.5]
    }, {
      name: '日次対売上変動費率目標',
      type: 'line',
      data: [70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0, 70.0]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
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
        right: 30,
        bottom: 5,
        left: 30
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_variance_daily"), options);
  analysisChart.render();
})();

// KPI daily chart

(function() {
  var options = {
    series: [{
      name: '平均日次客数',
      type: "line",
      data: [89, 93, 90, 69, 64, 93, 83, 95, 83, 91, 89, 83, 73, 73]
    }, {
      name: '平均客単価',
      type: "line",
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973]
    }],
    chart: {
      type: 'line',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      curve: 'smooth',
      width: [4, 4],
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["4/1㈬", "4/2㈭", "4/3㈮", "4/4㈯", "4/5㈰", "4/6㈪", "4/7㈫", "4/8㈬", "4/9㈭", "4/10㈮", "4/11㈯", "4/12㈰", "4/13㈪", "4/14㈫", "4/15㈬", "4/16㈭", "4/17㈮", "4/18㈯", "4/19㈰", "4/20㈪", "4/21㈫", "4/22㈬", "4/23㈭", "4/24㈮", "4/25㈯", "4/26㈰", "4/27㈪", "4/28㈫", "4/29㈬", "4/30㈭"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
        seriesName: '累積客数',
        show: false
      },
      {
        seriesName: '客単価',
        opposite: true, 
        show: false
      },
      ],
    fill: {
      type:'solid',
      opacity: [1, 0.8],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"), "#B4EDDA"],
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
        right: 24,
        bottom: 5,
        left: 24
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_kpi_daily"), options);
  analysisChart.render();
})();


// Cost ratio

(function() {
  var options = {
    series: [{
      name: '食材費',
      data: [36.8]
    }, {
      name: 'PA人件費',
      data: [24.0]	
    }, {
      name: 'その他変動費',
      data: [10]	
    }, {
      name: '固定費',
      data: [20.0]	
    }, {
      name: '経常利益',
      data: [9.2]	
    }],
    chart: {
      height: 100,
      type: 'bar',
      stacked: true,
      stackType: '100%',
      fontFamily: 'inherit',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
        },
       style: {
         colors: ['#fff']
           },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#fff']
    },
    xaxis: {
      categories: ["費用/利益構成比"],
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
          colors: KTUtil.getCssVariableValue("--bs-gray-400"),
          fontSize: "12px"
        }
      }
    },
    yaxis: {
      show: false,
      labels: {
        style: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
        fontSize: "11px",
        }
      }
      },
    fill: {
      opacity: 1
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(val) {
          return val + '%'
        }
      },
      marker: {
        show: true,
      }
    },
    colors: ['#F6AD54', '#F386B2', '#B2B2B2', '#B5B5C3', '#1BD1A1'],
    grid: {
      borderColor: KTUtil.getCssVariableValue("--bs-gray-200"),
      strokeDashArray: 2,
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: -20,
        right: 0,
        bottom: -15,
        left: -15
      }
    }
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_cost_ratio"), options);
  analysisChart.render();
})();

// ACS progress chart

(function() {
  var options = {
    series: [{
      name: '客単価実績',
      type: 'area',      
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2883, 2449]
      }, {
      name: '客単価目標',
      type: 'line',
      data: [2900, 3000, 2900, 2700, 2700, 2700, 2900, 2700, 2900, 2900, 3000, 2700, 2700, 2900, 2900, 3000, 2900, 2700, 2700, 2700, 2900, 2700, 2900, 2900, 3000, 2700, 2700, 2900, 2900, 2700]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 3,
      hover: {
        size: 4
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [3],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        }
      }
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.6],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_acs_progress2"), options);
  analysisChart.render();
})();

// customer progress chart

(function() {
  var options = {
    series: [{
      name: '日次客数実績',
      type: 'area',      
      data: [89, 92, 102, 70, 104, 98, 91, 84, 129, 78, 91, 83, 79, 104, 89, 92, 102, 70, 104, 98, 91, 84, 129, 78, 91, 83, 79, 104, 91, 84]
    }, {
      name: '日次客数目標',
      type: 'line',
        data: [80, 90, 100, 80, 90, 90, 90, 80, 100, 80, 90, 80, 80, 90, 80, 90, 100, 80, 90, 90, 90, 80, 100, 80, 90, 80, 80, 90, 90, 80]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    markers: {
      size: 3,
      hover: {
      size: 4
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [3],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        }
      }
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.6],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_progress2"), options);
  analysisChart.render();
})();
/*
(function() {
  var options = {
    series: [{
      name: '期間客数実績',
      type: 'area',      
      data: [89, 182, 272, 341, 405, 498, 581, 676, 759, 850, 939, 1022, 1095, 1168]
    }, {
      name: '期間客数目標',
      type: 'line',
      data: [2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250, 2250]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tickAmount: 6,
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_customer_progress"), options);
  analysisChart.render();
})();
*/


// pa cost ratio

(function() {
  var options = {
    series: [{
      name: '人件費実績',
      type: 'column',      
      data: [8438, 7342, 8234, 8324, 7932, 8230, 8948, 7473, 6382, 9134, 8246, 7432, 8472, 9413, 8472, 8437, 8762, 9236, 7364, 7832, 8134, 8263, 7472, 9134, 8741, 8734, 8232, 7811, 8134, 8362]
    }, {
      name: '人件費率目標',
      type: 'area',
      data: [31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 32.5, 31.2] 
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [0],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
      labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
      },
      formatter: function(val) {
        return Math.round(val); // 小数点なしで表示
      }
      }
    },{
      opposite: true,
      labels: {
        style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        },
        formatter: function(val) {
          return Math.round(val); // 小数点なしで表示
        }
      }
    }
    ],
    fill: {
      type:'solid',
      opacity: [0.9, 0.9],
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
      }, {
        formatter: function(y) {
          if (typeof y !== "undefined") {
          return y.toFixed(1) + "%";
          }
          return y;
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),'#F6C4DA'],
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
        right: 5,
        bottom: 0,
        left: 0
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_pacost_progress2"), options);
  analysisChart.render();
})();

// gross profit & gross margin

(function() {
  var options = {
    series: [{
      name: '利益実績',
      type: 'column',      
      data: [18438, 17342, 18234, 18324, 17932, 18230, 18948, 17473, 16382, 19134, 18246, 17432, 18472, 19413, 18472, 18437, 18762, 19236, 17364, 17832, 18134, 18263, 17472, 19134, 18741, 18734, 18232, 17811, 18134, 18362]
      }, {
      name: '利益率実績',
      type: 'area',      
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2] 
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [0],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
          },
        formatter: function(val) {
          return Math.round(val); // 小数点なしで表示
        }
      }
    },{
      opposite: true,
      labels: {
        style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        },
        formatter: function(val) {
          return Math.round(val); // 小数点なしで表示
        }
      }
    }
    ],
    fill: {
      type:'solid',
      opacity: [0.9, 0.9],
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
      }, {
        formatter: function(y) {
          if (typeof y !== "undefined") {
          return y.toFixed(1) + "%";
          }
          return y;
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"),'#C8F1E3'],
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
        right: 5,
        bottom: 0,
        left: 0
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_grossprofit_progress2"), options);
  analysisChart.render();
})();

// purchasing cost ratio

(function() {
  var options = {
    series: [{
      name: '仕入費実績',
      type: 'column',      
      data: [8438, 7342, 8234, 8324, 7932, 8230, 8948, 7473, 6382, 9134, 8246, 7432, 8472, 9413, 8472, 8437, 8762, 9236, 7364, 7832, 8134, 8263, 7472, 9134, 8741, 8734, 8232, 7811, 8134, 8362]
      }, {
      name: '仕入率実績',
      type: 'area',      
      data: [31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 31.4, 32.2, 30.6, 34.5, 31.7, 33.2, 32.9, 30.2, 32.5, 31.2, 32.5, 33.8, 30.2, 31.5, 32.5, 31.2] 
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [0],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [2],
        columnWidth: '50%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
      {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        },
        formatter: function(val) {
          return Math.round(val); // 小数点なしで表示
        }
      }
    },{
      opposite: true,
      labels: {
        style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        colors: KTUtil.getCssVariableValue("--bs-gray-500"),
        fontSize: "11px"
        },
        formatter: function(val) {
          return Math.round(val); // 小数点なしで表示
        }
      }
    }
    ],
    fill: {
      type:'solid',
      opacity: [0.9, 0.9],
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
      }, {
        formatter: function(y) {
          if (typeof y !== "undefined") {
          return y.toFixed(1) + "%";
          }
          return y;
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-orange"),'#FFD9C0'],
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
        right: 5,
        bottom: 0,
        left: 0
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_purchasingcost_progress2"), options);
  analysisChart.render();
})();

// profit compare progress

(function() {
  var options = {
    series: [{
      name: '当月利益実績',
      type: 'area',
      data: [88329, 177721, 262011, 344953, 436376, 529869, 618192, 703146, 791470, 882963, 972355, 1065557, 1156861, 1249960]
    }, {
      name: '前月利益実績',
      type: 'line',
      data: [86324, 174283, 259802, 324583, 437483, 526492, 613494, 702435, 784523, 872324, 983244, 1073245, 1163251, 1259324, 1324935, 1413264, 1501593, 1589922, 1678251, 1766580, 1854909, 1943238, 2031567, 2119896, 2208225, 2296554, 2384883, 2473212, 2561541, 2649870]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈬", "5/17㈬", "5/18㈬", "5/19㈬", "5/20㈬", "5/21㈬", "5/22㈬", "5/23㈬", "5/24㈬", "5/25㈬", "5/26㈬", "5/27㈬", "5/28㈬", "5/29㈬", "5/30㈬", "5/31㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_comp_progress"), options);
  analysisChart.render();
})();

// revenue compare progress

(function() {
  var options = {
    series: [{
      name: '当月売上実績',
      type: 'area',
      data: [334329, 723721, 1068011, 1460953, 1822376, 2215869, 2544192, 2929146, 3307470, 3668963, 4068355, 4431557, 4822861, 5034830]
    }, {
      name: '前月売上実績',
      type: 'line',
      data: [324934, 649868, 974802, 1299736, 1624670, 1949604, 2274538, 2599472, 2924406, 3249340, 3574274, 3899208, 4224142, 4549076, 4874010, 5198944, 5523878, 5848812, 6173746, 6498680, 6823614, 7148548, 7473482, 7798416, 8123350, 8448284, 8773218, 9098152, 9423086, 9748020]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈬", "5/17㈬", "5/18㈬", "5/19㈬", "5/20㈬", "5/21㈬", "5/22㈬", "5/23㈬", "5/24㈬", "5/25㈬", "5/26㈬", "5/27㈬", "5/28㈬", "5/29㈬", "5/30㈬", "5/31㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
        show: false
    },
    fill: {
      type:'solid',
      opacity: [0.3, 0.5],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_comp_progress"), options);
  analysisChart.render();
})();

// daily trend

(function() {
  var options = {
    series: [{
      name: '売上 (税抜)',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953, 332420]
      }, {
      name: '仕入費',
      data: [73552, 72842, 78429, 71493, 74920, 73240, 69328, 77345, 77324, 71294, 72953, 74583, 75391, 71394, 73552, 72842, 78429, 71493, 74920, 73240, 69328, 77345, 77324, 71294, 72953, 74583, 75391, 71394, 77345, 77324, 71294]
      }, {
      name: '人件費',
      data: [62943, 62394, 61294, 63842, 62395, 64593, 63495, 62395, 66439, 65392, 62435, 63535, 62453, 62554, 62943, 62394, 61294, 63842, 62395, 64593, 63495, 62395, 66439, 65392, 62435, 63535, 62453, 62554, 63495, 62395, 66439]
    }],
    chart: {
      type: 'bar',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["5/1㈬", "5/2㈭", "5/3㈮", "5/4㈯", "5/5㈰", "5/6㈪", "5/7㈫", "5/8㈬", "5/9㈭", "5/10㈮", "5/11㈯", "5/12㈰", "5/13㈪", "5/14㈫", "5/15㈬", "5/16㈭", "5/17㈮", "5/18㈯", "5/19㈰", "5/20㈪", "5/21㈫", "5/22㈬", "5/23㈭", "5/24㈮", "5/25㈯", "5/26㈰", "5/27㈪", "5/28㈫", "5/29㈬", "5/30㈭", "5/31㈮"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.95,
        opacityTo: 0.25,
        stops: [100, 100, 100, 100]
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-gray-400"), KTUtil.getCssVariableValue("--bs-orange"),KTUtil.getCssVariableValue("--bs-pink")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_daily_trend2"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 1

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [340533, 382420, 313340, 318424, 374729, 363245, 374035, 303842, 347381, 328243, 348032, 394924, 318432, 393753, 324893]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_1"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 2

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [313482, 382420, 313340, 318424, 374729, 363245, 374035, 303842, 347381, 328243, 318032, 358922, 329482, 368925, 309832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_2"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 3

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [63482, 62420, 63340, 68424, 64729, 63245, 64035, 63842, 67381, 68243, 68032, 68922, 69482, 68925, 69832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [74329, 64342, 65233, 74382, 64342, 62490, 64934, 65952, 69325, 73953, 62420, 64042, 69435, 64034, 64329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64342, 65233, 64382, 64342, 72490, 64934, 65952, 69325, 63953, 72420, 64042, 69435, 64034, 69325, 63953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_3"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 4

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61482, 63420, 65340, 64424, 68729, 62245, 65035, 65842, 62381, 66243, 64032, 62922, 67482, 62925, 65832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [64329, 65342, 61233, 70382, 74342, 65490, 68934, 63952, 67325, 72953, 64420, 61042, 66435, 65034, 68329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [74342, 62233, 60382, 67342, 70490, 66934, 62952, 63325, 66953, 71420, 66042, 64435, 66034, 64325, 67953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_4"), options);
  analysisChart.render();
})();

// daily trend comp pacost by store 5

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [51482, 53420, 55340, 54424, 58729, 52245, 55035, 55842, 52381, 56243, 54032, 52922, 57482, 52925, 55832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [54329, 55342, 61233, 60382, 54342, 55490, 58934, 53952, 57325, 62953, 54420, 51042, 56435, 55034, 58329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [54342, 52233, 60382, 57342, 60490, 56934, 52952, 53325, 56953, 51420, 56042, 54435, 56034, 54325, 57953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_5"), options);
  analysisChart.render();
})();

// daily trend comp pacost by store 6

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [55482, 51420, 57340, 52424, 54729, 58245, 51035, 57842, 54381, 55243, 52032, 57922, 54482, 59925, 56832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [58329, 54342, 61233, 50382, 57342, 52490, 59934, 55952, 52325, 60953, 56420, 58042, 54435, 52034, 56329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [59342, 53233, 60382, 54342, 50490, 59934, 56952, 58325, 52953, 57420, 52042, 51435, 58034, 59325, 53953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_6"), options);
  analysisChart.render();
})();

// daily trend comp gross profit by store 6

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [18438, 17342, 18234, 18324, 17932, 18230, 18948, 17473, 16382, 19134, 18246, 17432, 18472, 19413, 18472]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [16437, 18762, 19236, 17364, 17832, 18134, 18263, 17472, 19134, 18741, 18734, 18232, 17811, 18134, 18362]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [17438, 18342, 17234, 15324, 16932, 19230, 17948, 16473, 19382, 17134, 19246, 17432, 19472, 17413, 19472]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_7"), options);
  analysisChart.render();
})();

// daily trend comp gross profit by store 7

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [14438, 17342, 12234, 14324, 14932, 12230, 16948, 15473, 12382, 13134, 15246, 13432, 16472, 14413, 16472]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [17437, 15762, 15236, 16364, 18832, 13134, 15263, 16472, 14134, 16741, 19734, 15232, 16811, 15134, 14362]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [16438, 18342, 19234, 16324, 17932, 15230, 17948, 15473, 14382, 17134, 13246, 14432, 16472, 15413, 18472]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_8"), options);
  analysisChart.render();
})();

// daily trend comp gross margin by store 9

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_9"), options);
  analysisChart.render();
})();

// daily trend comp gross margin by store 10

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_10"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 11

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [63482, 62420, 63340, 68424, 64729, 63245, 64035, 63842, 67381, 68243, 68032, 68922, 69482, 68925, 69832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [74329, 64342, 65233, 74382, 64342, 62490, 64934, 65952, 69325, 73953, 62420, 64042, 69435, 64034, 64329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64342, 65233, 64382, 64342, 72490, 64934, 65952, 69325, 63953, 72420, 64042, 69435, 64034, 69325, 63953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_11"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by store 12

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61482, 63420, 65340, 64424, 68729, 62245, 65035, 65842, 62381, 66243, 64032, 62922, 67482, 62925, 65832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [64329, 65342, 61233, 70382, 74342, 65490, 68934, 63952, 67325, 72953, 64420, 61042, 66435, 65034, 68329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [74342, 62233, 60382, 67342, 70490, 66934, 62952, 63325, 66953, 71420, 66042, 64435, 66034, 64325, 67953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_12"), options);
  analysisChart.render();
})();

// daily trend comp purchasing ratio by store 13

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_13"), options);
  analysisChart.render();
})();

// daily trend comp purchasing ratio by store 14

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_14"), options);
  analysisChart.render();
})();

// daily trend comp pa by store 15

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [55482, 51420, 57340, 52424, 54729, 58245, 51035, 57842, 54381, 55243, 52032, 57922, 54482, 59925, 56832]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [58329, 54342, 61233, 50382, 57342, 52490, 59934, 55952, 52325, 60953, 56420, 58042, 54435, 52034, 56329]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [59342, 53233, 60382, 54342, 50490, 59934, 56952, 58325, 52953, 57420, 52042, 51435, 58034, 59325, 53953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_15"), options);
  analysisChart.render();
})();

// daily trend comp pa by store 16

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [18438, 17342, 18234, 18324, 17932, 18230, 18948, 17473, 16382, 19134, 18246, 17432, 18472, 19413, 18472]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [16437, 18762, 19236, 17364, 17832, 18134, 18263, 17472, 19134, 18741, 18734, 18232, 17811, 18134, 18362]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [17438, 18342, 17234, 15324, 16932, 19230, 17948, 16473, 19382, 17134, 19246, 17432, 19472, 17413, 19472]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_16"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 17

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 62.5, 61.2]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_17"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 18

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_18"), options);
  analysisChart.render();
})();

// daily trend comp customers by store 19

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [61, 62, 66, 65, 67, 64, 69, 62, 60, 63, 66, 68, 62, 65, 63] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [64, 62, 66, 65, 67, 63, 69, 60, 65, 61, 65, 68, 60, 61, 61]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63, 66, 75, 64, 62, 64, 60, 73, 63., 66, 64, 65, 67, 60, 72]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "人";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_19"), options);
  analysisChart.render();
})();

// daily trend comp customers by store 20

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [64, 61, 62, 63, 65, 64, 64, 63, 60, 63, 66, 64, 62, 65, 63] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [61, 62, 60, 64, 61, 63, 69, 62, 65, 61, 62, 68, 62, 65, 61]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [63, 66, 66, 67, 72, 69, 64, 65, 62, 66, 68, 62, 65, 65, 62]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return  y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "人";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_20"), options);
  analysisChart.render();
})();

// daily trend comp acs by store 21

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2729] 
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2883, 2449]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [2829, 3293, 2942, 2429, 2814, 3034, 3183, 2749, 2883, 3114, 2793, 2932, 2813, 2673, 3029]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_21"), options);
  analysisChart.render();
})();

// daily trend comp acs by store 22

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [2829, 3293, 2942, 2429, 2814, 3034, 3183, 2749, 2883, 3114, 2793, 2932, 2813, 2673, 3029]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [2729, 3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2729] 
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [3093, 2842, 2629, 2614, 2534, 2883, 2449, 3183, 2914, 3093, 2532, 2413, 2973, 2883, 2449]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["7/1㈬", "7/2㈭", "7/3㈮", "7/4㈯", "7/5㈰", "7/6㈪", "7/7㈫", "7/8㈬", "7/9㈭", "7/10㈮", "7/11㈯", "7/12㈰", "7/13㈪", "7/14㈫", "7/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_22"), options);
  analysisChart.render();
})();

// sales comp dow by store 23

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [324342, 345233, 304382, 354342, 342490, 314934, 335952]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [340533, 382420, 313340, 318424, 374729, 363245, 374035]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_23"), options);
  analysisChart.render();
})();

// sales comp dow by store 24

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [335952, 359325, 313953, 332420, 314042, 339435, 324034]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [359325, 313953, 332420, 314042, 339435, 324034, 359325]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [303842, 347381, 328243, 348032, 394924, 318432, 393753]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_24"), options);
  analysisChart.render();
})();

// customer comp dow by store 25

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [95, 82, 93, 90, 102, 102, 130]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [92, 89, 92, 102, 104, 121, 123]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [84, 81, 89, 95, 110, 99, 124]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "人";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_25"), options);
  analysisChart.render();
})();

// customer comp dow by store 26

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [101, 92, 103, 80, 92, 122, 110]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [99, 79, 72, 92, 114, 131, 113]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [94, 91, 109, 105, 100, 119, 134]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
      formatter: function(y) {
        return y.toLocaleString() + "人";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_26"), options);
  analysisChart.render();
})();

// acs comp dow by store 27

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [3352, 3525, 3133, 3320, 3142, 3395, 3034]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [3525, 3153, 3420, 3042, 3393, 3434, 3593]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [3032, 3381, 3243, 3802, 3924, 3432, 3953]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_27"), options);
  analysisChart.render();
})();

// acs comp dow by store 28

(function() {
  var options = {
    series: [{
      name: 'フレッシュラクミー 平均',
      data: [3322, 3843, 3492, 3593, 3943, 3329, 3329]
      }, {
      name: 'フレッシュラクミー 渋谷店',
      data: [3529, 3294, 3294, 3294, 3402, 3243, 3320]
      }, {
      name: 'フレッシュラクミー 青山店',
      data: [3924, 3423, 3249, 3829, 3294, 3429, 3294]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_28"), options);
  analysisChart.render();
})();

// timezone comp sales by store 29

(function() {
  var options = {
  series: [{
    name: 'フレッシュラクミー 平均',
    data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329, 324342, 345233, 304382, 354342, 342490]
    }, {
    name: 'フレッシュラクミー 渋谷店',
    data: [324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953, 313953, 332420, 314042, 339435, 324034]
    }, {
    name: 'フレッシュラクミー 青山店',
    data: [340533, 382420, 313340, 318424, 374729, 363245, 374035, 303842, 347381, 328243, 348032, 394924, 318432, 393753, 324893, 354342, 342490, 314934, 335952, 342490]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
    return "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_29"), options);
  analysisChart.render();
})();

// timezone comp sales by store 30

(function() {
  var options = {
  series: [{
    name: 'フレッシュラクミー 平均',
    data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329, 324342, 345233, 304382, 354342, 342490]
    }, {
    name: 'フレッシュラクミー 渋谷店',
    data: [324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 359325, 313953, 313953, 332420, 314042, 339435, 324034]
    }, {
    name: 'フレッシュラクミー 青山店',
    data: [340533, 382420, 313340, 318424, 374729, 363245, 374035, 303842, 347381, 328243, 348032, 394924, 318432, 393753, 324893, 354342, 342490, 314934, 335952, 342490]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
    return "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_30"), options);
  analysisChart.render();
})();

// timezone comp customer by store 31

(function() {
  var options = {
  series: [{
    name: 'フレッシュラクミー 平均',
    data: [329, 342, 233, 382, 342, 490, 334, 352, 325, 453, 420, 442, 435, 434, 329, 342, 233, 382, 342, 490]
    }, {
    name: 'フレッシュラクミー 渋谷店',
    data: [342, 333, 382, 342, 490, 434, 352, 325, 353, 220, 442, 435, 434, 325, 353, 353, 420, 442, 435, 234]
    }, {
    name: 'フレッシュラクミー 青山店',
    data: [333, 220, 340, 324, 329, 345, 335, 342, 381, 343, 432, 424, 432, 353, 493, 342, 490, 334, 352, 290]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }, {
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }, {
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_31"), options);
  analysisChart.render();
})();

// timezone comp customer by store 32

(function() {
  var options = {
  series: [{
    name: 'フレッシュラクミー 平均',
    data: [329, 342, 233, 382, 342, 490, 334, 352, 325, 453, 420, 442, 435, 434, 329, 342, 233, 382, 342, 490]
    }, {
    name: 'フレッシュラクミー 渋谷店',
    data: [342, 333, 382, 342, 490, 434, 352, 325, 353, 220, 442, 435, 434, 325, 353, 353, 420, 442, 435, 234]
    }, {
    name: 'フレッシュラクミー 青山店',
    data: [333, 220, 340, 324, 329, 345, 335, 342, 381, 343, 432, 424, 432, 353, 493, 342, 490, 334, 352, 290]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }, {
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }, {
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_32"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 33

(function() {
  var options = {
    series: [{
      name: '利益進捗率 全店舗平均',
      data: [3.8, 6.2, 9.4, 12.4, 15.5, 18.4, 21.1, 24.3, 27.5, 30.1, 33.3, 38.4, 41.9, 44.8, 47.2]
      }, {
      name: '売上進捗率 全店舗平均',
      data: [3.5, 6.6, 9.8, 13.2, 16.5, 18.2, 22.2, 25.3, 28.5, 31.1, 36.3, 41.4, 44.9, 49.8, 53.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
      formatter: function(y) {
          return y.toLocaleString() + "%";
      }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_33"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 34

(function() {
  var options = {
  series: [{
    name: '日次売上 全店舗',
    data: [3343290, 3243420, 3452330, 3043820, 3543420, 3424900, 3149340, 3359520, 3593250, 3139530, 3324200, 3140420, 3394305, 3240034, 3340329]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
    return "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_34"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 35

(function() {
  var options = {
  series: [{
    name: '日次仕入費 全店舗',
    data: [643402, 652033, 604382, 640342, 624090, 649034, 650952, 690325, 630953, 620420, 640042, 694035, 640034, 690325, 630953]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-orange")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_35"), options);
  analysisChart.render();
})();

// daily trend comp sales by store 36

(function() {
  var options = {
  series: [{
    name: '日次PA人件費 全店舗',
    data: [500533, 520420, 533040, 584024, 540729, 530245, 540035, 530842, 573081, 580243, 580032, 540924, 580432, 530753, 540893]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_36"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 37

(function() {
  var options = {
  series: [{
    name: '利益進捗率',
    data: [3.8, 6.2, 9.4, 12.4, 15.5, 18.4, 21.1, 24.3, 27.5, 30.1, 33.3, 38.4, 41.9, 44.8, 47.2] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_37"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 38

(function() {
  var options = {
  series: [{
    name: '利益目標進捗率',
    data: [103.8, 106.2, 99.4, 102.4, 105.5, 98.4, 101.1, 104.3, 107.5, 100.1, 103.3, 98.4, 101.9, 94.8, 107.2] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_38"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 39

(function() {
  var options = {
  series: [{
    name: '売上進捗率',
    data: [3.5, 6.6, 9.8, 13.2, 16.5, 18.2, 22.2, 25.3, 28.5, 31.1, 36.3, 41.4, 44.9, 49.8, 53.2] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_39"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 40

(function() {
  var options = {
  series: [{
    name: '売上目標進捗率',
    data: [101.8, 99.2, 99.4, 96.4, 102.5, 101.4, 105.1, 120.3, 117.5, 98.1, 103.3, 104.4, 95.9, 98.8, 101.2] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_40"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 41

(function() {
  var options = {
  series: [{
    name: '粗利益',
    data: [100533, 120420, 133040, 184024, 140729, 130245, 140035, 130842, 173081, 180243, 180032, 140924, 110432, 130753, 140893] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_41"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 42

(function() {
  var options = {
  series: [{
    name: '粗利率',
    data: [61.8, 69.2, 59.4, 66.4, 62.5, 61.4, 65.1, 60.3, 67.5, 68.1, 63.3, 64.4, 65.9, 68.8, 61.2] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_42"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 43

(function() {
  var options = {
  series: [{
    name: '仕入費',
    data: [100533, 120420, 133040, 184024, 140729, 130245, 140035, 130842, 173081, 180243, 180032, 140924, 110432, 130753, 140893] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_43"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 44

(function() {
  var options = {
  series: [{
    name: '食材仕入率',
    data: [61.8, 69.2, 59.4, 66.4, 62.5, 61.4, 65.1, 60.3, 67.5, 68.1, 63.3, 64.4, 65.9, 68.8, 61.2] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_44"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 45

(function() {
  var options = {
  series: [{
    name: 'PA人件費',
    data: [100533, 120420, 133040, 184024, 140729, 130245, 140035, 130842, 173081, 180243, 180032, 140924, 110432, 130753, 140893] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_45"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 46

(function() {
  var options = {
  series: [{
    name: '人件費率 (PA人件費率)',
    data: [61.8, 69.2, 59.4, 66.4, 62.5, 61.4, 65.1, 60.3, 67.5, 68.1, 63.3, 64.4, 65.9, 68.8, 61.2] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_46"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 47

(function() {
  var options = {
  series: [{
    name: '客数',
    data: [533, 420, 340, 424, 729, 245, 435, 842, 581, 543, 632, 424, 432, 753, 893] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  y.toLocaleString() + "人";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_47"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by store 48

(function() {
  var options = {
  series: [{
    name: '客単価',
    data: [3533, 3420, 3240, 3024, 3729, 3245, 3035, 3842, 3081, 3243, 3032, 3924, 3432, 3753, 3893] 
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["8/1㈬", "8/2㈭", "8/3㈮", "8/4㈯", "8/5㈰", "8/6㈪", "8/7㈫", "8/8㈬", "8/9㈭", "8/10㈮", "8/11㈯", "8/12㈰", "8/13㈪", "8/14㈫", "8/15㈬"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return  "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_48"), options);
  analysisChart.render();
})();


// sales comp dow by store 49

(function() {
  var options = {
    series: [{
      name: '平均売上',
      data: [334329, 324342, 345233, 304382, 354342, 342490, 314934]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
          }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_49"), options);
  analysisChart.render();
})();

// sales comp dow by store 50

(function() {
  var options = {
    series: [{
      name: '平均客数',
      data: [89, 94, 64, 96, 129, 141, 154]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "人";
          }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_50"), options);
  analysisChart.render();
})();

// sales comp dow by store 51

(function() {
  var options = {
    series: [{
      name: '平均客単価',
      data: [4231, 4311, 3813, 5311, 6321, 7131, 5481]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
          }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_51"), options);
  analysisChart.render();
})();

// timezone comp sales by store 52

(function() {
  var options = {
  series: [{
    name: '売上',
    data: [334329, 324342, 345233, 304382, 354342, 342490, 314934, 335952, 359325, 313953, 332420, 314042, 339435, 324034, 334329, 324342, 345233, 304382, 354342, 342490]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
    return "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_52"), options);
  analysisChart.render();
})();

// timezone comp customer by store 53

(function() {
  var options = {
  series: [{
    name: '客数',
    data: [329, 342, 233, 382, 342, 490, 334, 352, 325, 453, 420, 442, 435, 434, 329, 342, 233, 382, 342, 490]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }, {
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }, {
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_store_53"), options);
  analysisChart.render();
})();

// daily trend comp sales by time 1

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [361482, 363420, 365340, 364424, 368729, 362245, 365035, 365842, 362381, 366243, 364032, 362922, 367482, 362925, 365832]
      }, {
      name: '2023年7月',
      data: [364329, 365342, 361233, 370382, 374342, 365490, 368934, 363952, 367325, 372953, 364420, 361042, 366435, 365034, 368329]
      }, {
      name: '2023年6月',
      data: [374342, 362233, 360382, 367342, 370490, 366934, 362952, 363325, 366953, 371420, 366042, 364435, 366034, 364325, 367953]
      }, {
      name: '2023年5月',
      data: [364939, 365493, 364829, 373289, 374820, 363204, 364902, 364902, 363825, 374453, 364930, 369402, 364092, 361390, 364890]
      }, {
      name: '2023年4月',
      data: [374023, 364930, 364903, 369402, 373925, 369032, 364945, 364903, 364905, 374903, 364935, 364920, 369053, 364903, 362395]
      }, {
      name: '2023年3月',
      data: [361394, 369042, 364930, 370953, 379434, 369043, 369024, 360435, 360353, 379403, 369433, 369034, 369403, 362934, 369403]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_1"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by time 2

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [61482, 63420, 65340, 64424, 68729, 62245, 65035, 65842, 62381, 66243, 64032, 62922, 67482, 62925, 65832]
      }, {
      name: '2023年7月',
      data: [64329, 65342, 61233, 70382, 74342, 65490, 68934, 63952, 67325, 72953, 64420, 61042, 66435, 65034, 68329]
      }, {
      name: '2023年6月',
      data: [74342, 62233, 60382, 67342, 70490, 66934, 62952, 63325, 66953, 71420, 66042, 64435, 66034, 64325, 67953]
      }, {
      name: '2023年5月',
      data: [64939, 65493, 64829, 73289, 74820, 63204, 64902, 64902, 63825, 74453, 64930, 69402, 64092, 61390, 64890]
      }, {
      name: '2023年4月',
      data: [74023, 64930, 64903, 69402, 73925, 69032, 64945, 64903, 64905, 74903, 64935, 64920, 69053, 64903, 62395]
      }, {
      name: '2023年3月',
      data: [61394, 69042, 64930, 70953, 79434, 69043, 69024, 60435, 60353, 79403, 69433, 69034, 69403, 62934, 69403]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_2"), options);
  analysisChart.render();
})();

// daily trend comp pa by time 3

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [51482, 53420, 55340, 54424, 58729, 52245, 55035, 55842, 52381, 56243, 54032, 52922, 57482, 52925, 55832]
      }, {
      name: '2023年7月',
      data: [54329, 55342, 51233, 60382, 54342, 55490, 58934, 53952, 57325, 52953, 54420, 51042, 56435, 55034, 58329]
      }, {
      name: '2023年6月',
      data: [54342, 52233, 50382, 57342, 50490, 56934, 52952, 53325, 56953, 51420, 56042, 54435, 56034, 54325, 57953]
      }, {
      name: '2023年5月',
      data: [54939, 55493, 54829, 53289, 54820, 53204, 54902, 54902, 53825, 54453, 54930, 59402, 54092, 51390, 54890]
      }, {
      name: '2023年4月',
      data: [54023, 54930, 54903, 59402, 53925, 59032, 54945, 54903, 54905, 54903, 54935, 54920, 59053, 54903, 52395]
      }, {
      name: '2023年3月',
      data: [51394, 59042, 54930, 50953, 59434, 59043, 59024, 50435, 50353, 59403, 59433, 59034, 59403, 52934, 59403]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_3"), options);
  analysisChart.render();
})();

// daily trend comp gross profit by time 4

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [11482, 13420, 15340, 14424, 18729, 12245, 15035, 15842, 12381, 16243, 14032, 12922, 17482, 12925, 15832]
      }, {
      name: '2023年7月',
      data: [14329, 15342, 11233, 10382, 14342, 15490, 18934, 13952, 17325, 11953, 14420, 11042, 16435, 15034, 18329]
      }, {
      name: '2023年6月',
      data: [14342, 12233, 10382, 17342, 10490, 16934, 12952, 13325, 16953, 11420, 16042, 14435, 16034, 14325, 17953]
      }, {
      name: '2023年5月',
      data: [14939, 15493, 14829, 13289, 14820, 13204, 14902, 14902, 13825, 14453, 14930, 19402, 14092, 11390, 14890]
      }, {
      name: '2023年4月',
      data: [14023, 14930, 14903, 19402, 13925, 19032, 14945, 14903, 14905, 14903, 14935, 14920, 19053, 14903, 12395]
      }, {
      name: '2023年3月',
      data: [11394, 19042, 14930, 10953, 19434, 19043, 19024, 10435, 10353, 19403, 19433, 19034, 19403, 12934, 19403]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_4"), options);
  analysisChart.render();
})();

// daily trend comp gross margin by time 5

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: '2023年7月',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: '2023年6月',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
      }, {
      name: '2023年5月',
      data: [66.2, 64.6, 61.5, 66.7, 64.2, 66.9, 68.2, 61.5, 65.2, 62.5, 66.8, 68.2, 69.5, 60.5, 64.2]
      }, {
      name: '2023年4月',
      data: [61.2, 65.6, 62.5, 60.7, 66.2, 62.9, 67.2, 65.5, 60.2, 61.5, 63.8, 69.2, 67.5, 66.5, 64.2]
      }, {
      name: '2023年3月',
      data: [68.2, 66.6, 62.5, 61.7, 69.2, 65.9, 62.2, 66.5, 67.2, 62.5, 67.8, 65.2, 66.5, 62.5, 69.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_5"), options);
  analysisChart.render();
})();

// daily trend comp purchasing by time 6

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [11482, 13420, 15340, 14424, 18729, 12245, 15035, 15842, 12381, 16243, 14032, 12922, 17482, 12925, 15832]
      }, {
      name: '2023年7月',
      data: [14329, 15342, 11233, 10382, 14342, 15490, 18934, 13952, 17325, 11953, 14420, 11042, 16435, 15034, 18329]
      }, {
      name: '2023年6月',
      data: [14342, 12233, 10382, 17342, 10490, 16934, 12952, 13325, 16953, 11420, 16042, 14435, 16034, 14325, 17953]
      }, {
      name: '2023年5月',
      data: [14939, 15493, 14829, 13289, 14820, 13204, 14902, 14902, 13825, 14453, 14930, 19402, 14092, 11390, 14890]
      }, {
      name: '2023年4月',
      data: [14023, 14930, 14903, 19402, 13925, 19032, 14945, 14903, 14905, 14903, 14935, 14920, 19053, 14903, 12395]
      }, {
      name: '2023年3月',
      data: [11394, 19042, 14930, 10953, 19434, 19043, 19024, 10435, 10353, 19403, 19433, 19034, 19403, 12934, 19403]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_6"), options);
  analysisChart.render();
})();

// daily trend comp purchasing ratio by time 7

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: '2023年7月',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: '2023年6月',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
      }, {
      name: '2023年5月',
      data: [66.2, 64.6, 61.5, 66.7, 64.2, 66.9, 68.2, 61.5, 65.2, 62.5, 66.8, 68.2, 69.5, 60.5, 64.2]
      }, {
      name: '2023年4月',
      data: [61.2, 65.6, 62.5, 60.7, 66.2, 62.9, 67.2, 65.5, 60.2, 61.5, 63.8, 69.2, 67.5, 66.5, 64.2]
      }, {
      name: '2023年3月',
      data: [68.2, 66.6, 62.5, 61.7, 69.2, 65.9, 62.2, 66.5, 67.2, 62.5, 67.8, 65.2, 66.5, 62.5, 69.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_7"), options);
  analysisChart.render();
})();

// daily trend comp pa by time 8

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [11482, 13420, 15340, 14424, 18729, 12245, 15035, 15842, 12381, 16243, 14032, 12922, 17482, 12925, 15832]
      }, {
      name: '2023年7月',
      data: [14329, 15342, 11233, 10382, 14342, 15490, 18934, 13952, 17325, 11953, 14420, 11042, 16435, 15034, 18329]
      }, {
      name: '2023年6月',
      data: [14342, 12233, 10382, 17342, 10490, 16934, 12952, 13325, 16953, 11420, 16042, 14435, 16034, 14325, 17953]
      }, {
      name: '2023年5月',
      data: [14939, 15493, 14829, 13289, 14820, 13204, 14902, 14902, 13825, 14453, 14930, 19402, 14092, 11390, 14890]
      }, {
      name: '2023年4月',
      data: [14023, 14930, 14903, 19402, 13925, 19032, 14945, 14903, 14905, 14903, 14935, 14920, 19053, 14903, 12395]
      }, {
      name: '2023年3月',
      data: [11394, 19042, 14930, 10953, 19434, 19043, 19024, 10435, 10353, 19403, 19433, 19034, 19403, 12934, 19403]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_8"), options);
  analysisChart.render();
})();

// daily trend comp pa ratio by time 9

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [64.4, 61.2, 62.6, 63.5, 65.7, 64.2, 64.9, 63.2, 60.5, 63.2, 66.5, 64.8, 62.2, 65.5, 63.4] 
      }, {
      name: '2023年7月',
      data: [61.4, 62.2, 60.6, 64.5, 61.7, 63.2, 62.9, 60.2, 62.5, 61.2, 62.5, 63.8, 60.2, 61.5, 61.4]
      }, {
      name: '2023年6月',
      data: [63.2, 62.6, 66.5, 64.7, 62.2, 61.9, 64.2, 63.5, 62.2, 66.5, 64.8, 62.2, 61.5, 64.5, 62.2]
      }, {
      name: '2023年5月',
      data: [66.2, 64.6, 61.5, 66.7, 64.2, 66.9, 68.2, 61.5, 65.2, 62.5, 66.8, 68.2, 69.5, 60.5, 64.2]
      }, {
      name: '2023年4月',
      data: [61.2, 65.6, 62.5, 60.7, 66.2, 62.9, 67.2, 65.5, 60.2, 61.5, 63.8, 69.2, 67.5, 66.5, 64.2]
      }, {
      name: '2023年3月',
      data: [68.2, 66.6, 62.5, 61.7, 69.2, 65.9, 62.2, 66.5, 67.2, 62.5, 67.8, 65.2, 66.5, 62.5, 69.2]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_9"), options);
  analysisChart.render();
})();

// daily trend comp customer by time 10

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [64, 61, 62, 63, 65, 64, 64, 63, 60, 63, 66, 64, 62, 65, 63] 
      }, {
      name: '2023年7月',
      data: [61, 62, 60, 64, 61, 62, 62, 60, 62, 61, 62, 63, 60, 61, 61]
      }, {
      name: '2023年6月',
      data: [63, 62, 66, 64, 62, 61, 64, 63, 62, 66, 64, 62, 61, 64, 62]
      }, {
      name: '2023年5月',
      data: [66, 64, 61, 66, 64, 66, 68, 61, 65, 62, 66, 68, 69, 60, 64]
      }, {
      name: '2023年4月',
      data: [61, 65, 62, 60, 66, 62, 67, 65, 60, 61, 63, 69, 67, 66, 64]
      }, {
      name: '2023年3月',
      data: [68, 66, 62, 61, 69, 65, 62, 66, 67, 62, 67, 65, 66, 62, 69]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_10"), options);
  analysisChart.render();
})();

// daily trend comp acs by time 11

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [2482, 3420, 2340, 2424, 3729, 3245, 3035, 2842, 3381, 2643, 2432, 2922, 3482, 2925, 2832]
      }, {
      name: '2023年7月',
      data: [3329, 2342, 3233, 2382, 3342, 3490, 2934, 2952, 3325, 2953, 3420, 3042, 3435, 3034, 3329]
      }, {
      name: '2023年6月',
      data: [3342, 3233, 3382, 2732, 3490, 2934, 2952, 3325, 2953, 3420, 3042, 3435, 3034, 3325, 2953]
      }, {
      name: '2023年5月',
      data: [2939, 3493, 2829, 3289, 2820, 3204, 2902, 2902, 2825, 3453, 2930, 3402, 3092, 3390, 2890]
      }, {
      name: '2023年4月',
      data: [3023, 2930, 2903, 3402, 2925, 3032, 2945, 2903, 2905, 2903, 3235, 2920, 3053, 2903, 3395]
      }, {
      name: '2023年3月',
      data: [3394, 3042, 2930, 2953, 3434, 3043, 3024, 3435, 3353, 3403, 3433, 3034, 3403, 2934, 3403]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_11"), options);
  analysisChart.render();
})();

// sales comp dow by time 12

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [361482, 363420, 365340, 364424, 368729, 362245, 365035]
      }, {
      name: '2023年7月',
      data: [364329, 365342, 361233, 370382, 374342, 365490, 368934]
      }, {
      name: '2023年6月',
      data: [374342, 362233, 360382, 367342, 370490, 366934, 362952]
      }, {
      name: '2023年5月',
      data: [364939, 365493, 364829, 373289, 374820, 363204, 364902]
      }, {
      name: '2023年4月',
      data: [374023, 364930, 364903, 369402, 373925, 369032, 364945]
      }, {
      name: '2023年3月',
      data: [361394, 369042, 364930, 370953, 379434, 369043, 369024]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_12"), options);
  analysisChart.render();
})();

// sales comp customer by time 13

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [101, 92, 103, 80, 92, 122, 110]
      }, {
      name: '2023年7月',
      data: [99, 79, 72, 92, 114, 131, 113]
      }, {
      name: '2023年6月',
      data: [94, 91, 109, 105, 100, 119, 134]
      }, {
      name: '2023年5月',
      data: [85, 85, 93, 84, 95, 104, 123]
      }, {
      name: '2023年4月',
      data: [98, 79, 112, 98, 89, 99, 102]
      }, {
      name: '2023年3月',
      data: [89, 78, 96, 91, 120, 112, 132]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_13"), options);
  analysisChart.render();
})();

// sales comp acs by time 14

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [3682, 3620, 3650, 3644, 3729, 3245, 3655]
      }, {
      name: '2023年7月',
      data: [3649, 3642, 3633, 3382, 3742, 3690, 3684]
      }, {
      name: '2023年6月',
      data: [3742, 3623, 3602, 3642, 3704, 3634, 3652]
      }, {
      name: '2023年5月',
      data: [3639, 3593, 3489, 3329, 3420, 3634, 3642]
      }, {
      name: '2023年4月',
      data: [3723, 3690, 3643, 3902, 3925, 3692, 3645]
      }, {
      name: '2023年3月',
      data: [3694, 3692, 3640, 3053, 3794, 3643, 3690]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
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
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_14"), options);
  analysisChart.render();
})();

// timezone comp sales by time 15

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [3349, 3242, 3433, 3082, 3342, 3490, 3934, 3352, 3595, 3953, 3320, 3142, 3395, 3240, 3329, 3242, 3433, 3042, 3543, 3490]
      }, {
      name: '2023年7月',
      data: [3242, 3433, 3082, 3542, 3490, 3134, 3352, 3595, 3133, 3320, 3140, 3335, 3034, 3525, 3133, 3153, 3420, 3142, 3335, 3244]
      }, {
      name: '2023年6月',
      data: [3405, 3820, 3330, 3844, 3479, 3625, 3035, 3082, 3381, 3283, 3432, 3924, 3132, 3353, 3893, 3442, 3490, 3194, 3359, 3420]
      }, {
      name: '2023年5月',
      data: [3329, 3232, 3423, 3032, 3532, 3240, 3494, 3395, 3935, 3353, 3220, 3442, 3345, 3244, 3339, 3442, 3423, 3482, 3432, 3490]
      }, {
      name: '2023年4月',
      data: [3342, 3433, 3382, 3342, 3490, 3134, 3352, 3595, 3153, 3320, 3142, 3335, 3234, 3525, 3133, 3153, 3220, 3102, 3393, 3234]
      }, {
      name: '2023年3月',
      data: [3403, 3820, 3133, 3184, 3779, 3635, 3735, 3082, 3381, 3243, 3032, 3924, 3432, 3753, 3293, 3542, 3490, 3134, 3352, 3490]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_15"), options);
  analysisChart.render();
})();

// timezone comp sales by time 16

(function() {
  var options = {
    series: [{
      name: '2023年8月',
      data: [49, 42, 34, 38, 42, 30, 34, 32, 55, 53, 30, 42, 95, 40, 39, 32, 34, 32, 33, 34]
      }, {
      name: '2023年7月',
      data: [32, 33, 32, 32, 30, 34, 32, 35, 33, 30, 40, 35, 34, 55, 33, 53, 20, 42, 35, 34]
      }, {
      name: '2023年6月',
      data: [34, 38, 30, 84, 79, 65, 35, 82, 81, 83, 32, 94, 32, 33, 83, 42, 49, 34, 59, 34]
      }, {
      name: '2023年5月',
      data: [29, 32, 34, 32, 52, 40, 39, 35, 35, 53, 30, 42, 45, 32, 39, 42, 42, 82, 43, 49]
      }, {
      name: '2023年4月',
      data: [32, 33, 82, 42, 49, 34, 52, 55, 53, 30, 42, 35, 34, 52, 31, 53, 30, 32, 33, 34]
      }, {
      name: '2023年3月',
      data: [34, 30, 33, 84, 79, 35, 35, 32, 81, 43, 32, 39, 32, 53, 29, 54, 49, 31, 52, 34]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.15,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_16"), options);
  analysisChart.render();
})();

// timezone comp sales by time 17

(function() {
  var options = {
    series: [{
      name: 'ランチ売上',
      data: [334329, 324342, 345233, 304382, 354342, 342490]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_17"), options);
  analysisChart.render();
})();

// timezone comp sales by time 18

(function() {
  var options = {
  series: [{
    name: '客数',
    data: [482, 435, 523, 425, 490, 469]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_18"), options);
  analysisChart.render();
})();


// timezone comp sales by time 19

(function() {
  var options = {
    series: [{
      name: '客単価',
      data: [3035, 3432, 3725, 3625, 3490, 3382]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_19"), options);
  analysisChart.render();
})();

// timezone comp sales by time 20

(function() {
  var options = {
    series: [{
      name: 'ディナー売上',
      data: [334329, 324342, 345233, 304382, 354342, 342490]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_20"), options);
  analysisChart.render();
})();

// timezone comp sales by time 21

(function() {
  var options = {
  series: [{
    name: '客数',
    data: [482, 435, 523, 425, 490, 469]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_21"), options);
  analysisChart.render();
})();


// timezone comp sales by time 22

(function() {
  var options = {
    series: [{
      name: '客単価',
      data: [3035, 3432, 3725, 3625, 3490, 3382]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_22"), options);
  analysisChart.render();
})();

// timezone comp sales by time 23

(function() {
  var options = {
  series: [{
  name: '利益',
  data: [1128584, 1823322, 1334845, 1243942, 1730923, 1549395]
  }, {
  name: '売上',
  data: [3985746, 4842423, 4334329, 3734495, 4449329, 4994304]
  }, {
  name: '費用',
  data: [2857162, 3019101, 2999484, 2490553, 2718406, 3444909]
  }],
  chart: {
  type: 'area',
  height: '240',
  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
  toolbar: {
  show: false
  }
  },
  stroke: {
  show: true,
  curve: 'smooth',
  width: 2,
  },
  plotOptions: {
  bar: {
  horizontal: false,
  borderRadius: [4],
  columnWidth: '80%',
  endingShape: 'rounded'
  },
  },
  legend: {
  position: 'top',
  fontSize: "11px",
  fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
  labels: {
  colors: KTUtil.getCssVariableValue("--bs-gray-600"),
  }
  },
  dataLabels: {
  enabled: false,
  },
  xaxis: {
  categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
  axisBorder: {
  show: false
  },
  axisTicks: {
  show: false
  },
  labels: {
  show: true,
  rotate: 0,
  hideOverlappingLabels: true,
  style: {
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    colors: KTUtil.getCssVariableValue("--bs-gray-500"),
    fontSize: "11px"
  }
  }
  },
  yaxis: {
  labels: {
  show: true,
  rotate: 0,
  hideOverlappingLabels: true,
  style: {
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    colors: KTUtil.getCssVariableValue("--bs-gray-500"),
    fontSize: "11px"
  }
  }
  },
  fill: {
  type: 'gradient',
  gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 0.45,
    opacityTo: 0.05,
    stops: [20, 100, 100, 100]
  },
  },
  tooltip: {
  shared: true,
  intersect: false,
  y: [{
  formatter: function(y) {
    return "¥" + y.toLocaleString();
  }
  }, {
  formatter: function(y) {
    return "¥" + y.toLocaleString();
  }
  }, {
  formatter: function(y) {
  return "¥" + y.toLocaleString();
  }
  }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
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
  right: 24,
  bottom: 0,
  left: 10
  }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_23"), options);
  analysisChart.render();
})();

// timezone comp sales by time 24

(function() {
  var options = {
    series: [{
      name: '売上',
      data: [334329, 324342, 345233, 304382, 354342, 342490]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_24"), options);
  analysisChart.render();
})();

// timezone comp sales by time 25

(function() {
  var options = {
  series: [{
    name: '客数',
    data: [482, 435, 523, 425, 490, 469]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "人";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_25"), options);
  analysisChart.render();
})();


// timezone comp sales by time 26

(function() {
  var options = {
    series: [{
      name: '客単価',
      data: [3035, 3432, 3725, 3625, 3490, 3382]
    }],
    chart: {
      type: 'area',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [100, 100, 100, 100]
        },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_26"), options);
  analysisChart.render();
})();

// timezone comp sales by time 27

(function() {
  var options = {
  series: [{
    name: '変動費率',
    data: [61.2, 62.4, 63.2, 61.0, 62.1, 64.8]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-teal")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_27"), options);
  analysisChart.render();
})();

// timezone comp sales by time 28

(function() {
  var options = {
  series: [{
    name: '食材仕入率',
    data: [37.2, 32.4, 38.2, 38.0, 33.1, 34.8]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-orange")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_28"), options);
  analysisChart.render();
})();

// timezone comp sales by time 29

(function() {
  var options = {
  series: [{
    name: '人件費率 (PA人件費率)',
    data: [10.2, 11.4, 11.2, 10.0, 11.1, 12.8]
  }],
  chart: {
    type: 'area',
    height: '240',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 2,
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '80%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["2023/8", "2023/7", "2023/6", "2023/5", "2023/4", "2023/3"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return y.toLocaleString() + "%";
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-pink")],
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
    right: 24,
    bottom: 0,
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#comp_time_29"), options);
  analysisChart.render();
})();

// profit gauge

(function() {
  var options = {
    series: [47],
    chart: {
    height: 250,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      offsetY: -10,
      dataLabels: {
        name: {
          fontSize: '11px',
          color: KTUtil.getCssVariableValue("--bs-gray-500"),
          offsetY: 60
        },
        value: {
          offsetY: 76,
          fontSize: '24px',
          color: KTUtil.getCssVariableValue("--bs-dark"),
          fontWeight: 600,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -10
        }
      }
    }
  },
  fill: {
    colors: [KTUtil.getCssVariableValue("--bs-primary")],
  },
  stroke: {
    dashArray: 4
  },
  labels: ['到達状況'],
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_profit_gauge"), options);
  analysisChart.render();
})();

// revenue gauge

(function() {
  var options = {
    series: [51],
    chart: {
    height: 250,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      offsetY: -10,
      dataLabels: {
        name: {
          fontSize: '11px',
          color: KTUtil.getCssVariableValue("--bs-gray-500"),
          offsetY: 60
        },
        value: {
          offsetY: 76,
          fontSize: '24px',
          color: KTUtil.getCssVariableValue("--bs-dark"),
          fontWeight: 600,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -10
        }
      }
    }
  },
  fill: {
    colors: [KTUtil.getCssVariableValue("--bs-primary")],
  },
  stroke: {
    dashArray: 4
  },
  labels: ['到達状況'],
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_gauge"), options);
  analysisChart.render();
})();

// revenue by timezone

(function() {
  var options = {
    series: [{
      name: '期間合計売上',
      type: 'bar',
      data: [5886, 6490, 8329, 9459, 8942, 9402, 13425, 12735, 10147, 6924, 7886, 8490, 9329, 10459, 12942, 15402, 12425, 11735, 8147, 5924]
    }, {
    name: '期間合計客数',
    type: 'area',
    data: [58, 64, 83, 94, 89, 94, 134, 127, 101, 69, 78, 84, 93, 104, 129, 154, 124, 117, 81, 59]
    }],
    chart: {
      type: 'area',
      height: '200',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '35%',
        endingShape: 'rounded'
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
    categories: ["6時台", "7時台", "8時台", "9時台", "10時台", "11時台", "12時台", "13時台", "14時台", "15時台", "16時台", "17時台", "18時台", "19時台", "20時台", "21時台", "22時台", "23時台", "24時台", "25時台"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: [
    {
      seriesName: '期間合計売上',
      show: false
    },
    {
      seriesName: '期間合計客数',
      opposite: true, 
      show: false
    }
    ],
    
    fill: {
      type:'solid',
      opacity: [1, 0.3],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-primary"),KTUtil.getCssVariableValue("--bs-gray-300")],
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
        right: 24,
        bottom: 0,
        left: 20
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#chart_revenue_timezone"), options);
  analysisChart.render();
})();

// Cashflow Daily Trend

(function() {
  var options = {
  series: [{
    name: '入金',
    data: [311055, 306971, 343370, 315119, 404624, 294296, 290919, 326401, 323391, 444769, 395764, 352670, 287021, 390511, 298282, 271054, 407694, 364140]
    }, {
    name: '出金',
    data: [-141910, -129867, -140629, -110472, -102808, -137124, -107424, -109702, -114382, -123842, -116413, -95993, -110620, -79024, -135997, -91451, -101405, -124536]
    }, {
    name: '残高',
    data: [1401714, 1578817, 1781558, 1986204, 2288021, 2445193, 2628687, 2845387, 3054396, 3375323, 3654674, 3911351, 4087752, 4399238, 4561522, 4741125, 5047414, 5287018]
  }],
  chart: {
    type: 'bar',
    height: '500',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    toolbar: {
    show: false
    }
  },
  stroke: {
    show: true,
    width: 2,
  },
  markers: {
    size: 5,
    hover: {
    size: 6
    }
  },
  plotOptions: {
    bar: {
    horizontal: false,
    borderRadius: [4],
    columnWidth: '60%',
    endingShape: 'rounded'
    },
  },
  legend: {
    position: 'top',
    fontSize: "11px",
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
      categories: ["12/01", "12/02", "12/03", "12/04", "12/05", "12/06", "12/07", "12/08", "12/09", "12/10", "12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18"],
    axisBorder: {
    show: false
    },
    axisTicks: {
    show: false
    },
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  yaxis: {
    labels: {
    show: true,
    rotate: 0,
    hideOverlappingLabels: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      colors: KTUtil.getCssVariableValue("--bs-gray-500"),
      fontSize: "11px"
    }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
    shadeIntensity: 1,
    inverseColors: false,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [100, 100, 100, 100]
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: [{
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }, {
    formatter: function(y) {
      return "¥" + y.toLocaleString();
    }
    }]
  },
  colors: [KTUtil.getCssVariableValue("--bs-primary"),KTUtil.getCssVariableValue("--bs-danger"),KTUtil.getCssVariableValue("--bs-gray-500")],
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
    left: 10
    }
  },
  };
  var analysisChart = new ApexCharts(document.querySelector("#cf_daily_trend"), options);
  analysisChart.render();
})();

// reserve-walkin ratio

(function() {
  var options = {
    series: [1221034, 2483293],
    chart: {
      height: 360,
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
        fontWeight: 700,
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
          return '¥' + val.toLocaleString(); // Adds ¥ symbol to the tooltip value
        }
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
          fontSize: '1rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          formatter: function (val) {
            return val
          }
        },
        value: {
          show: true,
          fontSize: '2rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          offsetY: 5,
          formatter: function (val) {
            return '¥' + Number(val).toLocaleString(); // Adds ¥ symbol and formats number with commas
          }
        },
        total: {　
            show: true,
            showAlways: false,
            label: '売上合計 (税抜)',
            fontSize: '0.8rem',
            fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            fontWeight: 600,
            color:  KTUtil.getCssVariableValue("--bs-gray-600"),
            formatter: function (w) {
                var total = w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                }, 0);
                return '¥' + total.toLocaleString(); // Adds ¥ symbol and formats number with commas
            }

        }
        }
      }
      }
    },
    labels: ['予約', 'ウォークイン'],
    colors: [KTUtil.getCssVariableValue("--bs-teal"), '#A3E635'],
    responsive: [{
      breakpoint: 576,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var analysisChart = new ApexCharts(document.querySelector("#reserve_walkin_ratio"), options);
  analysisChart.render();
})();

// fd sales ratio

(function() {
  var options = {
    series: [3953239, 2149492],
    chart: {
      height: 300,
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
        fontWeight: 700,
        colors: [KTUtil.getCssVariableValue("--bs-white")]
      }
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
      colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    plotOptions: {
      pie: {
      donut: {
        labels: {
        show: true,
        name: {
          show: true,
          fontSize: '1rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          formatter: function (val) {
          return val
          }
        },
        value: {
          show: true,
          fontSize: '1.8rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color: undefined,
          offsetY: 0,
          formatter: function(y) {
            return "¥" + y.toLocaleString();
          }
        },
        total: {
          show: true,
          showAlways: false,
          label: '売上合計 (税抜)',
          fontSize: '0.8rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color:  KTUtil.getCssVariableValue("--bs-gray-600"),
          formatter: function (w) {
            return "¥" + w.globals.seriesTotals.reduce((a, b) => {
              return a + b
            }, 0).toLocaleString();
          },
        }
        }
      }
      }
    },
    labels: ['フード', 'ドリンク'],
    colors: [KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-cyan")],
    responsive: [{
      breakpoint: 576,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var analysisChart = new ApexCharts(document.querySelector("#fd_sales_ratio"), options);
  analysisChart.render();
})();

// reserve method ratio

(function() {
  var options = {
    series: [360, 83, 5],
    chart: {
      height: 360,
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
        fontWeight: 700,
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
          fontSize: '1rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          formatter: function (val) {
          return val
          }
        },
        value: {
          show: true,
          fontSize: '2.4rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color: undefined,
          offsetY: 10,
        },
        }
      }
      }
    },
    labels: ['ウェブ', '電話', '店頭'],
    colors: [KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-purple"), KTUtil.getCssVariableValue("--bs-yellow")],
    responsive: [{
      breakpoint: 576,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var analysisChart = new ApexCharts(document.querySelector("#reserve_method_ratio"), options);
  analysisChart.render();
})();

// fd purchasing ratio

(function() {
  var options = {
    series: [1124423, 483934],
    chart: {
      height: 300,
      width: '100%',
      type: 'donut',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        fontWeight: 700,
        colors: [KTUtil.getCssVariableValue("--bs-white")]
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
      colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
          show: true,
          name: {
            show: true,
            fontSize: '1rem',
            fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            fontWeight: 700,
            formatter: function (val) {
             return val
            }
          },
          value: {
            show: true,
            fontSize: '1.8rem',
            fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            fontWeight: 600,
            color: undefined,
            offsetY: 0,
            formatter: function(y) {
              return "¥" + y.toLocaleString();
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: '仕入合計',
            fontSize: '0.8rem',
            fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            fontWeight: 600,
            color:  KTUtil.getCssVariableValue("--bs-gray-600"),
            formatter: function (w) {
              return "¥" + w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0).toLocaleString();
            },
          }
          }
        }
      }
    },
    labels: ['フード', 'ドリンク'],
    colors: [KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-cyan")],
    responsive: [{
      breakpoint: 576,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var analysisChart = new ApexCharts(document.querySelector("#fd_purchasing_ratio"), options);
  analysisChart.render();
})();

// fd source ratio

(function() {
  var options = {
    series: [352728, 668647, 314899, 272083],
    chart: {
      height: 290,
      width: '100%',
      type: 'donut',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
        fontWeight: 700,
        colors: [KTUtil.getCssVariableValue("--bs-white")]
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
      colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
          show: true,
          name: {
            show: true,
            fontSize: '1rem',
            fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            fontWeight: 700,
            formatter: function (val) {
             return val
            }
          },
          value: {
            show: true,
            fontSize: '1.8rem',
            fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            fontWeight: 600,
            color: undefined,
            offsetY: 0,
            formatter: function(y) {
              return "¥" + y.toLocaleString();
            }
          },
          total: {
            show: true,
            showAlways: false,
            label: '仕入合計',
            fontSize: '1rem',
            fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
            fontWeight: 600,
            color:  KTUtil.getCssVariableValue("--bs-gray-600"),
            formatter: function (w) {
              return "¥" + w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0).toLocaleString();
            },
          }
          }
        }
      }
    },
    labels: ['インフォマート', '納品書', '店舗間移動', '小口現金仕入'],
    colors: [KTUtil.getCssVariableValue("--bs-pink"),KTUtil.getCssVariableValue("--bs-orange"), KTUtil.getCssVariableValue("--bs-teal"), KTUtil.getCssVariableValue("--bs-indigo"), KTUtil.getCssVariableValue("--bs-yellow"), KTUtil.getCssVariableValue("--bs-cyan"), KTUtil.getCssVariableValue("--bs-red")],
    responsive: [{
      breakpoint: 576,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var analysisChart = new ApexCharts(document.querySelector("#fd_source_ratio"), options);
  analysisChart.render();
})();

// reserve channel ratio

(function() {
  var options = {
    series: [20, 120, 90, 76, 54],
    chart: {
      height: 360,
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
        fontWeight: 700,
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
          fontSize: '1rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          formatter: function (val) {
          return val
          }
        },
        value: {
          show: true,
          fontSize: '2.4rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color: undefined,
          offsetY: 10,
        },
        }
      }
      }
    },
    labels: ['食べログ', 'ぐるなび', 'レストラン一休', 'OpenTable', 'ホームページ'],
    colors: ['#F1911A','#E32F2F', '#AF9B65', '#d63384', KTUtil.getCssVariableValue("--bs-gray-600")],
    responsive: [{
      breakpoint: 576,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
  var analysisChart = new ApexCharts(document.querySelector("#reserve_channel_ratio"), options);
  analysisChart.render();
})();

// fd monthly trend

(function() {
  var options = {
    series: [{
      name: 'フード仕入率',
      data: [28.1, 27.6, 29.2, 30.1, 29.8, 28.6]
      }, {
      name: 'ドリンク仕入率',
      data: [18.3, 19.2, 20.4, 19.2, 21.3, 19.7]
    }],
    chart: {
      type: 'line',
      height: '240',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 2,
    },
    markers: {
      size: 5,
      hover: {
      size: 6
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2024/03", "2024/04", "2024/05", "2024/06", "2024/07", "2024/08"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [100, 100, 100, 100]
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "%";
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-orange"),KTUtil.getCssVariableValue("--bs-cyan")],
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
        right: 24,
        bottom: 0,
        left: 20
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#fd_monthly_trend"), options);
  analysisChart.render();
})();

// daily trend

(function() {
  var options = {
    series: [{
      name: 'ラベル1',
      data: [3340, 3420, 2330, 3040, 3420, 352]
      }, {
      name: 'ラベル2',
      data: [1520, 1420, 1490, 1930, 1200, 1730]
      }, {
      name: 'ラベル3',
      data: [2940, 3940, 2940, 3840, 2390, 4590]
    }],
    chart: {
      type: 'line',
      height: '300',     
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 2,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["2025年5月", "2025年6月", "2025年7月", "2025年8月", "2025年9月", "2025年10月"],     
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [100, 100, 100, 100]
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
        formatter: function(y) {
          return "¥" + y.toLocaleString();
        }
      }, {
      formatter: function(y) {
        return "¥" + y.toLocaleString();
      }
      }]
    },
    colors: ['#1BD1A1', '#A3E635', '#FBBF24', '#F87171', '#E879F9', '#A78BFA', '#60A5FA', '#22D3EE', '#94A3B8', '#A3A3A3', '#64748B'],
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
        right: 24,
        bottom: 0,
        left: 10
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#purchasing_unitcost_trend"), options);
  analysisChart.render();
})();

// customer reserve/walk-in trend

(function() {
  var options = {
    series: [{
      name: '予約',
      data: [183, 192, 204, 192, 213, 197]
      }, {
      name: 'ウォークイン',
      data: [281, 276, 292, 301, 298, 286]
    }],
    chart: {
      type: 'line',
      height: '330',
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 2,
    },
    markers: {
      size: 5,
      hover: {
      size: 6
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: [4],
        columnWidth: '80%',
        endingShape: 'rounded'
      },
    },
    legend: {
      position: 'top',
      fontSize: "11px",
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      labels: {
        colors: KTUtil.getCssVariableValue("--bs-gray-600"),
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["11/20", "11/21", "11/22", "11/23", "11/24", "11/25"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: true,
        style: {
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          colors: KTUtil.getCssVariableValue("--bs-gray-500"),
          fontSize: "11px"
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [100, 100, 100, 100]
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: [{
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }, {
        formatter: function(y) {
          return y.toLocaleString() + "人";
        }
      }]
    },
    colors: [KTUtil.getCssVariableValue("--bs-teal"), '#A3E635'],
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
        right: 24,
        bottom: 0,
        left: 24
      }
    },
  };
  var analysisChart = new ApexCharts(document.querySelector("#cnum_trend"), options);
  analysisChart.render();
})();

// revenue by payment method

var options = {
  series: [8743650, 4557629, 704130, 3482499, 51270, 40420, 22670, 20040, 13600, 7300, 1810],
  chart: {
    height: 350,
    width: '100%',
    type: 'donut',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      fontWeight: 700,
      colors: [KTUtil.getCssVariableValue("--bs-white")]
    }
  },
  tooltip: {
    enabled: false
  },  
  legend: {
    show: true,
    position: 'bottom',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
        show: true,
        name: {
          show: true,
          fontSize: '1rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 700,
          formatter: function (val) {
           return val
          }
        },
        value: {
          show: true,
          fontSize: '1.8rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color: undefined,
          offsetY: 0,
          formatter: function(y) {
            return "¥" + Number(y).toLocaleString();
          }
        },
        total: {
          show: true,
          showAlways: false,
          label: '合計売上',
          fontSize: '0.8rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color:  KTUtil.getCssVariableValue("--bs-gray-600"),
          formatter: function (w) {
            return "¥" + w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
          }
        }
        }
      }
    }
  },
  labels: ['クレジットカード', '現金', 'PayPay', '交通系IC', '旅割', 'auPay', 'iD', '一休', '出前館', 'ホットペッパー', '食べログ'],
  colors: ['#1BD1A1', '#A3E635', '#FBBF24', '#F87171', '#E879F9', '#A78BFA', '#60A5FA', '#22D3EE', '#94A3B8', '#A3A3A3', '#64748B'],
  responsive: [{
    breakpoint: 576,
    options: {
      legend: {
        position: 'bottom'
      }
    }
  }]
};
var analysisChart = new ApexCharts(document.querySelector("#chart_revenuebymethod"), options);
analysisChart.render();

// transaction by payment method


var options = {
  series: [1392, 439, 42, 31, 13, 11, 8, 7, 5, 3, 1],
  chart: {
    height: 350,
    width: '100%',
    type: 'donut',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
      fontWeight: 700,
      colors: [KTUtil.getCssVariableValue("--bs-white")]
    }
  },
  tooltip: {
    enabled: false
  },
  legend: {
    show: true,
    position: 'bottom',
    fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
    labels: {
    colors: KTUtil.getCssVariableValue("--bs-gray-600"),
    }
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
        show: true,
        name: {
          show: true,
          fontSize: '1rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 700,
          formatter: function (val) {
           return val
          }
        },
        value: {
          show: true,
          fontSize: '1.8rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color: undefined,
          offsetY: 0,
          formatter: function (val) {
            return Number(val).toLocaleString();
          }
        },
        total: {
          show: true,
          showAlways: false,
          label: '合計件数',
          fontSize: '0.8rem',
          fontFamily: 'Open Sans, Noto Sans Japanese, Sans-Serif',
          fontWeight: 600,
          color:  KTUtil.getCssVariableValue("--bs-gray-600"),
          formatter: function (w) {
            return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toLocaleString();
          }
        }
        }
      }
    }
  },
  labels: ['クレジットカード', '現金', 'PayPay', '交通系IC', '旅割', 'auPay', 'iD', '一休', '出前館', 'ホットペッパー', 'その他'],
  colors: ['#1BD1A1', '#A3E635', '#FBBF24', '#F87171', '#E879F9', '#A78BFA', '#60A5FA', '#22D3EE', '#94A3B8', '#A3A3A3', '#64748B'],
  responsive: [{
    breakpoint: 576,
    options: {
      legend: {
        position: 'bottom'
      }
    }
  }]
};
var analysisChart = new ApexCharts(document.querySelector("#chart_transactionbymethod"), options);
analysisChart.render();
