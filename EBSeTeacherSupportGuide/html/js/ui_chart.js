/* 차트 - 3037 */
function chartDataSet3037(chartLabel, chartData){
	// Color
	var chartColor = '#81aeee';

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: chartColor, 
			borderWidth: 0,
			data: chartData,
		}]
	}

	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		events: ['click'],
		padding: 10,
		scales: {
			yAxes: [{
				ticks: {beginAtZero: true}
			}]
		},
		title: {display:false},
		tooltips: {mode: 'index', intersect: true},
		legend: {display: false},
		scales: {
			yAxes: [{
				ticks: {min: 0, max: 100, stepSize: 20},
				scaleLabel: {display: true, labelString: '점수'}
			}],
			xAxes: [{
				gridLines: {display:false},
				scaleLabel: {display: true, labelString: '학습수준'},
				maxBarThickness: 13,
			}]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
};

/* 차트 - 5005_1 */
function chartDataSet5005_1(chartLabel, chartData, typeName){
	
	var chartColors = null;
	var chartDataset = null;
	var chartOption = null;
	
	if (typeName == '국어' || typeName == '수학' || typeName == null || typeName == undefined){

		// Colors
		chartColors = ['#ffb07c', '#c7e3ff', '#7dbefd'];

		// Dataset
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '나의변화',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '원점수',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			},{
				label: 'EBSi평균',
				backgroundColor: chartColors[2],
				borderWidth: 0,
				data: chartData[2],
			},]
		};

		// Options
		chartOption = {
			responsive: true,
			maintainAspectRatio: false,
			bezierCurve: false,
			elements: {
				line: {
					tension: 0
				}
			},
			title: {
				display: false,
			},
			tooltips: {
				mode: 'index',
				intersect: true
			},
			legend: {
				display: true,
				width: '20px',
			},
			scales: {
				yAxes: [{
					ticks: {
						min: 0, max: 100, stepSize: 25, beginAtZero: true,
						fontColor: '#bdbdbd', fontSize: '14',
					},
					scaleLabel: {display: false, labelString: '점수'},
					gridLines: {
						display: true,
						color: "#f0f0f0",
						zeroLineColor: "#f0f0f0",
					},
				}],
				xAxes: [{
					ticks: {
						fontSize: '14',
					},
					gridLines: {
						display: false,
						color: "#fff",
						zeroLineColor: "#fff",
					},
					minBarThickness: 28,
					// maxBarThickness: 28,
					barPercentage: 1,
					categoryPercentage: 0.5,
				}]
			}
		}	
	} else if (typeName == '탐구'){
		// Colors
		chartColors = ['#ffb07c', '#c7e3ff', '#7dbefd'];
		
		// Dataset
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '합',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '탐구1',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			},{
				label: '탐구2',
				backgroundColor: chartColors[2],
				borderWidth: 0,
				data: chartData[2],
			},]
		};
	
		// Options
		chartOption = {
			responsive: true,
			maintainAspectRatio: false,
			bezierCurve: false,
			elements: {
				line: {
					tension: 0
				}
			},
			title: {
				display: false,
			},
			tooltips: {
				mode: 'index',
				intersect: true
			},
			legend: {
				display: true,
				width: '20px',
			},
			scales: {
				yAxes: [{
					ticks: {
						min: 0, max:100, stepSize: 25, beginAtZero: true,
						fontColor: '#bdbdbd', fontSize: '14',
					},
					scaleLabel: {display: false, labelString: '점수'},
					gridLines: {
						color: "#f0f0f0",
						zeroLineColor: "#f0f0f0",
					},
					stacked: true
				}],
				xAxes: [{
					stacked: true,
					ticks: {
						fontSize: '14',
					},
					gridLines: {
						display: false,
						color: "#f0f0f0",
						zeroLineColor: "#f0f0f0",
					},
					// scaleLabel: {display: true, labelString: '학습수준'},
					// minBarThickness: 28,
					maxBarThickness: 28,
					// barPercentage: 1,
					// categoryPercentage: 0.4,
				}]
			}
		}
	} else if (typeName == '과목합'){
		// Colors
		chartColors = ['#7dbefd', '#ffc7e1', '#fd7dba'];
		
		// Dataset
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '나의변화',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '원점수',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			},{
				label: 'EBSi평균',
				backgroundColor: chartColors[2],
				borderWidth: 0,
				data: chartData[2],
			},]
		};
	
		// Options
		chartOption = {
			responsive: true,
			maintainAspectRatio: false,
			bezierCurve: false,
			elements: {
				line: {
					tension: 0
				}
			},
			title: {
				display: false,
			},
			tooltips: {
				mode: 'index',
				intersect: true
			},
			legend: {
				display: true,
				width: '20px',
			},
			scales: {
				yAxes: [{
					ticks: {
						min: 0, max: 300, stepSize: 100, beginAtZero: true,
						fontColor: '#bdbdbd', fontSize: '14',
					},
					scaleLabel: {display: false, labelString: '점수'},
					gridLines: {
						color: "#f0f0f0",
						zeroLineColor: "#f0f0f0",
					},
				}],
				xAxes: [{
					ticks: {
						fontSize: '14',
					},
					gridLines: {
						display: false,
						color: "#f0f0f0",
						zeroLineColor: "#f0f0f0",
					},
					minBarThickness: 28,
					// maxBarThickness: 28,
					barPercentage: 1,
					categoryPercentage: 0.4,
				}]
			}
		}
	}
	

	// ChartSet
	console.log(chartOption);
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 5005_2 */
function chartDataSet5005_2(chartLabel, chartData, typeName){
	// Color
	var chartDataset = null;
	var chartOption = null;
	var chartColors = null;
	var chartMax = null;
	var chartStep = null;
	var chartStacked = false;

	if (typeName == '국어' || typeName == '수학' || typeName == null || typeName == undefined){
		chartColors = ['#ffb07c', '#c7e3ff'];
		chartMax = 150;
		chartStep = 50;
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '나의변화',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '표준점수',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			}]
		}
	} else if (typeName == '탐구'){
		chartColors = ['#ffb07c', '#c7e3ff', '#7dbefd'];
		chartMax = 150;
		chartStep = 50;
		chartStacked = true;
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '합',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '탐구1',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			},{
				label: '탐구2',
				backgroundColor: chartColors[2],
				borderWidth: 0,
				data: chartData[2],
			}]
		}
	} else if (typeName == '과목합'){
		chartColors = ['#7dbefd', '#ffc7e1'];
		chartMax = 500;
		chartStep =100;
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '나의변화',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '표준점수',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			}]
		}
	}

	// Options
	chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		legend: {
			display: true,
			width: '20px',
		},
		scales: {
			yAxes: [{
				ticks: {
					min: 0, max: chartMax, stepSize: chartStep, beginAtZero: true,
					fontColor: '#bdbdbd', fontSize: '14',
				},
				scaleLabel: {display: false, labelString: '점수'},
				gridLines: {
					color: "#f0f0f0",
					zeroLineColor: "#f0f0f0",
				},
				stacked: chartStacked
			}],
			xAxes: [{
				stacked: chartStacked,
				ticks: {
					fontSize: '14',
				},
				gridLines: {
					display: false,
					color: "#f0f0f0",
					zeroLineColor: "transparent",
				},
				maxBarThickness: 28,
				categoryPercentage: 0.4,
			}]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
};

