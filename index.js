
    const ctx = document.getElementById('myChart');

        const chartSaleData = {
            labels: ['Mar 19 - Feb 20', 'Mar 19 - Feb 21', 'Mar 19 - Feb 22', 'Mar 19 - Feb 23', 'Mar 19 - Feb 24'],
            datasets: [{
                label: 'Median Sale Price',
                data: [403750, 410000, 371500, 390000, 380000],
                backgroundColor: '#19271F',
                borderColor: '#19271F',
                borderWidth: 1,
                barThickness: 73
            }]
        };
        const chartSaleOptions = {
            scales: {
                y: {
                    min:240000,
                    max:420000,
                    ticks: {
                        stepSize: 20000,
                        callback: function(value, index, values) {
                            return value.toLocaleString();
                        },
                    },
                    grid: {
                    display: true, 
                    drawBorder: false 
                }
                },
                x: {
                    grid: {
                        display: false, 
                        drawBorder: false 
                    }
                }
            },
            plugins: {
                tooltip: {
                    enabled: true
                },
                legend: {
                    display: false
                },
                datalabels: {
                    anchor: 'end',
                    align: 'bottom',
                    color: 'white',
                    formatter: function(value, context) {
                        return '$' + value.toLocaleString();
                    }
                }
            },
    
        options: {
            scales: {
                y: {
                    min:240000,
                    max:420000,
                    ticks: {
                        stepSize: 20000,
                        callback: function(value, index, values) {
                            return value.toLocaleString();
                        },
                    },
                    grid: {
                    display: true, 
                    drawBorder: false 
                }
                },
                x: {
                grid: {
                    display: false, 
                    drawBorder: false 
                }
            }
            }
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            },
            datalabels: {
                anchor: 'end',
                align: 'bottom',
                color: 'white',
                formatter: function(value, context) {
                    return '$' + value.toLocaleString();
                }
            }
        },
    }
        const ctxSale = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctxSale, {
        type: 'bar',
        data: chartSaleData,
        options: chartSaleOptions,
        plugins: [ChartDataLabels]
    });
    // Rental chart
    const chartRentalData = {
        labels: ['Mar 19 - Feb 20', 'Mar 20 - Feb 21', 'Mar 21  -Feb 22', 'Mar 22 -Feb 23', 'Mar 23 -Feb 24',],
        datasets: [{
            label: 'Median Rental Price',
            data: [450, 351, 500, 330, 435],
            backgroundColor: '#19271F',
            borderColor: '#19271F',
            borderWidth: 1,
            barThickness: 73
        }]
    };

    const chartRentalOptions = {
        scales: {
            y: {
                min:100,
                max:550,
                ticks: {
                    stepSize: 50,
                    callback: function(value, index, values) {
                        return value.toLocaleString();
                    },
                    // color: 'tarnsparent'
                },
                grid: {
                    display: true, 
                    drawBorder: false 
                }
            },
            x: {
                grid: {
                    display: false, 
                    drawBorder: false 
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            },
            datalabels: {
                anchor: 'end',
                align: 'bottom',
                color: 'white',
                formatter: function(value, context) {
                    return '$' + value.toLocaleString();
                }
            }
        }
    };

    const ctxRental = document.getElementById('medianRentalPriceChart').getContext('2d');
    const medianRentalPriceChart = new Chart(ctxRental, {
        type: 'bar',
        data: chartRentalData,
        options: chartRentalOptions,
        plugins: [ChartDataLabels]
    });

    // Supply chart
    const referenceDataValue = 300;
    const chartSupplyData = {
        labels: ['Apr 23', 'May 23 ',' Jun 23', 'July 23 ', 'Aug 23', 'Sep 23' ,'Oct 23', 'Nov 23' ,'Dec 24', 'Jan 23', 'Feb 23'],
        datasets: [{
            label: 'Median Supply Price',
            data: [100,450, 351, 200, 330, 435,450, 351, 200, 330, 435],
            backgroundColor: '#19271F',
            borderColor: '#19271F',
            borderWidth: 1,
            barThickness: 40
        }]
    };

    const chartSupplyOptions = {
        scales: {
            y: {
                min:0,
                max:500,
                ticks: {
                    stepSize: 100,
                    callback: function(value, index, values) {
                        return value.toLocaleString();
                    },
                    // color: 'tarnsparent'
                },
                grid: {
                    display: true, 
                    drawBorder: false 
                }
            },
            x: {
                grid: {
                    display: false, 
                    drawBorder: false 
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                color:'red',
                formatter: function(value, context) {
                    let diff = (value - referenceDataValue) / referenceDataValue * 100;
                    diff = parseFloat(diff.toFixed(2));
                    const prefix = diff >= 0 ? "+" : "";
                    // const color = diff >= 0 ? '#DD5855' :'#3FBE12' ;
                    // context.dataset.datalabels. = color;
                    return prefix + diff + '%';
                    // return prefix + diff + '%'
                },
                color: function(context) {
                    const diff = (context.dataset.data[context.dataIndex] - 300) / 300 * 100;
                    return diff >= 0 ? '#3FBE12' : '#DD5855';
                },
            }
        }
    };

    const ctxSupply = document.getElementById('supply').getContext('2d');
    const medianSupplyPriceChart = new Chart(ctxSupply, {
        type: 'bar',
        data: chartSupplyData,
        options: chartSupplyOptions,
        plugins: [ChartDataLabels]
    });

    // Dimond Chart
    const chartDemandData = {
        labels: ['Apr 23', 'May 23 ',' Jun 23', 'July 23 ', 'Aug 23', 'Sep 23' ,'Oct 23', 'Nov 23' ,'Dec 24', 'Jan 23', 'Feb 23'],
        datasets: [{
            label: 'Median Demand Price',
            data: [1000,4500, 3510, 2000, 3300, 4350,4500, 3510, 2000, 3300, 4350],
            backgroundColor: '#19271F',
            borderColor: '#19271F',
            borderWidth: 1,
            barThickness: 40
        }]
    };
    const referenceValue = 3000;
    const chartDemandOptions = {
        scales: {
            y: {
                min:0,
                max:6000,
                ticks: {
                    stepSize: 1000,
                    callback: function(value, index, values) {
                        return value.toLocaleString();
                    },
                    // color: 'tarnsparent'
                },
                grid: {
                    display: true, 
                    drawBorder: false 
                }
            },
            x: {
                grid: {
                    display: false, 
                    drawBorder: false 
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                color:'red',
                formatter: function(value, context) {
                    let diff = (value - referenceValue) / referenceValue * 100;
                    diff = parseFloat(diff.toFixed(2));
                    const prefix = diff >= 0 ? "+" : "";
                    // const color = diff >= 0 ? '#3FBE12' : 'red';
                    // console.log("Color: ", color); 
                    // context.dataset.datalabels. = color;
                    return prefix + diff + '%' ;                    
                    // return prefix + diff + '%'
                    
                },
                color: function(context) {
                    const diff = (context.dataset.data[context.dataIndex] - 3000) / 3000 * 100;
                    return diff >= 0 ? '#3FBE12' : '#DD5855';
                },
                
            }
        }
    };

    const ctxDemand = document.getElementById('Demand').getContext('2d');
    const medianDemandPriceChart = new Chart(ctxDemand, {
        type: 'bar',
        data: chartDemandData,
        options: chartDemandOptions,
        plugins: [ChartDataLabels]
    });


    // doughnut chrt

    const scrnWidth = window.innerWidth;

    Highcharts.chart('doughnutcontainer', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '81%',
        marginLeft: 50,
        marginRight: 50,
        marginBottom: scrnWidth > 1050 ? 0 : 50
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ['50%', '75%'],
        size: '115%',
    },

    // the value axis
    yAxis: {
        min: 5,
        max: 7.5,
        tickInterval: 0.5,
        tickPixelInterval: scrnWidth > 1330 ? 250 : scrnWidth > 1155 ? 200 : scrnWidth > 945 ? 150 : 100,
        tickPosition: 'outside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 1,
        minorTickInterval: null,
        labels: {
            distance: scrnWidth > 1330 ? 30 : 25,
            style: {
                fontSize: scrnWidth > 1330 ? '25px' : scrnWidth > 1155 ? '20px' : '15px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 5.0,
            to: 6.0,
            color: '#C4D56D', // green
            thickness: 65
        }, {
            from: 6.0,
            to: 6.5,
            color: '#F3EE60', // yellow
            thickness: 65
        }, {
            from: 6.5,
            to: 7.5,
            color: '#DD5855', // red
            thickness: 65
        }]
    },

    series: [{
        name: 'Speed',
        data: [6.91],
        tooltip: {
            valueSuffix: ''
        },
        dataLabels: {
            format: '{y}',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '43px',
                fontFamily: 'Sculpin'
            },
            verticalAlign: 'bottom',
            y: 120,
            x: -12
        },
        dial: {
            radius: '80%',
            backgroundColor: 'black',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'black',
            radius: 25
        }

    }]

});
   
