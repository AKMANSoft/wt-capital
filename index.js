
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
                color: 'red',
                // formatter: function(value, context) {
                //     return value.toLocaleString() + '%';
                // }
                formatter: function(value, context) {
                    return "+"+parseInt((value.toLocaleString()/1000)*100) +'%';
                }
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
            data: [100,450, 351, 200, 330, 435,450, 351, 200, 330, 435],
            backgroundColor: '#19271F',
            borderColor: '#19271F',
            borderWidth: 1,
            barThickness: 40
        }]
    };

    const chartDemandOptions = {
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
                color: 'red',
                // formatter: function(value, context) {
                //     return value.toLocaleString() + '%';
                // }
                formatter: function(value, context) {
                    return "+"+parseInt((value.toLocaleString()/1000)*100) +'%';
                }
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


    const data = {
        // labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'My First Dataset',
          data: [200, 100, 200],
          backgroundColor: [
            '#C4D56D',
            '#F3EE60',
            '#DD5855'
          ],
          cutout:'75%',
          circumference:180,
          rotation:-90,
            hoverOffset: 0,
            
        }],
        options: {
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                  top: 0,
                  bottom: 30,
                },
              },
            datalabels: {
                anchor: 'end',
                align: 'bottom',
                color: 'black',
                formatter: function(value, context) {
                    return value.toLocaleString() + '%';
                }
                // formatter: function(value, context) {
                //     return parseInt((value.toLocaleString()/1000)*100);
                // }
            },
            
        }
    }
      };
        
      const ctxDoughnut = document.getElementById('Doughnut').getContext('2d');
    const doughnutChart = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: data,
    })