/* 차트 - 5005_3 */
function chartDataSet5005_3(chartLabel, chartData, typeName){
	// Color
	var chartColors = null;
	var chartMax = null;
	var chartStep = null;
	var chartDataset = null;
	var chartXScale = {
		ticks: {
			fontSize: '14',
		},
		gridLines: {
			display: false,
			color: "#f0f0f0",
			zeroLineColor: "transparent",
		},
		maxBarThickness: 28,
		categoryPercentage: 0.4,
	}

	if (typeName == '국어' || typeName == '수학' || typeName == null || typeName == undefined){
		chartColors = ['#ffb07c', '#c7e3ff'];
		chartMax = 100;
		chartStep = 25;
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '나의변화',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '백분위',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			}]
		}
	} else if (typeName == '탐구'){
		chartColors = ['#ffb07c', '#c7e3ff', '#7dbefd', '#577dd0'];
		chartMax = 100;
		chartStep = 25;
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '평균',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '탐구1',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			},{
				label: '탐구2',
				backgroundColor: chartColors[2],
				borderWidth: 0,
				data: chartData[2],
			},{
				label: '탐구평균',
				backgroundColor: chartColors[3],
				borderWidth: 0,
				data: chartData[3],
			}]
		}
		chartXScale = {
			ticks: {
				fontSize: '14',
			},
			gridLines: {
				display: false,
				color: "#f0f0f0",
				zeroLineColor: "transparent",
			},
			minBarThickness: 28,
			barPercentage: 1,
			categoryPercentage: 0.4,
		}
	} else if (typeName == '과목합'){
		chartColors = ['#7dbefd', '#ffc7e1'];
		chartMax = 500;
		chartStep = 100;
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '나의변화',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				label: '백분위',
				backgroundColor: chartColors[1],
				borderWidth: 0,
				data: chartData[1],
			}]
		}
	}

	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		legend: {
			display: true,
			width: '20px',
		},
		scales: {
			yAxes: [{
				ticks: {
					min: 0, max: chartMax, stepSize: chartStep, beginAtZero: true,
					fontColor: '#bdbdbd', fontSize: '14',
				},
				scaleLabel: {display: false, labelString: '점수'},
				gridLines: {
					color: "#f0f0f0",
					zeroLineColor: "#f0f0f0",
				},
			}],
			xAxes: [chartXScale]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;

};

