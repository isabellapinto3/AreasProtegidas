
$(document).ready(function () {   //esto es un IF
  $("#calorV0").click(function () {
  $('.Grados').text('24');
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
  $('.Grados').text('20');
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
  });
