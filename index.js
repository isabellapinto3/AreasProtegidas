$(document).ready(function(){
    //
    // CAMBIOS DE PANTALLA
    //
    $("#botonIniciar").click(function() {
      $("#pregunta-1").show();
      $("#pregunta-2").hide();
      $("#pregunta-3").hide();
      $("#pregunta-3-2").hide();
      $("#pregunta-4").hide();
      //
      $(".portada-encuesta").hide();
    });

    $(".preg1-img").click(function() {
      $("#pregunta-1").hide();
      $("#pregunta-2").show();
      $("#pregunta-3").hide();
      $("#pregunta-3-2").hide();
      $("#pregunta-4").hide();
    });

    $("#p2b1").click(function() {
      $("#pregunta-1").hide();
      $("#pregunta-2").hide();
      $("#pregunta-3").show();
      $("#pregunta-3-2").hide();
      $("#pregunta-4").hide();
    });

    $("#p2b2").click(function() {
      $("#pregunta-1").hide();
      $("#pregunta-2").hide();
      $("#pregunta-3").hide();
      $("#pregunta-3-2").show();
      $("#pregunta-4").hide();
    });

    $(".preg3-img").click(function() {
      $("#pregunta-1").hide();
      $("#pregunta-2").hide();
      $("#pregunta-3").hide();
      $("#pregunta-3-2").hide();
      $("#pregunta-4").show();
    });
    $(".preg32-img").click(function() {
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
    var region, visitante, estacion, especie, hospedaje;
    $("#p1b1,#p1b3").click(function() {
    region = "calor";
    console.log(region);
    });
    $("#p1b4,#p1b2").click(function() {
    region = "frio";
    console.log(region);
    });
    // preg 2
    $("#p2b1").click(function() {
    visitante = "activo";
    console.log(visitante);
    });
    $("#p2b2").click(function() {
    visitante = "pasivo";
    console.log(visitante);
    });
    // preg 3
    $("#p3b1,#p3b3").click(function() {
    estacion = "calor";
    console.log(estacion);
    });
    $("#p3b4,#p3b2").click(function() {
    estacion = "frio";
    console.log(estacion);
    });
    // preg 3-2
    $("#p32b1,#p32b3").click(function() {
    especie = "flora";
    console.log(especie);
    });
    $("#p32b4,#p32b2").click(function() {
    especie = "fauna";
    console.log(especie);
    });
    // preg 4
    $("#p4b1").click(function() {
    hospedaje = "carpa";
    console.log(hospedaje);
    });
    $("#p4b2").click(function() {
    hospedaje = "hotel";
    console.log(hospedaje);
    });

    //  Condicionales encuesta
    //frio
    //Nahuel huapi
    if(region == "frio" && visitante == "activo" && estacion == "frio"){
      //var x = document.getElementById('nahuelhuapi.html').innerHTML;   
      console.log("hola");   
    }
    //Los glaciares
    if(region == "frio" && visitante == "activo" && estacion == "calor" && hospedaje =="hotel"){
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }
    //Tierra del fuego
    if(region == "frio" && visitante == "activo" && estacion == "calor" && hospedaje =="carpa"){
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }
    //Lago puelo
    if(region == "frio" && visitante == "pasivo" && especie == "flora"){
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }
    //Arrayanes
    if(region == "frio" && visitante == "pasivo" && especie == "fauna"){
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }

    
    //calor
    //Iguazu
    if(region == "calor" && visitante == "activo" && estacion == "calor" && hospedaje =="hotel"){
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }
    //El palmar
    if(region == "calor" && visitante == "activo" && estacion == "calor" && hospedaje =="carpa"){
      console.log(hola);
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }
    //Los cardones
    if(region == "calor" && visitante == "pasivo" && especie == "fauna"){
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }
    //Talampaya
    if(region == "calor" && visitante == "pasivo" && especie == "flora"){
      var x = document.getElementById('nahuelhuapi.html').innerHTML;
    }

});