/* 차트 - 5005_4 */
function chartDataSet5005_4(chartLabel, chartData, typeName){
	// Color
	var chartDataset = null;
	var chartColors = null;
	var chartMax = 10;
	var chartStep = 1;

	if (typeName == '국어' || typeName == '수학' || typeName == '영어' || typeName == '한국사' || typeName == null || typeName == undefined){
		chartColors = ['#7dbefd'];
		// Dataset
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '등급',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			}]
		}
	} else if (typeName == '탐구'){
		chartColors = ['#c7e3ff', '#7dbefd', '#577dd0'];
		// Dataset
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '탐구1',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				type: 'line',
				label: '탐구2',
				borderColor: chartColors[1],
				data: chartData[1],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			},{
				type: 'line',
				label: '평균',
				borderColor: chartColors[2],
				data: chartData[2],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			}]
		}
	} else if (typeName == '과목합'){
		chartColors = ['#7dbefd', '#ffc7e1'];
		// Dataset
		chartDataset = {
			labels: chartLabel,
			datasets: [{
				type: 'line',
				label: '등급컷',
				borderColor: chartColors[0],
				data: chartData[0],
				fill: false,
				pointRadius: 4,
				pointBackgroundColor: '#fff',
				borderWidth: 2,
				pointBorderWidth: 4,
			}]
		}
	}
	
	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		legend: {
			display: true,
			width: '20px',
		},
		scales: {
			yAxes: [{
				ticks: {
					min: 1, max: chartMax, stepSize: chartStep, beginAtZero: true, reverse: true, userCallback: function(value, index, values){
						value = value + '등급';
						return value;
					},
					fontColor: '#bdbdbd', fontSize: '14',
				},
				scaleLabel: {display: false, labelString: '점수'},
				gridLines: {
					color: "#f0f0f0",
					zeroLineColor: "#f0f0f0",
				},
				// stacked: true
			}],
			xAxes: [{
				stacked: true,
				ticks: {
					fontSize: '14',
				},
				gridLines: {
					display: false,
					color: "#f0f0f0",
					zeroLineColor: "transparent",
				},
				maxBarThickness: 28,
				categoryPercentage: 0.4,
			}]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
};

