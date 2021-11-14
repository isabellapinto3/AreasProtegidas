$(document).ready(function () {
  //BOTON Mapa
  $(".boton-mapa").click(function () {
      $(".container-boton-mapa").animate({"left": '-=200'});

    });

  //
  // CAMBIOS DE PANTALLA
  //
  $("#botonIniciar").click(function () {
    $("#pregunta-1").show();
    $("#pregunta-2").hide();
    $("#pregunta-3").hide();
    $("#pregunta-3-2").hide();
    $("#pregunta-4").hide();
    //
    $(".portada-encuesta").hide();
  });

  $(".preg1-img").click(function () {
    $("#pregunta-1").hide();
    $("#pregunta-2").show();
    $("#pregunta-3").hide();
    $("#pregunta-3-2").hide();
    $("#pregunta-4").hide();
  });

  $("#p2b1").click(function () {
    $("#pregunta-1").hide();
    $("#pregunta-2").hide();
    $("#pregunta-3").show();
    $("#pregunta-3-2").hide();
    $("#pregunta-4").hide();
  });

  $("#p2b2").click(function () {
    $("#pregunta-1").hide();
    $("#pregunta-2").hide();
    $("#pregunta-3").hide();
    $("#pregunta-3-2").show();
    $("#pregunta-4").hide();
  });

  $(".preg3-img").click(function () {
    $("#pregunta-1").hide();
    $("#pregunta-2").hide();
    $("#pregunta-3").hide();
    $("#pregunta-3-2").hide();
    $("#pregunta-4").show();
  });
  $(".preg32-img").click(function () {
    $("#pregunta-1").hide();
    $("#pregunta-2").hide();
    $("#pregunta-3").hide();
    $("#pregunta-3-2").hide();
    $("#pregunta-4").show();
  });
  //
  // VARIABLES
  //
  // preg 1
  let region, visitante, estacion, especie, hospedaje;
  $("#p1b1,#p1b3").click(function () {
    region = "calor";
    console.log(region);
  });
  $("#p1b4,#p1b2").click(function () {
    region = "frio";
    console.log(region);
  });
  // preg 2
  $("#p2b1").click(function () {
    visitante = "activo";
    console.log(visitante);
  });
  $("#p2b2").click(function () {
    visitante = "pasivo";
    console.log(visitante);
  });
  // preg 3
  $("#p3b1,#p3b3").click(function () {
    estacion = "calor";
    console.log(estacion);
  });
  $("#p3b4,#p3b2").click(function () {
    estacion = "frio";
    console.log(estacion);
  });
  // preg 3-2
  $("#p32b1,#p32b3").click(function () {
    especie = "flora";
    console.log(especie);
  });
  $("#p32b4,#p32b2").click(function () {
    especie = "fauna";
    console.log(especie);
  });
  // preg 4
  $("#p4b1").click(function () {
    hospedaje = "carpa";
    console.log(hospedaje);
    selector();
  });
  $("#p4b2").click(function () {
    hospedaje = "hotel";
    console.log(hospedaje);
    selector();
  });

  function selector() {
    //  Condicionales encuesta
    //frio
    //Nahuel huapi
    if (region == "frio" && visitante == "activo" && estacion == "frio") {
      window.location.assign('nahuelhuapi.html');
      $(".preg4-img").click(function() {
        window.location.assign('nahuelhuapi.html');
        return false;
     });
      //var x = document.getElementById('nahuelhuapi.html').innerHTML;

    }
    //Los glaciares
    if (region == "frio" && visitante == "activo" && estacion == "calor" && hospedaje == "hotel") {
      window.location.assign('losglaciares.html');
      $(".preg4-img").click(function() {
        window.location.assign('losglaciares.html');
        return false;
     });
    }
    //Tierra del fuego
    if (region == "frio" && visitante == "activo" && estacion == "calor" && hospedaje == "carpa") {
      window.location.assign('tierradelfuego.html');
      $(".preg4-img").click(function() {
        window.location.assign('tierradelfuego.html');
        return false;
     });
    }
    //Lago puelo
    if (region == "frio" && visitante == "pasivo" && especie == "flora") {
      window.location.assign('lagopuelo.html');
      $(".preg4-img").click(function() {
        window.location.assign('lagopuelo.html');
        return false;
     });
    }
    //Arrayanes
    if (region == "frio" && visitante == "pasivo" && especie == "fauna") {
      window.location.assign('losarrayanes.html');
      $(".preg4-img").click(function() {
        window.location.assign('losarrayanes.html');
        return false;
     });
    }


    //calor
    //Iguazu
    if (region == "calor" && visitante == "activo" && estacion == "calor" && hospedaje == "hotel") {
      window.location.assign('iguazu.html');
      $(".preg4-img").click(function() {
        window.location.assign('iguazu.html');
        return false;
     });
    }
    //El palmar
    if (region == "calor" && visitante == "activo" && estacion == "calor" && hospedaje == "carpa") {

      window.location.assign('elpalmar.html');
      $(".preg4-img").click(function() {
        window.location.assign('elpalmar.html');
        return false;
     });
    }
    //Los cardones
    if (region == "calor" && visitante == "pasivo" && especie == "fauna") {
      window.location.assign('loscardones.html');
      $(".preg4-img").click(function() {
        window.location.assign('loscardones.html');
        return false;
     });
    }
    //Talampaya
    if (region == "calor" && visitante == "pasivo" && especie == "flora") {
      window.location.assign('talampaya.html');
      $(".preg4-img").click(function() {
        window.location.assign('talampaya.html');
        return false;
     });
    }
  }




});

$('.open-link').click(function(){
  window.open('nahuelhuapi.html');
  return false;
});