//    second doughnut



    const screenWidth = window.innerWidth

    Highcharts.chart('doughnutChart', {
  
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false,
          height: '81%',
          marginBottom: 100,
          // width: '60%'
      },
  
      title: {
          text: ''
      },
  
      pane: {
          startAngle: -90,
          endAngle: 90,
          background: null,
          center: ['50%', '75%'],
          size: '115%',
      },
  
      // the value axis
      yAxis: {
          min: 830000,
          max: 850000,
          tickInterval: 5000,
          tickPixelInterval: screenWidth > 1330 ? 250 : screenWidth > 1155 ? 200 : screenWidth > 945 ? 150 : 100,
          tickPosition: 'outside',
          tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
          tickLength: 20,
          tickWidth: 1,
          minorTickInterval: null,
        //   labels: {
        //       distance: screenWidth > 1330 ? 30 : 25,
        //       style: {
        //           fontSize: screenWidth > 1330 ? '25px' : screenWidth > 1155 ? '20px' : '15px'
        //       }
        labels: {
            distance: 20,
            rotation: 'auto',
            formatter: function() {
                return this.value.toLocaleString();
            },
            style: {
                fontSize: '25px'
            }
        // },
          },
          lineWidth: 0,
          plotBands: [{
            from: 830000,
            to: 850000,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                    [0.0398, '#F0D251'], // 3.98%
                    [0.4953, '#91CF4B'], // 49.53%
                    [0.9716, '#E97634']  // 97.16%
                ]
            },
            thickness: 65
        }]
      },
  
      series: [{
          name: 'Speed',
          data: [840000],
          tooltip: {
              valueSuffix: ''
          },
          dataLabels: {
              format: '{y}',
              borderWidth: 0,
              color: (
                  Highcharts.defaultOptions.title &&
                  Highcharts.defaultOptions.title.style &&
                  Highcharts.defaultOptions.title.style.color
              ) || '#333333',
              style: {
                  fontSize: '43px',
                  fontFamily: 'Sculpin',
              },
              verticalAlign: 'bottom',
              y: 120,
              x: -12
          },
          dial: {
              radius: '80%',
              backgroundColor: 'black',
              baseWidth: 12,
              baseLength: '0%',
              rearLength: '0%'
          },
          pivot: {
              backgroundColor: 'black',
              radius: 25
          }
  
      }]
  
  });