/* 차트 - 1010_1 */
function chartDataSet1010_1(chartLabel, chartData){
	// Color
	var chartColor_1 = '#75a6ea',
		tooltipColor = '#ff5b5b';

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: '일평균 학습시간',
			backgroundColor: chartColor_1, 
			borderWidth: 0,
			data: chartData,
		}]
	}

	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		// maintainAspectRatio: true,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			intersect: false,
			yAlign: 'middle',//2021-04-08 수정
			callbacks: {
				label: function(tooltipItem) {
					var t_minutes = tooltipItem.yLabel;
					if(t_minutes>60)	return Math.floor(t_minutes/60) + '시간' + Math.floor(t_minutes%60) + '분';
					else if(t_minutes>0) return Math.floor(t_minutes%60) + '분'; 
					else return '';
				},
			},
			backgroundColor: tooltipColor
		},
		legend: {
			display: true,
		},
		scales: {
			yAxes: [{
				ticks: {stepSize: 30, beginAtZero: true, userCallback: function(value, index, values){//2021-04-08 수정
						return value/60 + 'h';
					}, fontSize: 14
				},
				scaleLabel: {display: false},
				barPercentage: 0,
			}],
			xAxes: [{
				ticks: {fontSize: 14},
				gridLines: {display:false},
				// maxBarThickness: 13,
				barPercentage: 1,
				categoryPercentage: 0.5,
			}]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
};

/* 차트 - 1010_2 */
function chartDataSet1010_2(chartLabel, chartData){
	// Color
	var chartColor_1 = '#75a6ea',
		chartColor_2 = '#173c71',
		tooltipColor = '#ff5b5b';

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: '일평균 학습시간',
			backgroundColor: chartColor_1, 
			borderWidth: 0,
			data: chartData[0],
		},{
			label: '나의 학습시간   ',
			backgroundColor: chartColor_2, 
			borderWidth: 0,
			data: chartData[1],
		}]
	}
	
	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		// maintainAspectRatio: true,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			intersect: false,
			yAlign: 'middle',
			callbacks: {
				label: function(tooltipItem) {
					var t_minutes = tooltipItem.yLabel;
					if(t_minutes>60)	return Math.floor(t_minutes/60) + '시간' + Math.floor(t_minutes%60) + '분';
					else if(t_minutes>0) return Math.floor(t_minutes%60) + '분'; 
					else return '';
				},
			},
			backgroundColor: tooltipColor
		},
		legend: {
			display: true,
		},
		scales: {
			yAxes: [{
				ticks: {stepSize: 30, beginAtZero: true, userCallback: function(value, index, values){
						return value/60 + 'h';
					}, fontSize: 14
				},
				scaleLabel: {display: false},
				barPercentage: 0,
			}],
			xAxes: [{
				ticks: {fontSize: 14},
				gridLines: {display:false},
				// maxBarThickness: 13,
				barPercentage: 1,
				categoryPercentage: 0.5,
			}]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
};

