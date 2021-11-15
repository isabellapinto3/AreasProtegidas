
$(document).ready(function () {   //esto es un IF

//Temperatura LAGO PUELO CALOR

  $("#calorV0").click(function () {
  $('.Grados').text('24');
  $('.ST').text('24°C');
  $('.PLL').text('4%');
  $("#calorV0").removeClass("fondoGris");
  $("#calorV0").addClass("pueloMV");

  $("#calorV1").addClass("fondoGris");
  $("#calorV2").addClass("fondoGris");
  $("#calorV3").addClass("fondoGris");
  $("#calorV4").addClass("fondoGris");
  $("#calorV5").addClass("fondoGris");

  $("#calorV1").removeClass("pueloMV");
  $("#calorV2").removeClass("pueloMV");
  $("#calorV3").removeClass("pueloMV");
  $("#calorV4").removeClass("pueloMV");
  $("#calorV5").removeClass("pueloMV");
  });

//
  $("#calorV1").click(function () {
  $('.Grados').text('22');
  $('.ST').text('23°C');
  $('.PLL').text('6%');
  $("#calorV1").removeClass("fondoGris");
  $("#calorV1").addClass("pueloMV");

  $("#calorV0").addClass("fondoGris");
  $("#calorV2").addClass("fondoGris");
  $("#calorV3").addClass("fondoGris");
  $("#calorV4").addClass("fondoGris");
  $("#calorV5").addClass("fondoGris");

  $("#calorV0").removeClass("pueloMV");
  $("#calorV2").removeClass("pueloMV");
  $("#calorV3").removeClass("pueloMV");
  $("#calorV4").removeClass("pueloMV");
  $("#calorV5").removeClass("pueloMV");
  });

//
  $("#calorV2").click(function () {
  $('.Grados').text('23');
  $('.ST').text('20°C');
  $('.PLL').text('9%');
  $("#calorV2").removeClass("fondoGris");
  $("#calorV2").addClass("pueloMV");

  $("#calorV0").addClass("fondoGris");
  $("#calorV1").addClass("fondoGris");
  $("#calorV3").addClass("fondoGris");
  $("#calorV4").addClass("fondoGris");
  $("#calorV5").addClass("fondoGris");

  $("#calorV0").removeClass("pueloMV");
  $("#calorV1").removeClass("pueloMV");
  $("#calorV3").removeClass("pueloMV");
  $("#calorV4").removeClass("pueloMV");
  $("#calorV5").removeClass("pueloMV");
  });


  $("#calorV3").click(function () {
  $(".Grados").text('20');
  $('.ST').text('22°C');
  $('.PLL').text('1%');
  $("#calorV3").removeClass("fondoGris");
  $("#calorV3").addClass("pueloMV");

  $("#calorV0").addClass("fondoGris");
  $("#calorV1").addClass("fondoGris");
  $("#calorV2").addClass("fondoGris");
  $("#calorV4").addClass("fondoGris");
  $("#calorV5").addClass("fondoGris");

  $("#calorV0").removeClass("pueloMV");
  $("#calorV1").removeClass("pueloMV");
  $("#calorV2").removeClass("pueloMV");
  $("#calorV4").removeClass("pueloMV");
  $("#calorV5").removeClass("pueloMV");
  });

  $("#calorV4").click(function () {
  $('.Grados').text('20');
  $('.ST').text('17°C');
  $('.PLL').text('1%');
  $("#calorV4").removeClass("fondoGris");
  $("#calorV4").addClass("pueloMV");

  $("#calorV0").addClass("fondoGris");
  $("#calorV1").addClass("fondoGris");
  $("#calorV2").addClass("fondoGris");
  $("#calorV3").addClass("fondoGris");
  $("#calorV5").addClass("fondoGris");

  $("#calorV0").removeClass("pueloMV");
  $("#calorV1").removeClass("pueloMV");
  $("#calorV2").removeClass("pueloMV");
  $("#calorV3").removeClass("pueloMV");
  $("#calorV5").removeClass("pueloMV");
  });

  $("#calorV5").click(function () {
  $('.Grados').text('19');
  $('.ST').text('17°C');
  $('.PLL').text('20%');
  $("#calorV5").removeClass("fondoGris");
  $("#calorV5").addClass("pueloMV");

  $("#calorV0").addClass("fondoGris");
  $("#calorV1").addClass("fondoGris");
  $("#calorV2").addClass("fondoGris");
  $("#calorV4").addClass("fondoGris");
  $("#calorV3").addClass("fondoGris");

  $("#calorV0").removeClass("pueloMV");
  $("#calorV1").removeClass("pueloMV");
  $("#calorV2").removeClass("pueloMV");
  $("#calorV4").removeClass("pueloMV");
  $("#calorV3").removeClass("pueloMV");
  });


//radiación LAGO PUELO CALOR

  $("#radV0").click(function () {
  $('.Rad').text('7');
  $('.KM').text('17Km');
  $('.ICA').text('21');
  $("#radV0").removeClass("fondoGris");
  $("#radV0").addClass("pueloRV");

  $("#radV1").addClass("fondoGris");
  $("#radV2").addClass("fondoGris");
  $("#radV3").addClass("fondoGris");
  $("#radV4").addClass("fondoGris");
  $("#radV5").addClass("fondoGris");

  $("#radV1").removeClass("pueloRV");
  $("#radV2").removeClass("pueloRV");
  $("#radV3").removeClass("pueloRV");
  $("#radV4").removeClass("pueloRV");
  $("#radV5").removeClass("pueloRV");
  });

  $("#radV1").click(function () {
  $('.Rad').text('6');
  $('.KM').text('22Km');
  $('.ICA').text('22');
  $("#radV1").removeClass("fondoGris");
  $("#radV1").addClass("pueloRV");

  $("#radV0").addClass("fondoGris");
  $("#radV2").addClass("fondoGris");
  $("#radV3").addClass("fondoGris");
  $("#radV4").addClass("fondoGris");
  $("#radV5").addClass("fondoGris");

  $("#radV0").removeClass("pueloRV");
  $("#radV2").removeClass("pueloRV");
  $("#radV3").removeClass("pueloRV");
  $("#radV4").removeClass("pueloRV");
  $("#radV5").removeClass("pueloRV");
  });

  $("#radV2").click(function () {
  $('.Rad').text('6,5');
  $('.KM').text('10Km');
  $('.ICA').text('18');
  $("#radV2").removeClass("fondoGris");
  $("#radV2").addClass("pueloRV");

  $("#radV0").addClass("fondoGris");
  $("#radV1").addClass("fondoGris");
  $("#radV3").addClass("fondoGris");
  $("#radV4").addClass("fondoGris");
  $("#radV5").addClass("fondoGris");

  $("#radV0").removeClass("pueloRV");
  $("#radV1").removeClass("pueloRV");
  $("#radV3").removeClass("pueloRV");
  $("#radV4").removeClass("pueloRV");
  $("#radV5").removeClass("pueloRV");
  });

  $("#radV3").click(function () {
  $('.Rad').text('5');
  $('.KM').text('35Km');
  $('.ICA').text('30');
  $("#radV3").removeClass("fondoGris");
  $("#radV3").addClass("pueloRV");

  $("#radV0").addClass("fondoGris");
  $("#radV1").addClass("fondoGris");
  $("#radV2").addClass("fondoGris");
  $("#radV4").addClass("fondoGris");
  $("#radV5").addClass("fondoGris");

  $("#radV0").removeClass("pueloRV");
  $("#radV1").removeClass("pueloRV");
  $("#radV2").removeClass("pueloRV");
  $("#radV4").removeClass("pueloRV");
  $("#radV5").removeClass("pueloRV");
  });

  $("#radV4").click(function () {
  $('.Rad').text('5,5');
  $('.KM').text('40Km');
  $('.ICA').text('25');
  $("#radV4").removeClass("fondoGris");
  $("#radV4").addClass("pueloRV");

  $("#radV0").addClass("fondoGris");
  $("#radV1").addClass("fondoGris");
  $("#radV2").addClass("fondoGris");
  $("#radV3").addClass("fondoGris");
  $("#radV5").addClass("fondoGris");

  $("#radV0").removeClass("pueloRV");
  $("#radV1").removeClass("pueloRV");
  $("#radV3").removeClass("pueloRV");
  $("#radV2").removeClass("pueloRV");
  $("#radV5").removeClass("pueloRV");
  });

  $("#radV5").click(function () {
  $('.Rad').text('4,5');
  $('.KM').text('22Km');
  $('.ICA').text('25');
  $("#radV5").removeClass("fondoGris");
  $("#radV5").addClass("pueloRV");

  $("#radV0").addClass("fondoGris");
  $("#radV1").addClass("fondoGris");
  $("#radV2").addClass("fondoGris");
  $("#radV3").addClass("fondoGris");
  $("#radV4").addClass("fondoGris");

  $("#radV0").removeClass("pueloRV");
  $("#radV1").removeClass("pueloRV");
  $("#radV2").removeClass("pueloRV");
  $("#radV3").removeClass("pueloRV");
  $("#radV4").removeClass("pueloRV");
  });


  //Temperatura LAGO PUELO FRÍO

    $("#calorI0").click(function () {
    $('.Grados').text('3');
    $('.ST').text('4°C');
    $('.PLL').text('20%');
    $("#calorI0").removeClass("fondoGris");
    $("#calorI0").addClass("pueloMI");

    $("#calorI1").addClass("fondoGris");
    $("#calorI2").addClass("fondoGris");
    $("#calorI3").addClass("fondoGris");
    $("#calorI4").addClass("fondoGris");
    $("#calorI5").addClass("fondoGris");

    $("#calorI1").removeClass("pueloMI");
    $("#calorI2").removeClass("pueloMI");
    $("#calorI3").removeClass("pueloMI");
    $("#calorI4").removeClass("pueloMI");
    $("#calorI5").removeClass("pueloMI");
    });

  //
    $("#calorI1").click(function () {
    $('.Grados').text('4');
    $('.ST').text('2°C');
    $('.PLL').text('40%');
    $("#calorI1").removeClass("fondoGris");
    $("#calorI1").addClass("pueloMI");

    $("#calorI0").addClass("fondoGris");
    $("#calorI2").addClass("fondoGris");
    $("#calorI3").addClass("fondoGris");
    $("#calorI4").addClass("fondoGris");
    $("#calorI5").addClass("fondoGris");

    $("#calorI0").removeClass("pueloMI");
    $("#calorI2").removeClass("pueloMI");
    $("#calorI3").removeClass("pueloMI");
    $("#calorI4").removeClass("pueloMI");
    $("#calorI5").removeClass("pueloMI");
    });

  //
    $("#calorI2").click(function () {
    $('.Grados').text('5');
    $('.ST').text('2°C');
    $('.PLL').text('30%');
    $("#calorI2").removeClass("fondoGris");
    $("#calorI2").addClass("pueloMI");

    $("#calorI0").addClass("fondoGris");
    $("#calorI1").addClass("fondoGris");
    $("#calorI3").addClass("fondoGris");
    $("#calorI4").addClass("fondoGris");
    $("#calorI5").addClass("fondoGris");

    $("#calorI0").removeClass("pueloMI");
    $("#calorI1").removeClass("pueloMI");
    $("#calorI3").removeClass("pueloMI");
    $("#calorI4").removeClass("pueloMI");
    $("#calorI5").removeClass("pueloMI");
    });


    $("#calorI3").click(function () {
    $(".Grados").text('5');
    $('.ST').text('3°C');
    $('.PLL').text('10%');
    $("#calorI3").removeClass("fondoGris");
    $("#calorI3").addClass("pueloMI");

    $("#calorI0").addClass("fondoGris");
    $("#calorI1").addClass("fondoGris");
    $("#calorI2").addClass("fondoGris");
    $("#calorI4").addClass("fondoGris");
    $("#calorI5").addClass("fondoGris");

    $("#calorI0").removeClass("pueloMI");
    $("#calorI1").removeClass("pueloMI");
    $("#calorI2").removeClass("pueloMI");
    $("#calorI4").removeClass("pueloMI");
    $("#calorI5").removeClass("pueloMI");
    });

    $("#calorI4").click(function () {
    $(".Grados").text('10');
    $('.ST').text('12°C');
    $('.PLL').text('2%');
    $("#calorI4").removeClass("fondoGris");
    $("#calorI4").addClass("pueloMI");

    $("#calorI0").addClass("fondoGris");
    $("#calorI1").addClass("fondoGris");
    $("#calorI2").addClass("fondoGris");
    $("#calorI3").addClass("fondoGris");
    $("#calorI5").addClass("fondoGris");

    $("#calorI0").removeClass("pueloMI");
    $("#calorI1").removeClass("pueloMI");
    $("#calorI2").removeClass("pueloMI");
    $("#calorI3").removeClass("pueloMI");
    $("#calorI5").removeClass("pueloMI");
    });

    $("#calorI5").click(function () {
    $(".Grados").text('15');
    $('.ST').text('12°C');
    $('.PLL').text('3%');
    $("#calorI5").removeClass("fondoGris");
    $("#calorI5").addClass("pueloMI");

    $("#calorI0").addClass("fondoGris");
    $("#calorI1").addClass("fondoGris");
    $("#calorI2").addClass("fondoGris");
    $("#calorI3").addClass("fondoGris");
    $("#calorI4").addClass("fondoGris");

    $("#calorI0").removeClass("pueloMI");
    $("#calorI1").removeClass("pueloMI");
    $("#calorI2").removeClass("pueloMI");
    $("#calorI3").removeClass("pueloMI");
    $("#calorI4").removeClass("pueloMI");
    });


  //precipitación LAGO PUELO FRIO

    $("#radI0").click(function () {
    $('.Rad').text('30');
    $('.KM').text('20Km');
    $('.ICA').text('27');
    $("#radI0").removeClass("fondoGris");
    $("#radI0").addClass("pueloRI");

    $("#radI1").addClass("fondoGris");
    $("#radI2").addClass("fondoGris");
    $("#radI3").addClass("fondoGris");
    $("#radI4").addClass("fondoGris");
    $("#radI5").addClass("fondoGris");

    $("#radI1").removeClass("pueloRI");
    $("#radI2").removeClass("pueloRI");
    $("#radI3").removeClass("pueloRI");
    $("#radI4").removeClass("pueloRI");
    $("#radI5").removeClass("pueloRI");
    });

    $("#radI1").click(function () {
    $('.Rad').text('25');
    $('.KM').text('20Km');
    $('.ICA').text('28');
    $("#radI1").removeClass("fondoGris");
    $("#radI1").addClass("pueloRI");

    $("#radI0").addClass("fondoGris");
    $("#radI2").addClass("fondoGris");
    $("#radI3").addClass("fondoGris");
    $("#radI4").addClass("fondoGris");
    $("#radI5").addClass("fondoGris");

    $("#radI0").removeClass("pueloRI");
    $("#radI2").removeClass("pueloRI");
    $("#radI3").removeClass("pueloRI");
    $("#radI4").removeClass("pueloRI");
    $("#radI5").removeClass("pueloRI");
    });

    $("#radI2").click(function () {
      $('.Rad').text('17');
      $('.KM').text('25Km');
      $('.ICA').text('25');
    $("#radI2").removeClass("fondoGris");
    $("#radI2").addClass("pueloRI");

    $("#radI0").addClass("fondoGris");
    $("#radI1").addClass("fondoGris");
    $("#radI3").addClass("fondoGris");
    $("#radI4").addClass("fondoGris");
    $("#radI5").addClass("fondoGris");

    $("#radI0").removeClass("pueloRI");
    $("#radI1").removeClass("pueloRI");
    $("#radI3").removeClass("pueloRI");
    $("#radI4").removeClass("pueloRI");
    $("#radI5").removeClass("pueloRI");
    });

    $("#radI3").click(function () {
    $('.Rad').text('15');
    $('.KM').text('10Km');
    $('.ICA').text('28');
    $("#radI3").removeClass("fondoGris");
    $("#radI3").addClass("pueloRI");

    $("#radI0").addClass("fondoGris");
    $("#radI2").addClass("fondoGris");
    $("#radI1").addClass("fondoGris");
    $("#radI4").addClass("fondoGris");
    $("#radI5").addClass("fondoGris");

    $("#radI0").removeClass("pueloRI");
    $("#radI2").removeClass("pueloRI");
    $("#radI1").removeClass("pueloRI");
    $("#radI4").removeClass("pueloRI");
    $("#radI5").removeClass("pueloRI");
    });

    $("#radI4").click(function () {
    $('.Rad').text('8');
    $('.KM').text('13Km');
    $('.ICA').text('25');
    $("#radI4").removeClass("fondoGris");
    $("#radI4").addClass("pueloRI");

    $("#radI0").addClass("fondoGris");
    $("#radI2").addClass("fondoGris");
    $("#radI1").addClass("fondoGris");
    $("#radI3").addClass("fondoGris");
    $("#radI5").addClass("fondoGris");

    $("#radI0").removeClass("pueloRI");
    $("#radI2").removeClass("pueloRI");
    $("#radI1").removeClass("pueloRI");
    $("#radI3").removeClass("pueloRI");
    $("#radI5").removeClass("pueloRI");
    });

    $("#radI5").click(function () {
    $('.Rad').text('10');
    $('.KM').text('25Km');
    $('.ICA').text('30');
    $("#radI5").removeClass("fondoGris");
    $("#radI5").addClass("pueloRI");

    $("#radI0").addClass("fondoGris");
    $("#radI2").addClass("fondoGris");
    $("#radI1").addClass("fondoGris");
    $("#radI4").addClass("fondoGris");
    $("#radI3").addClass("fondoGris");

    $("#radI0").removeClass("pueloRI");
    $("#radI2").removeClass("pueloRI");
    $("#radI1").removeClass("pueloRI");
    $("#radI4").removeClass("pueloRI");
    $("#radI3").removeClass("pueloRI");
    });

    //ARRAYANES
    //Temperatura FRIO
    $("#ArrayanescalorI0").click(function () {
    $(".Grados").text('13');
    $('.ST').text('15°C');
    $('.PLL').text('20%');
    $("#ArrayanescalorI0").removeClass("fondoGris");
    $("#ArrayanescalorI0").addClass("arrayanesMI");

    $("#ArrayanescalorI5").addClass("fondoGris");
    $("#ArrayanescalorI1").addClass("fondoGris");
    $("#ArrayanescalorI2").addClass("fondoGris");
    $("#ArrayanescalorI3").addClass("fondoGris");
    $("#ArrayanescalorI4").addClass("fondoGris");

    $("#ArrayanescalorI5").removeClass("arrayanesMI");
    $("#ArrayanescalorI1").removeClass("arrayanesMI");
    $("#ArrayanescalorI2").removeClass("arrayanesMI");
    $("#ArrayanescalorI3").removeClass("arrayanesMI");
    $("#ArrayanescalorI4").removeClass("arrayanesMI");
    });

    $("#ArrayanescalorI1").click(function () {
    $(".Grados").text('00');
    $('.ST').text('00°C');
    $('.PLL').text('00%');
    $("#ArrayanescalorI1").removeClass("fondoGris");
    $("#ArrayanescalorI1").addClass("arrayanesMI");

    $("#ArrayanescalorI5").addClass("fondoGris");
    $("#ArrayanescalorI0").addClass("fondoGris");
    $("#ArrayanescalorI2").addClass("fondoGris");
    $("#ArrayanescalorI3").addClass("fondoGris");
    $("#ArrayanescalorI4").addClass("fondoGris");

    $("#ArrayanescalorI5").removeClass("arrayanesMI");
    $("#ArrayanescalorI0").removeClass("arrayanesMI");
    $("#ArrayanescalorI2").removeClass("arrayanesMI");
    $("#ArrayanescalorI3").removeClass("arrayanesMI");
    $("#ArrayanescalorI4").removeClass("arrayanesMI");
    });

    $("#ArrayanescalorI1").click(function () {
    $(".Grados").text('00');
    $('.ST').text('00°C');
    $('.PLL').text('00%');
    $("#ArrayanescalorI1").removeClass("fondoGris");
    $("#ArrayanescalorI1").addClass("arrayanesMI");

    $("#ArrayanescalorI5").addClass("fondoGris");
    $("#ArrayanescalorI0").addClass("fondoGris");
    $("#ArrayanescalorI2").addClass("fondoGris");
    $("#ArrayanescalorI3").addClass("fondoGris");
    $("#ArrayanescalorI4").addClass("fondoGris");

    $("#ArrayanescalorI5").removeClass("arrayanesMI");
    $("#ArrayanescalorI0").removeClass("arrayanesMI");
    $("#ArrayanescalorI2").removeClass("arrayanesMI");
    $("#ArrayanescalorI3").removeClass("arrayanesMI");
    $("#ArrayanescalorI4").removeClass("arrayanesMI");
    });

    $("#ArrayanescalorI1").click(function () {
    $(".Grados").text('00');
    $('.ST').text('00°C');
    $('.PLL').text('00%');
    $("#ArrayanescalorI1").removeClass("fondoGris");
    $("#ArrayanescalorI1").addClass("arrayanesMI");

    $("#ArrayanescalorI5").addClass("fondoGris");
    $("#ArrayanescalorI0").addClass("fondoGris");
    $("#ArrayanescalorI2").addClass("fondoGris");
    $("#ArrayanescalorI3").addClass("fondoGris");
    $("#ArrayanescalorI4").addClass("fondoGris");

    $("#ArrayanescalorI5").removeClass("arrayanesMI");
    $("#ArrayanescalorI0").removeClass("arrayanesMI");
    $("#ArrayanescalorI2").removeClass("arrayanesMI");
    $("#ArrayanescalorI3").removeClass("arrayanesMI");
    $("#ArrayanescalorI4").removeClass("arrayanesMI");
    });

    $("#ArrayanescalorI1").click(function () {
    $(".Grados").text('00');
    $('.ST').text('00°C');
    $('.PLL').text('00%');
    $("#ArrayanescalorI1").removeClass("fondoGris");
    $("#ArrayanescalorI1").addClass("arrayanesMI");

    $("#ArrayanescalorI5").addClass("fondoGris");
    $("#ArrayanescalorI0").addClass("fondoGris");
    $("#ArrayanescalorI2").addClass("fondoGris");
    $("#ArrayanescalorI3").addClass("fondoGris");
    $("#ArrayanescalorI4").addClass("fondoGris");

    $("#ArrayanescalorI5").removeClass("arrayanesMI");
    $("#ArrayanescalorI0").removeClass("arrayanesMI");
    $("#ArrayanescalorI2").removeClass("arrayanesMI");
    $("#ArrayanescalorI3").removeClass("arrayanesMI");
    $("#ArrayanescalorI4").removeClass("arrayanesMI");
    });

    $("#ArrayanescalorI1").click(function () {
    $(".Grados").text('00');
    $('.ST').text('00°C');
    $('.PLL').text('00%');
    $("#ArrayanescalorI1").removeClass("fondoGris");
    $("#ArrayanescalorI1").addClass("arrayanesMI");

    $("#ArrayanescalorI5").addClass("fondoGris");
    $("#ArrayanescalorI0").addClass("fondoGris");
    $("#ArrayanescalorI2").addClass("fondoGris");
    $("#ArrayanescalorI3").addClass("fondoGris");
    $("#ArrayanescalorI4").addClass("fondoGris");

    $("#ArrayanescalorI5").removeClass("arrayanesMI");
    $("#ArrayanescalorI0").removeClass("arrayanesMI");
    $("#ArrayanescalorI2").removeClass("arrayanesMI");
    $("#ArrayanescalorI3").removeClass("arrayanesMI");
    $("#ArrayanescalorI4").removeClass("arrayanesMI");
    });

    //RADIACION
    $("#ArrayanesradI0").click(function () {
    $('.Rad').text('7');
    $('.KM').text('17Km');
    $('.ICA').text('21');
    $('.valorRadiacion').text('Medio');
    $("#ArrayanesradI0").removeClass("fondoGris");
    $("#ArrayanesradI0").addClass("arrayanesRI");

    $("#ArrayanesradI1").addClass("fondoGris");
    $("#ArrayanesradI2").addClass("fondoGris");
    $("#ArrayanesradI3").addClass("fondoGris");
    $("#ArrayanesradI4").addClass("fondoGris");
    $("#ArrayanesradI5").addClass("fondoGris");

    $("#ArrayanesradI1").removeClass("arrayanesRI");
    $("#ArrayanesradI2").removeClass("arrayanesRI");
    $("#ArrayanesradI3").removeClass("arrayanesRI");
    $("#ArrayanesradI4").removeClass("arrayanesRI");
    $("#ArrayanesradI5").removeClass("arrayanesRI");
    });

    $("#ArrayanesradI1").click(function () {
    $('.Rad').text('00');
    $('.KM').text('00Km');
    $('.ICA').text('00');
    $('.valorRadiacion').text('xxx');
    $("#ArrayanesradI1").removeClass("fondoGris");
    $("#ArrayanesradI1").addClass("arrayanesRI");

    $("#ArrayanesradI0").addClass("fondoGris");
    $("#ArrayanesradI2").addClass("fondoGris");
    $("#ArrayanesradI3").addClass("fondoGris");
    $("#ArrayanesradI4").addClass("fondoGris");
    $("#ArrayanesradI5").addClass("fondoGris");

    $("#ArrayanesradI0").removeClass("arrayanesRI");
    $("#ArrayanesradI2").removeClass("arrayanesRI");
    $("#ArrayanesradI3").removeClass("arrayanesRI");
    $("#ArrayanesradI4").removeClass("arrayanesRI");
    $("#ArrayanesradI5").removeClass("arrayanesRI");
    });

    $("#ArrayanesradI1").click(function () {
    $('.Rad').text('00');
    $('.KM').text('00Km');
    $('.ICA').text('00');
    $('.valorRadiacion').text('xxx');
    $("#ArrayanesradI1").removeClass("fondoGris");
    $("#ArrayanesradI1").addClass("arrayanesRI");

    $("#ArrayanesradI0").addClass("fondoGris");
    $("#ArrayanesradI2").addClass("fondoGris");
    $("#ArrayanesradI3").addClass("fondoGris");
    $("#ArrayanesradI4").addClass("fondoGris");
    $("#ArrayanesradI5").addClass("fondoGris");

    $("#ArrayanesradI0").removeClass("arrayanesRI");
    $("#ArrayanesradI2").removeClass("arrayanesRI");
    $("#ArrayanesradI3").removeClass("arrayanesRI");
    $("#ArrayanesradI4").removeClass("arrayanesRI");
    $("#ArrayanesradI5").removeClass("arrayanesRI");
    });

    $("#ArrayanesradI1").click(function () {
    $('.Rad').text('00');
    $('.KM').text('00Km');
    $('.ICA').text('00');
    $('.valorRadiacion').text('xxx');
    $("#ArrayanesradI1").removeClass("fondoGris");
    $("#ArrayanesradI1").addClass("arrayanesRI");

    $("#ArrayanesradI0").addClass("fondoGris");
    $("#ArrayanesradI2").addClass("fondoGris");
    $("#ArrayanesradI3").addClass("fondoGris");
    $("#ArrayanesradI4").addClass("fondoGris");
    $("#ArrayanesradI5").addClass("fondoGris");

    $("#ArrayanesradI0").removeClass("arrayanesRI");
    $("#ArrayanesradI2").removeClass("arrayanesRI");
    $("#ArrayanesradI3").removeClass("arrayanesRI");
    $("#ArrayanesradI4").removeClass("arrayanesRI");
    $("#ArrayanesradI5").removeClass("arrayanesRI");
    });

    $("#ArrayanesradI1").click(function () {
    $('.Rad').text('00');
    $('.KM').text('00Km');
    $('.ICA').text('00');
    $('.valorRadiacion').text('xxx');
    $("#ArrayanesradI1").removeClass("fondoGris");
    $("#ArrayanesradI1").addClass("arrayanesRI");

    $("#ArrayanesradI0").addClass("fondoGris");
    $("#ArrayanesradI2").addClass("fondoGris");
    $("#ArrayanesradI3").addClass("fondoGris");
    $("#ArrayanesradI4").addClass("fondoGris");
    $("#ArrayanesradI5").addClass("fondoGris");

    $("#ArrayanesradI0").removeClass("arrayanesRI");
    $("#ArrayanesradI2").removeClass("arrayanesRI");
    $("#ArrayanesradI3").removeClass("arrayanesRI");
    $("#ArrayanesradI4").removeClass("arrayanesRI");
    $("#ArrayanesradI5").removeClass("arrayanesRI");
    });

    $("#ArrayanesradI1").click(function () {
    $('.Rad').text('00');
    $('.KM').text('00Km');
    $('.ICA').text('00');
    $('.valorRadiacion').text('xxx');
    $("#ArrayanesradI1").removeClass("fondoGris");
    $("#ArrayanesradI1").addClass("arrayanesRI");

    $("#ArrayanesradI0").addClass("fondoGris");
    $("#ArrayanesradI2").addClass("fondoGris");
    $("#ArrayanesradI3").addClass("fondoGris");
    $("#ArrayanesradI4").addClass("fondoGris");
    $("#ArrayanesradI5").addClass("fondoGris");

    $("#ArrayanesradI0").removeClass("arrayanesRI");
    $("#ArrayanesradI2").removeClass("arrayanesRI");
    $("#ArrayanesradI3").removeClass("arrayanesRI");
    $("#ArrayanesradI4").removeClass("arrayanesRI");
    $("#ArrayanesradI5").removeClass("arrayanesRI");
    });


    //

  });
