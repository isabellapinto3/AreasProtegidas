$(document).ready(function() {

  //Show y Hide de invierno/verano
  $(".diapositiva2-frio").hide();

  $(".slider.round").click(function() {
    $(".diapositiva2-calor").hide();
    $(".diapositiva2-frio").show();
  });

  $(".sliderFrio").click(function() {
    $(".diapositiva2-calor").show();
    $(".diapositiva2-frio").hide();
  });


  //Temperatura LAGO PUELO CALOR
  $("#calorV0").click(function() {
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
  $("#calorV1").click(function() {
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
  $("#calorV2").click(function() {
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


  $("#calorV3").click(function() {
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

  $("#calorV4").click(function() {
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

  $("#calorV5").click(function() {
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

  $("#radV0").click(function() {
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

  $("#radV1").click(function() {
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

  $("#radV2").click(function() {
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

  $("#radV3").click(function() {
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

  $("#radV4").click(function() {
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

  $("#radV5").click(function() {
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

  $("#calorI0").click(function() {
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
  $("#calorI1").click(function() {
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
  $("#calorI2").click(function() {
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


  $("#calorI3").click(function() {
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

  $("#calorI4").click(function() {
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

  $("#calorI5").click(function() {
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

  $("#radI0").click(function() {
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

  $("#radI1").click(function() {
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

  $("#radI2").click(function() {
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

  $("#radI3").click(function() {
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

  $("#radI4").click(function() {
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

  $("#radI5").click(function() {
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


  //----- TEMPERATURA ARRAYANES VERANO ---------

  //Temperatura LOS ARRAYANES CALOR

  $("#AcalorV0").click(function() {
    $('.Grados').text('32');
    $('.ST').text('34°C');
    $('.PLL').text('1%');
    $("#AcalorV0").removeClass("fondoGris");
    $("#AcalorV0").addClass("arrayanesMV");

    $("#AcalorV1").addClass("fondoGris");
    $("#AcalorV2").addClass("fondoGris");
    $("#AcalorV3").addClass("fondoGris");
    $("#AcalorV4").addClass("fondoGris");
    $("#AcalorV5").addClass("fondoGris");

    $("#AcalorV1").removeClass("arrayanesMV");
    $("#AcalorV2").removeClass("arrayanesMV");
    $("#AcalorV3").removeClass("arrayanesMV");
    $("#AcalorV4").removeClass("arrayanesMV");
    $("#AcalorV5").removeClass("arrayanesMV");
  });

  $("#AcalorV1").click(function() {
    $('.Grados').text('30');
    $('.ST').text('34°C');
    $('.PLL').text('3%');
    $("#AcalorV1").removeClass("fondoGris");
    $("#AcalorV1").addClass("arrayanesMV");

    $("#AcalorV0").addClass("fondoGris");
    $("#AcalorV2").addClass("fondoGris");
    $("#AcalorV3").addClass("fondoGris");
    $("#AcalorV4").addClass("fondoGris");
    $("#AcalorV5").addClass("fondoGris");

    $("#AcalorV0").removeClass("arrayanesMV");
    $("#AcalorV2").removeClass("arrayanesMV");
    $("#AcalorV3").removeClass("arrayanesMV");
    $("#AcalorV4").removeClass("arrayanesMV");
    $("#AcalorV5").removeClass("arrayanesMV");
  });

  $("#AcalorV2").click(function() {
    $('.Grados').text('31');
    $('.ST').text('32°C');
    $('.PLL').text('5%');
    $("#AcalorV2").removeClass("fondoGris");
    $("#AcalorV2").addClass("arrayanesMV");

    $("#AcalorV0").addClass("fondoGris");
    $("#AcalorV1").addClass("fondoGris");
    $("#AcalorV3").addClass("fondoGris");
    $("#AcalorV4").addClass("fondoGris");
    $("#AcalorV5").addClass("fondoGris");

    $("#AcalorV0").removeClass("arrayanesMV");
    $("#AcalorV1").removeClass("arrayanesMV");
    $("#AcalorV3").removeClass("arrayanesMV");
    $("#AcalorV4").removeClass("arrayanesMV");
    $("#AcalorV5").removeClass("arrayanesMV");
  });

  $("#AcalorV3").click(function() {
    $('.Grados').text('28');
    $('.ST').text('27°C');
    $('.PLL').text('25%');
    $("#AcalorV3").removeClass("fondoGris");
    $("#AcalorV3").addClass("arrayanesMV");

    $("#AcalorV0").addClass("fondoGris");
    $("#AcalorV1").addClass("fondoGris");
    $("#AcalorV2").addClass("fondoGris");
    $("#AcalorV4").addClass("fondoGris");
    $("#AcalorV5").addClass("fondoGris");

    $("#AcalorV0").removeClass("arrayanesMV");
    $("#AcalorV1").removeClass("arrayanesMV");
    $("#AcalorV2").removeClass("arrayanesMV");
    $("#AcalorV4").removeClass("arrayanesMV");
    $("#AcalorV5").removeClass("arrayanesMV");
  });

  $("#AcalorV4").click(function() {
    $('.Grados').text('26');
    $('.ST').text('27°C');
    $('.PLL').text('20%');
    $("#AcalorV4").removeClass("fondoGris");
    $("#AcalorV4").addClass("arrayanesMV");

    $("#AcalorV0").addClass("fondoGris");
    $("#AcalorV1").addClass("fondoGris");
    $("#AcalorV2").addClass("fondoGris");
    $("#AcalorV3").addClass("fondoGris");
    $("#AcalorV5").addClass("fondoGris");

    $("#AcalorV0").removeClass("arrayanesMV");
    $("#AcalorV1").removeClass("arrayanesMV");
    $("#AcalorV2").removeClass("arrayanesMV");
    $("#AcalorV3").removeClass("arrayanesMV");
    $("#AcalorV5").removeClass("arrayanesMV");
  });

  $("#AcalorV5").click(function() {
    $('.Grados').text('26');
    $('.ST').text('29°C');
    $('.PLL').text('10%');
    $("#AcalorV5").removeClass("fondoGris");
    $("#AcalorV5").addClass("arrayanesMV");

    $("#AcalorV0").addClass("fondoGris");
    $("#AcalorV1").addClass("fondoGris");
    $("#AcalorV2").addClass("fondoGris");
    $("#AcalorV3").addClass("fondoGris");
    $("#AcalorV4").addClass("fondoGris");

    $("#AcalorV0").removeClass("arrayanesMV");
    $("#AcalorV1").removeClass("arrayanesMV");
    $("#AcalorV2").removeClass("arrayanesMV");
    $("#AcalorV3").removeClass("arrayanesMV");
    $("#AcalorV4").removeClass("arrayanesMV");
  });

  //Radiación LOS ARRAYANES CALOR

  $("#AradV0").click(function() {
    $('.Rad').text('7');
    $('.KM').text('13Km');
    $('.ICA').text('21');
    $('.valorRadiacion').text('Alto');
    $("#AradV0").removeClass("fondoGris");
    $("#AradV0").addClass("arrayanesRV");

    $("#AradV1").addClass("fondoGris");
    $("#AradV2").addClass("fondoGris");
    $("#AradV3").addClass("fondoGris");
    $("#AradV4").addClass("fondoGris");
    $("#AradV5").addClass("fondoGris");

    $("#AradV1").removeClass("arrayanesRV");
    $("#AradV2").removeClass("arrayanesRV");
    $("#AradV3").removeClass("arrayanesRV");
    $("#AradV4").removeClass("arrayanesRV");
    $("#AradV5").removeClass("arrayanesRV");
  });

  $("#AradV1").click(function() {
    $('.Rad').text('6');
    $('.KM').text('17Km');
    $('.ICA').text('22');
    $('.valorRadiacion').text('Alto');
    $("#AradV1").removeClass("fondoGris");
    $("#AradV1").addClass("arrayanesRV");

    $("#AradV0").addClass("fondoGris");
    $("#AradV2").addClass("fondoGris");
    $("#AradV3").addClass("fondoGris");
    $("#AradV4").addClass("fondoGris");
    $("#AradV5").addClass("fondoGris");

    $("#AradV0").removeClass("arrayanesRV");
    $("#AradV2").removeClass("arrayanesRV");
    $("#AradV3").removeClass("arrayanesRV");
    $("#AradV4").removeClass("arrayanesRV");
    $("#AradV5").removeClass("arrayanesRV");
  });

  $("#AradV2").click(function() {
    $('.Rad').text('6');
    $('.KM').text('20Km');
    $('.ICA').text('25');
    $('.valorRadiacion').text('Alto');
    $("#AradV2").removeClass("fondoGris");
    $("#AradV2").addClass("arrayanesRV");

    $("#AradV1").addClass("fondoGris");
    $("#AradV0").addClass("fondoGris");
    $("#AradV3").addClass("fondoGris");
    $("#AradV4").addClass("fondoGris");
    $("#AradV5").addClass("fondoGris");

    $("#AradV1").removeClass("arrayanesRV");
    $("#AradV0").removeClass("arrayanesRV");
    $("#AradV3").removeClass("arrayanesRV");
    $("#AradV4").removeClass("arrayanesRV");
    $("#AradV5").removeClass("arrayanesRV");
  });

  $("#AradV3").click(function() {
    $('.Rad').text('5');
    $('.KM').text('21Km');
    $('.ICA').text('18');
    $('.valorRadiacion').text('medio');
    $("#AradV3").removeClass("fondoGris");
    $("#AradV3").addClass("arrayanesRV");

    $("#AradV1").addClass("fondoGris");
    $("#AradV0").addClass("fondoGris");
    $("#AradV2").addClass("fondoGris");
    $("#AradV4").addClass("fondoGris");
    $("#AradV5").addClass("fondoGris");

    $("#AradV1").removeClass("arrayanesRV");
    $("#AradV0").removeClass("arrayanesRV");
    $("#AradV2").removeClass("arrayanesRV");
    $("#AradV4").removeClass("arrayanesRV");
    $("#AradV5").removeClass("arrayanesRV");
  });

  $("#AradV4").click(function() {
    $('.Rad').text('5');
    $('.KM').text('27Km');
    $('.ICA').text('20');
    $('.valorRadiacion').text('medio');
    $("#AradV4").removeClass("fondoGris");
    $("#AradV4").addClass("arrayanesRV");

    $("#AradV1").addClass("fondoGris");
    $("#AradV0").addClass("fondoGris");
    $("#AradV2").addClass("fondoGris");
    $("#AradV3").addClass("fondoGris");
    $("#AradV5").addClass("fondoGris");

    $("#AradV1").removeClass("arrayanesRV");
    $("#AradV0").removeClass("arrayanesRV");
    $("#AradV2").removeClass("arrayanesRV");
    $("#AradV3").removeClass("arrayanesRV");
    $("#AradV5").removeClass("arrayanesRV");
  });

  $("#AradV5").click(function() {
    $('.Rad').text('4');
    $('.KM').text('25Km');
    $('.ICA').text('21');
    $('.valorRadiacion').text('medio');
    $("#AradV5").removeClass("fondoGris");
    $("#AradV5").addClass("arrayanesRV");

    $("#AradV1").addClass("fondoGris");
    $("#AradV0").addClass("fondoGris");
    $("#AradV2").addClass("fondoGris");
    $("#AradV3").addClass("fondoGris");
    $("#AradV4").addClass("fondoGris");

    $("#AradV1").removeClass("arrayanesRV");
    $("#AradV0").removeClass("arrayanesRV");
    $("#AradV2").removeClass("arrayanesRV");
    $("#AradV3").removeClass("arrayanesRV");
    $("#AradV4").removeClass("arrayanesRV");
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
      $(".Grados").text('15');
      $('.ST').text('16°C');
      $('.PLL').text('25%');
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

      $("#ArrayanescalorI2").click(function () {
      $(".Grados").text('16');
      $('.ST').text('18°C');
      $('.PLL').text('35%');
      $("#ArrayanescalorI2").removeClass("fondoGris");
      $("#ArrayanescalorI2").addClass("arrayanesMI");

      $("#ArrayanescalorI5").addClass("fondoGris");
      $("#ArrayanescalorI0").addClass("fondoGris");
      $("#ArrayanescalorI1").addClass("fondoGris");
      $("#ArrayanescalorI3").addClass("fondoGris");
      $("#ArrayanescalorI4").addClass("fondoGris");

      $("#ArrayanescalorI5").removeClass("arrayanesMI");
      $("#ArrayanescalorI0").removeClass("arrayanesMI");
      $("#ArrayanescalorI1").removeClass("arrayanesMI");
      $("#ArrayanescalorI3").removeClass("arrayanesMI");
      $("#ArrayanescalorI4").removeClass("arrayanesMI");
      });

      $("#ArrayanescalorI3").click(function () {
      $(".Grados").text('15');
      $('.ST').text('18°C');
      $('.PLL').text('30%');
      $("#ArrayanescalorI3").removeClass("fondoGris");
      $("#ArrayanescalorI3").addClass("arrayanesMI");

      $("#ArrayanescalorI5").addClass("fondoGris");
      $("#ArrayanescalorI0").addClass("fondoGris");
      $("#ArrayanescalorI1").addClass("fondoGris");
      $("#ArrayanescalorI2").addClass("fondoGris");
      $("#ArrayanescalorI4").addClass("fondoGris");

      $("#ArrayanescalorI5").removeClass("arrayanesMI");
      $("#ArrayanescalorI0").removeClass("arrayanesMI");
      $("#ArrayanescalorI2").removeClass("arrayanesMI");
      $("#ArrayanescalorI1").removeClass("arrayanesMI");
      $("#ArrayanescalorI4").removeClass("arrayanesMI");
      });

      $("#ArrayanescalorI4").click(function () {
      $(".Grados").text('24');
      $('.ST').text('27°C');
      $('.PLL').text('14%');
      $("#ArrayanescalorI4").removeClass("fondoGris");
      $("#ArrayanescalorI4").addClass("arrayanesMI");

      $("#ArrayanescalorI5").addClass("fondoGris");
      $("#ArrayanescalorI0").addClass("fondoGris");
      $("#ArrayanescalorI2").addClass("fondoGris");
      $("#ArrayanescalorI3").addClass("fondoGris");
      $("#ArrayanescalorI1").addClass("fondoGris");

      $("#ArrayanescalorI5").removeClass("arrayanesMI");
      $("#ArrayanescalorI0").removeClass("arrayanesMI");
      $("#ArrayanescalorI2").removeClass("arrayanesMI");
      $("#ArrayanescalorI3").removeClass("arrayanesMI");
      $("#ArrayanescalorI1").removeClass("arrayanesMI");
      });

      $("#ArrayanescalorI5").click(function () {
      $(".Grados").text('27');
      $('.ST').text('31°C');
      $('.PLL').text('15%');
      $("#ArrayanescalorI5").removeClass("fondoGris");
      $("#ArrayanescalorI5").addClass("arrayanesMI");

      $("#ArrayanescalorI1").addClass("fondoGris");
      $("#ArrayanescalorI0").addClass("fondoGris");
      $("#ArrayanescalorI2").addClass("fondoGris");
      $("#ArrayanescalorI3").addClass("fondoGris");
      $("#ArrayanescalorI4").addClass("fondoGris");

      $("#ArrayanescalorI1").removeClass("arrayanesMI");
      $("#ArrayanescalorI0").removeClass("arrayanesMI");
      $("#ArrayanescalorI2").removeClass("arrayanesMI");
      $("#ArrayanescalorI3").removeClass("arrayanesMI");
      $("#ArrayanescalorI4").removeClass("arrayanesMI");
      });

      //RADIACION
      $("#ArrayanesradI0").click(function () {
      $('.Rad').text('18mm');
      $('.KM').text('20Km');
      $('.ICA').text('27');
      $('.valorRadiacion').text('Alto');
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
      $('.Rad').text('12mm');
      $('.KM').text('14Km');
      $('.ICA').text('20');
      $('.valorRadiacion').text('Medio');
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

      $("#ArrayanesradI2").click(function () {
      $('.Rad').text('8mm');
      $('.KM').text('10Km');
      $('.ICA').text('17');
      $('.valorRadiacion').text('Medio');
      $("#ArrayanesradI2").removeClass("fondoGris");
      $("#ArrayanesradI2").addClass("arrayanesRI");

      $("#ArrayanesradI0").addClass("fondoGris");
      $("#ArrayanesradI1").addClass("fondoGris");
      $("#ArrayanesradI3").addClass("fondoGris");
      $("#ArrayanesradI4").addClass("fondoGris");
      $("#ArrayanesradI5").addClass("fondoGris");

      $("#ArrayanesradI0").removeClass("arrayanesRI");
      $("#ArrayanesradI1").removeClass("arrayanesRI");
      $("#ArrayanesradI3").removeClass("arrayanesRI");
      $("#ArrayanesradI4").removeClass("arrayanesRI");
      $("#ArrayanesradI5").removeClass("arrayanesRI");
      });

      $("#ArrayanesradI3").click(function () {
      $('.Rad').text('7mm');
      $('.KM').text('9Km');
      $('.ICA').text('16');
      $('.valorRadiacion').text('Medio');
      $("#ArrayanesradI3").removeClass("fondoGris");
      $("#ArrayanesradI3").addClass("arrayanesRI");

      $("#ArrayanesradI0").addClass("fondoGris");
      $("#ArrayanesradI2").addClass("fondoGris");
      $("#ArrayanesradI1").addClass("fondoGris");
      $("#ArrayanesradI4").addClass("fondoGris");
      $("#ArrayanesradI5").addClass("fondoGris");

      $("#ArrayanesradI0").removeClass("arrayanesRI");
      $("#ArrayanesradI2").removeClass("arrayanesRI");
      $("#ArrayanesradI1").removeClass("arrayanesRI");
      $("#ArrayanesradI4").removeClass("arrayanesRI");
      $("#ArrayanesradI5").removeClass("arrayanesRI");
      });

      $("#ArrayanesradI4").click(function () {
      $('.Rad').text('1mm');
      $('.KM').text('3Km');
      $('.ICA').text('10');
      $('.valorRadiacion').text('Bajo');
      $("#ArrayanesradI4").removeClass("fondoGris");
      $("#ArrayanesradI4").addClass("arrayanesRI");

      $("#ArrayanesradI0").addClass("fondoGris");
      $("#ArrayanesradI2").addClass("fondoGris");
      $("#ArrayanesradI3").addClass("fondoGris");
      $("#ArrayanesradI1").addClass("fondoGris");
      $("#ArrayanesradI5").addClass("fondoGris");

      $("#ArrayanesradI0").removeClass("arrayanesRI");
      $("#ArrayanesradI2").removeClass("arrayanesRI");
      $("#ArrayanesradI3").removeClass("arrayanesRI");
      $("#ArrayanesradI1").removeClass("arrayanesRI");
      $("#ArrayanesradI5").removeClass("arrayanesRI");
      });

      $("#ArrayanesradI5").click(function () {
      $('.Rad').text('3mm');
      $('.KM').text('5Km');
      $('.ICA').text('12');
      $('.valorRadiacion').text('Bajo');
      $("#ArrayanesradI5").removeClass("fondoGris");
      $("#ArrayanesradI5").addClass("arrayanesRI");

      $("#ArrayanesradI0").addClass("fondoGris");
      $("#ArrayanesradI2").addClass("fondoGris");
      $("#ArrayanesradI3").addClass("fondoGris");
      $("#ArrayanesradI4").addClass("fondoGris");
      $("#ArrayanesradI1").addClass("fondoGris");

      $("#ArrayanesradI0").removeClass("arrayanesRI");
      $("#ArrayanesradI2").removeClass("arrayanesRI");
      $("#ArrayanesradI3").removeClass("arrayanesRI");
      $("#ArrayanesradI4").removeClass("arrayanesRI");
      $("#ArrayanesradI1").removeClass("arrayanesRI");
      });

      //----- TEMPERATURA ARRAYANES VERANO ---------

      //Temperatura LOS ARRAYANES CALOR

      $("#CcalorV0").click(function() {
        $('.Grados').text('32');
        $('.ST').text('34°C');
        $('.PLL').text('1%');
        $("#CcalorV0").removeClass("fondoGris");
        $("#CcalorV0").addClass("cardonesMV");

        $("#CcalorV1").addClass("fondoGris");
        $("#CcalorV2").addClass("fondoGris");
        $("#CcalorV3").addClass("fondoGris");
        $("#CcalorV4").addClass("fondoGris");
        $("#CcalorV5").addClass("fondoGris");

        $("#CcalorV1").removeClass("cardonesMV");
        $("#CcalorV2").removeClass("cardonesMV");
        $("#CcalorV3").removeClass("cardonesMV");
        $("#CcalorV4").removeClass("cardonesMV");
        $("#CcalorV5").removeClass("cardonesMV");
      });

      $("#CcalorV1").click(function() {
        $('.Grados').text('30');
        $('.ST').text('34°C');
        $('.PLL').text('5%');
        $("#CcalorV1").removeClass("fondoGris");
        $("#CcalorV1").addClass("cardonesMV");

        $("#CcalorV0").addClass("fondoGris");
        $("#CcalorV2").addClass("fondoGris");
        $("#CcalorV3").addClass("fondoGris");
        $("#CcalorV4").addClass("fondoGris");
        $("#CcalorV5").addClass("fondoGris");

        $("#CcalorV0").removeClass("cardonesMV");
        $("#CcalorV2").removeClass("cardonesMV");
        $("#CcalorV3").removeClass("cardonesMV");
        $("#CcalorV4").removeClass("cardonesMV");
        $("#CcalorV5").removeClass("cardonesMV");
      });

      $("#CcalorV2").click(function() {
        $('.Grados').text('28');
        $('.ST').text('30°C');
        $('.PLL').text('0%');
        $("#CcalorV2").removeClass("fondoGris");
        $("#CcalorV2").addClass("cardonesMV");

        $("#CcalorV0").addClass("fondoGris");
        $("#CcalorV1").addClass("fondoGris");
        $("#CcalorV3").addClass("fondoGris");
        $("#CcalorV4").addClass("fondoGris");
        $("#CcalorV5").addClass("fondoGris");

        $("#CcalorV0").removeClass("cardonesMV");
        $("#CcalorV1").removeClass("cardonesMV");
        $("#CcalorV3").removeClass("cardonesMV");
        $("#CcalorV4").removeClass("cardonesMV");
        $("#CcalorV5").removeClass("cardonesMV");
      });


      $("#CcalorV3").click(function() {
        $('.Grados').text('27');
        $('.ST').text('26°C');
        $('.PLL').text('14%');
        $("#CcalorV3").removeClass("fondoGris");
        $("#CcalorV3").addClass("cardonesMV");

        $("#CcalorV0").addClass("fondoGris");
        $("#CcalorV1").addClass("fondoGris");
        $("#CcalorV2").addClass("fondoGris");
        $("#CcalorV4").addClass("fondoGris");
        $("#CcalorV5").addClass("fondoGris");

        $("#CcalorV0").removeClass("cardonesMV");
        $("#CcalorV1").removeClass("cardonesMV");
        $("#CcalorV2").removeClass("cardonesMV");
        $("#CcalorV4").removeClass("cardonesMV");
        $("#CcalorV5").removeClass("cardonesMV");
      });


      $("#CcalorV4").click(function() {
        $('.Grados').text('25');
        $('.ST').text('20°C');
        $('.PLL').text('10%');
        $("#CcalorV4").removeClass("fondoGris");
        $("#CcalorV4").addClass("cardonesMV");

        $("#CcalorV0").addClass("fondoGris");
        $("#CcalorV1").addClass("fondoGris");
        $("#CcalorV2").addClass("fondoGris");
        $("#CcalorV3").addClass("fondoGris");
        $("#CcalorV5").addClass("fondoGris");

        $("#CcalorV0").removeClass("cardonesMV");
        $("#CcalorV1").removeClass("cardonesMV");
        $("#CcalorV2").removeClass("cardonesMV");
        $("#CcalorV3").removeClass("cardonesMV");
        $("#CcalorV5").removeClass("cardonesMV");
      });

      $("#CcalorV5").click(function() {
        $('.Grados').text('25');
        $('.ST').text('23°C');
        $('.PLL').text('5%');
        $("#CcalorV5").removeClass("fondoGris");
        $("#CcalorV5").addClass("cardonesMV");

        $("#CcalorV0").addClass("fondoGris");
        $("#CcalorV1").addClass("fondoGris");
        $("#CcalorV2").addClass("fondoGris");
        $("#CcalorV3").addClass("fondoGris");
        $("#CcalorV4").addClass("fondoGris");

        $("#CcalorV0").removeClass("cardonesMV");
        $("#CcalorV1").removeClass("cardonesMV");
        $("#CcalorV2").removeClass("cardonesMV");
        $("#CcalorV3").removeClass("cardonesMV");
        $("#CcalorV4").removeClass("cardonesMV");
      });

      //Radiación LOS ARRAYANES CALOR

      $("#CradV0").click(function() {
        $('.Rad').text('7');
        $('.KM').text('13Km');
        $('.ICA').text('21');
        $('.valorRadiacion').text('Alto');
        $("#CradV0").removeClass("fondoGris");
        $("#CradV0").addClass("cardonesRV");

        $("#CradV1").addClass("fondoGris");
        $("#CradV2").addClass("fondoGris");
        $("#CradV3").addClass("fondoGris");
        $("#CradV4").addClass("fondoGris");
        $("#CradV5").addClass("fondoGris");

        $("#CradV1").removeClass("cardonesRV");
        $("#CradV2").removeClass("cardonesRV");
        $("#CradV3").removeClass("cardonesRV");
        $("#CradV4").removeClass("cardonesRV");
        $("#CradV5").removeClass("cardonesRV");
      });

      $("#CradV1").click(function() {
        $('.Rad').text('5');
        $('.KM').text('15Km');
        $('.ICA').text('20');
        $('.valorRadiacion').text('Medio');
        $("#CradV1").removeClass("fondoGris");
        $("#CradV1").addClass("cardonesRV");

        $("#CradV0").addClass("fondoGris");
        $("#CradV2").addClass("fondoGris");
        $("#CradV3").addClass("fondoGris");
        $("#CradV4").addClass("fondoGris");
        $("#CradV5").addClass("fondoGris");

        $("#CradV0").removeClass("cardonesRV");
        $("#CradV2").removeClass("cardonesRV");
        $("#CradV3").removeClass("cardonesRV");
        $("#CradV4").removeClass("cardonesRV");
        $("#CradV5").removeClass("cardonesRV");
      });

      $("#CradV2").click(function() {
        $('.Rad').text('4');
        $('.KM').text('15Km');
        $('.ICA').text('25');
        $('.valorRadiacion').text('Medio');
        $("#CradV2").removeClass("fondoGris");
        $("#CradV2").addClass("cardonesRV");

        $("#CradV0").addClass("fondoGris");
        $("#CradV1").addClass("fondoGris");
        $("#CradV3").addClass("fondoGris");
        $("#CradV4").addClass("fondoGris");
        $("#CradV5").addClass("fondoGris");

        $("#CradV0").removeClass("cardonesRV");
        $("#CradV1").removeClass("cardonesRV");
        $("#CradV3").removeClass("cardonesRV");
        $("#CradV4").removeClass("cardonesRV");
        $("#CradV5").removeClass("cardonesRV");
      });

      $("#CradV3").click(function() {
        $('.Rad').text('3');
        $('.KM').text('20Km');
        $('.ICA').text('18');
        $('.valorRadiacion').text('Medio');
        $("#CradV3").removeClass("fondoGris");
        $("#CradV3").addClass("cardonesRV");

        $("#CradV0").addClass("fondoGris");
        $("#CradV1").addClass("fondoGris");
        $("#CradV2").addClass("fondoGris");
        $("#CradV4").addClass("fondoGris");
        $("#CradV5").addClass("fondoGris");

        $("#CradV0").removeClass("cardonesRV");
        $("#CradV1").removeClass("cardonesRV");
        $("#CradV2").removeClass("cardonesRV");
        $("#CradV4").removeClass("cardonesRV");
        $("#CradV5").removeClass("cardonesRV");
      });

      $("#CradV4").click(function() {
        $('.Rad').text('3');
        $('.KM').text('23Km');
        $('.ICA').text('22');
        $('.valorRadiacion').text('Medio');
        $("#CradV4").removeClass("fondoGris");
        $("#CradV4").addClass("cardonesRV");

        $("#CradV0").addClass("fondoGris");
        $("#CradV1").addClass("fondoGris");
        $("#CradV2").addClass("fondoGris");
        $("#CradV3").addClass("fondoGris");
        $("#CradV5").addClass("fondoGris");

        $("#CradV0").removeClass("cardonesRV");
        $("#CradV1").removeClass("cardonesRV");
        $("#CradV2").removeClass("cardonesRV");
        $("#CradV3").removeClass("cardonesRV");
        $("#CradV5").removeClass("cardonesRV");
      });

      $("#CradV5").click(function() {
        $('.Rad').text('2');
        $('.KM').text('25Km');
        $('.ICA').text('21');
        $('.valorRadiacion').text('Bajo');
        $("#CradV5").removeClass("fondoGris");
        $("#CradV5").addClass("cardonesRV");

        $("#CradV0").addClass("fondoGris");
        $("#CradV1").addClass("fondoGris");
        $("#CradV2").addClass("fondoGris");
        $("#CradV3").addClass("fondoGris");
        $("#CradV4").addClass("fondoGris");

        $("#CradV0").removeClass("cardonesRV");
        $("#CradV1").removeClass("cardonesRV");
        $("#CradV2").removeClass("cardonesRV");
        $("#CradV3").removeClass("cardonesRV");
        $("#CradV4").removeClass("cardonesRV");
      });

    });