/* 차트 - 1901_1 */
function chartDataSet1901_1(chartLabel, chartData){
	// Color
	var chartColor_1 = '#ff9999',
		chartColor_2 = '#916161',
		tooltipColor = '#ff5b5b';

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: '나의 학습시간',
			backgroundColor: chartColor_1, 
			borderWidth: 0,
			data: chartData[0],
		},{
			label: '고1 평균 학습시간',
			backgroundColor: chartColor_2, 
			borderWidth: 0,
			data: chartData[1],
		}]
	}
	
	// height
	Chart.Legend.prototype.afterFit = function() {
		this.height = this.height + 20;
	};
	
	// Options
	var chartOption = {
		// responsive: true,
		maintainAspectRatio: false,
		//maintainAspectRatio: true,
		bezierCurve: false,
		elements: {
			line: {
				tension: 1000
			}
		},
		title: {
			display: false,
		},
		
		tooltips: {
			intersect: false,
			yAlign: 'bottom',
			callbacks: {
				label: function(tooltipItem) {
					var yLabelStr = 'EQ'+(tooltipItem.yLabel);
					return yLabelStr;
				},
			},
			backgroundColor: tooltipColor
		},
		legend: {
			display: true,
		},
		layout: {
            padding: {
                top:22
            }
        },
		/* 2021-04-14 수정 */
		scales: {
			yAxes: [{
				ticks: {max: 4, min: 1, stepSize: 1, fontSize:12, beginAtZero: true, userCallback: function(value, index, values){
                    if (value == 1) {
                        value = ['0이상', '~60미만'];
                    } else if (value == 2) {
                        value = ['60이상', '~160미만'];
                    } else if (value == 3) {
                        value = ['160이상', '~350미만'];
                    } else if (value == 4) {
                        value = ['350이상', '~700이하'];
                    }
					return value;
				}},
				scaleLabel: {display: false},
				gridLines: {color:"#e8e8e8", zeroLineColor: "#f0f0f0"},
				barPercentage: 0,
			}],
			xAxes: [{
				ticks: {max: 10, min: 0, stepSize: 2, fontSize : 14},
				gridLines: {display:false},
				// maxBarThickness: 13,
				barPercentage: 1,
				categoryPercentage: 0.5,
			}]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'bar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
};

/* 차트 - 1901_2 */
function chartDataSet1901_2(chartLabel, chartData){
	// Color
	var chartColor_1 = '#ff9999',
		chartColor_2 = '#916161',
		tooltipColor = '#ff5b5b';

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: '나의 학습레벨',
			fill: false,
			pointRadius: 3,
			pointBackgroundColor: chartColor_1,
			borderWidth: 1,
			borderColor: chartColor_1, 
			data: chartData[0],
		},{
			label: '고1 평균 학습레벨',
			borderColor: chartColor_2, 
			fill: false,
			pointRadius: 3,
			pointBackgroundColor: chartColor_2,
			borderWidth: 1,
			borderColor: chartColor_2,
			data: chartData[1],
		}]
	}

	// height
	Chart.Legend.prototype.afterFit = function() {
		this.height = this.height + 20;
	};

	// Options
	var chartOption = {
		// responsive: true,
		maintainAspectRatio: false,
		//maintainAspectRatio: true,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			// mode: 'index',
			intersect: false,
			yAlign: 'bottom',
			callbacks: {
				label: function(tooltipItem) {
					return tooltipItem.yLabel + '레벨';
				},
			},
			backgroundColor: tooltipColor
		},
		legend: {
			display: true,
		},
		layout: {
            padding: {
                top:22
            }
        },
        /* 2021-04-14 수정 */
		scales: {
			yAxes: [{
				ticks: {max:4, min:1, stepSize: 1, beginAtZero: true,  reverse: false, userCallback: function(value, index, values){
                    if (value == 1) {
                        value = ['Lv.1', '~Lv.5'];
                    } else if (value == 2) {
                        value = ['Lv.6', '~Lv.10'];
                    } else if (value == 3) {
                        value = ['Lv.11', '~Lv.15'];
                    } else if (value == 4) {
                        value = ['Lv.16', '~Lv.20'];
                    }
					return value;
				}},
				scaleLabel: {display: false},
				gridLines: {color:"#e8e8e8", zeroLineColor: "#f0f0f0"},
				barPercentage: 0,
			}],
			xAxes: [{
				ticks: {fontSize : 12},
				gridLines: {display:false, zeroLineColor: "#fff"},
				// maxBarThickness: 13,
				barPercentage: 1,
				categoryPercentage: 0.5,
			}]
		}
	}

	// ChartSet
	var chartSet = {
		type: 'line',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
};

