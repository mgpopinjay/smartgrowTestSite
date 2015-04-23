// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(function () {
    $('#container').highcharts({
      chart: {
      type: 'spline',
      backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
             [0, '#1f4e40'],
             [1, '#143d32']
          ]
       },
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
          load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = Math.random();
                  series.addPoint([x, y], true, true);
              }, 5000);
          }
      }
  },
  title: {
      text: ''
  },
  xAxis: {
      type: 'datetime',
      gridLineWidth: 1,
      lineWidth: 0,
      gridLineColor: '#7c918c',
      tickPixelInterval: 50,
      labels: {
        style: {
          color: '#9daeaa',
          fontSize: '11px'
        }
      },
      dateTimeLabelFormats: {
          second: '%H:%M',
          minute: '%H:%M',
          hour: '%H:%M',
          day: '%H:%M',
          week: '%H:%M',
          month: '%H:%M',
          year: '%H:%M'
      }
  },
  yAxis: {
      title: {
          text: null
      },
      labels: {
        align: 'left',
        x: 0,
        y: 5,
        style: {
          fontSize: '8px'
        }
      },
      gridLineWidth: 0,
      plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
      }]
  },
  legend: {
      enabled: false
  },
  credits: {
    enabled: false
  },
  tooltip: {
      enabled: false
  },
  exporting: {
      enabled: false
  },
  plotOptions: {
      line: {
          fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
              stops: [
                [0, 'transparent'],
                [1, 'transparent']
              ]
          },
          marker: {
              radius: 0
          },
          lineWidth: 2,
          states: {
              hover: {
                  lineWidth: 2
              }
          },
          threshold: null
      }
  },
  series: [{
    type: 'line',
      name: 'Temperature',
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
            [0, 'red'],
            [0.25, 'yellow'],
            [0.50, 'green'],
            [0.75, 'yellow'],
            [1, 'red']
        ]
      },
      data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -19; i <= 0; i += 1) {
              data.push({
                  x: time + i * 5000,
                  y: Math.random()
              });
          }
          return data;
      }())
  }]
    });
});

$(function () {
    $('#container2').highcharts({
      chart: {
          type: 'spline',
          backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                 [0, '#1f4e40'],
                 [1, '#143d32']
              ]
           },
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 10,
          events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.random();
                      series.addPoint([x, y], true, true);
                  }, 5000);
              }
          }
      },
      title: {
          text: ''
      },
      xAxis: {
          type: 'datetime',
          gridLineWidth: 1,
          lineWidth: 0,
          gridLineColor: '#7c918c',
          tickPixelInterval: 50,
          labels: {
            style: {
              color: '#9daeaa',
              fontSize: '11px'
            }
          },
          dateTimeLabelFormats: {
              second: '%H:%M',
              minute: '%H:%M',
              hour: '%H:%M',
              day: '%H:%M',
              week: '%H:%M',
              month: '%H:%M',
              year: '%H:%M'
          }
      },
      yAxis: {
          title: {
              text: null
          },
          labels: {
              enabled: false
          },
          gridLineWidth: 0,
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      legend: {
          enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      plotOptions: {
          line: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                    [0, 'transparent'],
                    [1, 'transparent']
                  ]
              },
              marker: {
                  radius: 0
              },
              lineWidth: 2,
              states: {
                  hover: {
                      lineWidth: 2
                  }
              },
              threshold: null
          }
      },
      series: [{
        type: 'line',
          name: 'Temperature',
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
                [0, 'red'],
                [0.25, 'yellow'],
                [0.50, 'green'],
                [0.75, 'yellow'],
                [1, 'red']
            ]
          },
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 5000,
                      y: Math.random()
                  });
              }
              return data;
          }())
      }]
    });
});

$(function () {
    $('#container3').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});

$(function () {
    $('#container4').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});


$(function () {
    $('#container5').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});

$(function () {
    $('#container6').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});


$(function () {
    $('#container7').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});


$(function () {
    $('#container8').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});


$(function () {
    $('#container9').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});

$(function () {
    $('#container10').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});


$(function () {
    $('#container11').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});


$(function () {
    $('#container12').highcharts({
      chart: {
        type: 'spline',
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
               [0, '#1f4e40'],
               [1, '#143d32']
            ]
         },
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 5000);
            }
        }
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        gridLineWidth: 1,
        lineWidth: 0,
        gridLineColor: '#7c918c',
        tickPixelInterval: 50,
        labels: {
          style: {
            color: '#9daeaa',
            fontSize: '11px'
          }
        },
        dateTimeLabelFormats: {
            second: '%H:%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%H:%M',
            week: '%H:%M',
            month: '%H:%M',
            year: '%H:%M'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        line: {
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                  [0, 'transparent'],
                  [1, 'transparent']
                ]
            },
            marker: {
                radius: 0
            },
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            threshold: null
        }
    },
    series: [{
      type: 'line',
        name: 'Temperature',
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, 'red'],
              [0.25, 'yellow'],
              [0.50, 'green'],
              [0.75, 'yellow'],
              [1, 'red']
          ]
        },
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 5000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
    });
});



//Sidr swipe menu
$(document).ready(function() {
    $('#left-menu').sidr({
      name: 'sidr-left',
      side: 'left' // By default
    });
    $('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right'
    });
});


// Place any jQuery/helper plugins in here.
