$(document).ready(function() {
  $.getJSON( "json/plants-1.json", function( data ) {
    var items = [];
    /*Water module*/
    var phLevel = [];
    var oxygenLevel = [];
    var amoniaLevel = [];
    /*End of Water Module*/

    /*Temperature module*/
    var weatherTemp = [];
    var weatherHumidity = []
    /*End of Temperature module*/
    $.each( data, function( key, val ) {
      if ( key == "phLevel") {
        phLevel.push(val);
      } else if ( key == "oxygenLevel") {
        oxygenLevel.push(val);
      } else if ( key == "amoniaLevel") {
        amoniaLevel.push(val);
      } else if ( key == "weatherTemperature") {
        weatherTemp.push(val);
      } else if ( key == "weatherHumidity") {
        weatherHumidity.push(val);
      } else {
        items.push(val);
      }
    });
    /*Changing water level data*/
    $('#levelOxygen').html(oxygenLevel);
    $('#levelPh').html(phLevel);
    $('#levelAmonia').html(amoniaLevel);

    /*Show text temperature*/
    var lastItem = items.pop();
    $('.temperature').html(lastItem);

    /*Changing water level*/
    var waterLevelMax = $('#moduleWaterLevel').css("height").replace(/[^-\d\.]/g, '');
    var waterLevelCurrent = waterLevelMax / 100 * lastItem ;
    var waterLevelSet =  waterLevelCurrent + 'px';
    $('.waterCurrent').css({height: waterLevelCurrent });

    /*Temperature module*/
    /*Changing temperature data*/
    $('#weatherTemp').html(weatherTemp);
    $('#weatherHumidity').html(weatherHumidity);
  });
});

    var refreshJson = function() {
      $.getJSON( "json/plants-1.json", function( data ) {
        var items = [];
        /*Water module*/
        var phLevel = [];
        var oxygenLevel = [];
        var amoniaLevel = [];
        /*End of Water Module*/

        /*Temperature module*/
        var weatherTemp = [];
        var weatherHumidity = []
        /*End of Temperature module*/
        $.each( data, function( key, val ) {
          if ( key == "phLevel") {
            phLevel.push(val);
          } else if ( key == "oxygenLevel") {
            oxygenLevel.push(val);
          } else if ( key == "amoniaLevel") {
            amoniaLevel.push(val);
          } else if ( key == "weatherTemperature") {
            weatherTemp.push(val);
          } else if ( key == "weatherHumidity") {
            weatherHumidity.push(val);
          } else {
            items.push(val);
          }
        });
        /*Changing water level data*/
        $('#levelOxygen').html(oxygenLevel);
        $('#levelPh').html(phLevel);
        $('#levelAmonia').html(amoniaLevel);

        /*Show text temperature*/
        var lastItem = items.pop();
        $('.temperature').html(lastItem);

        /*Changing water level*/
        var waterLevelMax = $('#moduleWaterLevel').css("height").replace(/[^-\d\.]/g, '');
        var waterLevelCurrent = waterLevelMax / 100 * lastItem ;
        var waterLevelSet =  waterLevelCurrent + 'px';
        $('.waterCurrent').css({height: waterLevelCurrent });

        /*Temperature module*/
        /*Changing temperature data*/
        $('#weatherTemp').html(weatherTemp);
        $('#weatherHumidity').html(weatherHumidity);
      });
    };

$('#refreshBrn').on('click', refreshJson);

$("#levelAmonia").click(function() {
      $('html, body').animate({
          scrollTop: $("#moduleGraph").offset().top
      }, 2000);
  });