/* 차트 - 0507_1 */
function chartDataSet0507_1(chartLabel, chartData){
	// Color
	var chartColor = ['#f39800', '#a9cf52', '#062e67', '#ff5b5b', '#577dd0'];
	var fontColor = '#fff';
	
	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			// label: '',
			backgroundColor: chartColor,
			data: chartData,
        }],
	};

	// Options
	var chartOption = {
        responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: true,
			position: 'right'
		},
        title: true,
        animation: {
            animateScale: true,
            animateRotate: true
		},
		plugins: {
			labels: {
				render: 'value',
				// render: function (args) {
				// 	return args.label + ' ' + args.value;
				// },
				fontSize: 12,
				fontStyle: '400',
				fontColor: fontColor,
				// position: 'outside'
			},
		}
	}

	// ChartSet
	var chartSet = {
		type: 'doughnut',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_2 */
function chartDataSet0507_2(chartLabel, chartData){
	// Color
	var chartColor = ['#f39800', '#a9cf52', '#062e67'];
	var fontColor = '#fff';
	
	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			// label: '',
			backgroundColor: chartColor,
			data: chartData,
        }],
	};

	// Options
	var chartOption = {
        responsive: true,
		legend: {
			display: true,
			position: 'right'
		},
        title: true,
        animation: {
            animateScale: true,
            animateRotate: true
		},
		plugins: {
			labels: {
				render: 'value',
				// render: function (args) {
				// 	return args.label + ' ' + args.value;
				// },
				fontSize: 12,
				fontStyle: '400',
				fontColor: fontColor,
				// position: 'outside'
			},
		}
	}

	// ChartSet
	var chartSet = {
		type: 'doughnut',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_3 */
function chartDataSet0507_3(chartLabel, chartData){
	// Color
	var chartColor = ['#f39800', '#a9cf52', '#062e67'];
	var fontColor = '#fff';
	
	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			// label: '',
			backgroundColor: chartColor,
			data: chartData,
        }],
	};

	// Options
	var chartOption = {
        responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: true,
			position: 'right'
		},
        title: true,
        animation: {
            animateScale: true,
            animateRotate: true
		},
		plugins: {
			labels: {
				render: 'value',
				// render: function (args) {
				// 	return args.label + ' ' + args.value;
				// },
				fontSize: 12,
				fontStyle: '400',
				fontColor: fontColor,
				// position: 'outside'
			},
		}
	}

	// ChartSet
	var chartSet = {
		type: 'doughnut',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_4 */
function chartDataSet0507_4(chartLabel, chartData){
	// Color
	var chartColor = ['#f39800', '#a9cf52', '#062e67', '#ff5b5b', '#577dd0'];
	var fontColor = '#fff';
	
	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			// label: '',
			backgroundColor: chartColor,
			data: chartData,
        }],
	};

	// Options
	var chartOption = {
        responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: true,
			position: 'right'
		},
        title: true,
        animation: {
            animateScale: true,
            animateRotate: true
		},
		plugins: {
			labels: {
				render: 'value',
				// render: function (args) {
				// 	return args.label + ' ' + args.value;
				// },
				fontSize: 12,
				fontStyle: '400',
				fontColor: fontColor,
				// position: 'outside'
			},
		}
	}

	// ChartSet
	var chartSet = {
		type: 'doughnut',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_5 */
function chartDataSet0507_5(chartLabel, chartData){
	// Color
	var chartColor = ['#f39800', '#a9cf52', '#062e67', '#ff5b5b', '#577dd0'];
	var fontColor = '#fff';
	
	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			// label: '',
			backgroundColor: chartColor,
			data: chartData,
        }],
	};

	// Options
	var chartOption = {
        responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: true,
			position: 'right'
		},
        title: true,
        animation: {
            animateScale: true,
            animateRotate: true
		},
		plugins: {
			labels: {
				render: 'value',
				// render: function (args) {
				// 	return args.label + ' ' + args.value;
				// },
				fontSize: 12,
				fontStyle: '400',
				fontColor: fontColor,
				// position: 'outside'
			},
		}
	}

	// ChartSet
	var chartSet = {
		type: 'doughnut',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_6 */
function chartDataSet0507_6(chartLabel, chartData){
	// Color
	var chartColor = ['#f2d48d', '#c2d594', '#f8a9a0', '#ada7d0', '#cda4ce', '#85b5dc', '#aaccda', '#aadad5'];

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: chartLabel,
			backgroundColor: chartColor,
			borderWidth: 0,
			data: chartData,
		}],
	};

	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		legend: {
			display: false,
		},
		scales: {
			xAxes: [{
				ticks: {min: 0, max:100, stepSize: 10, beginAtZero: true},
			}],
			yAxes: [{
				gridLines: {display:false},
				maxBarThickness: 26,
			}]
		},
	}

	// ChartSet
	var chartSet = {
		type: 'horizontalBar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_7 */
function chartDataSet0507_7(chartLabel, chartData){
	// Color
	var chartColor = ['#f2d48d', '#c2d594', '#f8a9a0', '#ada7d0', '#cda4ce', '#85b5dc', '#aaccda', '#aadad5'];

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: chartLabel,
			backgroundColor: chartColor,
			borderWidth: 0,
			data: chartData,
		}],
	};

	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		legend: {
			display: false,
		},
		scales: {
			xAxes: [{
				ticks: {min: 0, max:100, stepSize: 10, beginAtZero: true},
			}],
			yAxes: [{
				gridLines: {display:false},
				maxBarThickness: 26,
			}]
		},
	}

	// ChartSet
	var chartSet = {
		type: 'horizontalBar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_8 */
function chartDataSet0507_8(chartLabel, chartData){
	// Color
	var chartColor = ['#f2d48d', '#c2d594', '#f8a9a0', '#ada7d0', '#cda4ce', '#85b5dc', '#aaccda', '#aadad5'];

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: chartLabel,
			backgroundColor: chartColor,
			borderWidth: 0,
			data: chartData,
		}],
	};

	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		legend: {
			display: false,
		},
		scales: {
			xAxes: [{
				ticks: {min: 0, max:100, stepSize: 10, beginAtZero: true},
			}],
			yAxes: [{
				gridLines: {display:false},
				maxBarThickness: 26,
			}]
		},
	}

	// ChartSet
	var chartSet = {
		type: 'horizontalBar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_9 */
function chartDataSet0507_9(chartLabel, chartData){
	// Color
	var chartColor = ['#f2d48d', '#c2d594', '#f8a9a0', '#ada7d0', '#cda4ce', '#85b5dc', '#aaccda', '#aadad5'];

	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			label: chartLabel,
			backgroundColor: chartColor,
			borderWidth: 0,
			data: chartData,
		}],
	};

	// Options
	var chartOption = {
		responsive: true,
		maintainAspectRatio: false,
		bezierCurve: false,
		elements: {
			line: {
				tension: 0
			}
		},
		title: {
			display: false,
		},
		tooltips: {
			mode: 'index',
			intersect: true
		},
		legend: {
			display: false,
		},
		scales: {
			xAxes: [{
				ticks: {min: 0, max:100, stepSize: 10, beginAtZero: true},
			}],
			yAxes: [{
				gridLines: {display:false},
				maxBarThickness: 26,
			}]
		},
	}

	// ChartSet
	var chartSet = {
		type: 'horizontalBar',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}

/* 차트 - 0507_10 */
function chartDataSet0507_10(chartLabel, chartData){
	// Color
	var chartColor = ['#f39800', '#a9cf52', '#062e67', '#ff5b5b', '#577dd0'];
	var fontColor = '#fff';
	
	// Dataset
	var chartDataset = {
		labels: chartLabel,
		datasets: [{
			// label: '',
			backgroundColor: chartColor,
			data: chartData,
        }],
	};

	// Options
	var chartOption = {
        responsive: true,
		maintainAspectRatio: false,
        legend: {
			display: true,
			position: 'right'
		},
        title: true,
        animation: {
            animateScale: true,
            animateRotate: true
		},
		plugins: {
			labels: {
				render: 'value',
				// render: function (args) {
				// 	return args.label + ' ' + args.value;
				// },
				fontSize: 12,
				fontStyle: '400',
				fontColor: fontColor,
				// position: 'outside'
			},
		}
	}

	// ChartSet
	var chartSet = {
		type: 'doughnut',
		data: chartDataset,
		options: chartOption,
	}
	return chartSet;
}
