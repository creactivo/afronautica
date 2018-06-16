var $target1 = $('#aparecido1,#aparecido2,#aparecido3,#aparecido4');
var $target2 = $('#aparecido1b,#aparecido2b,#aparecido3b,#aparecido4b');
var $target3 = $('#aparecido1c,#aparecido2c,#aparecido3c,#aparecido4c');
var $target4 = $('#aparecido1d,#aparecido2d,#aparecido3d,#aparecido4d');
var $target5 = $('#aparecido1e,#aparecido2e,#aparecido3e,#aparecido4e');

var $classbtcerrar1 = $('#boton-cerrar1,#boton-cerrar2');

var $class2a = $('#boton1,#boton2,#boton3,#boton4');
var $class2b = $('#boton5,#boton6,#boton7,#boton8');
var $class2c = $('#boton9,#boton10,#boton11,#boton12');
var $class2d = $('#boton13,#boton14,#boton15,#boton16');
var $class2e = $('#boton17,#boton18,#boton19,#boton20');


var $class3 = $('#boton-menu1,#logo,#boton-menu3,#boton1,#boton2,#boton3,#boton4,#boton5,#boton6,#boton7,#boton8,#boton9,#boton10,#boton11,#boton12,#boton13,#boton14,#boton15,#boton16,#boton17,#boton18,#boton19,#boton20,#gran-icono1,#gran-icono2,#gran-icono3,#gran-icono4,#gran-icono5');



var $class4 = $('#boton-menu1');
var $class5 = $('#carrodeCompras');
var $class6 = $('#boton-menu1');
var $class7 = $('#boton-menu1,#logo,#boton-menu3,#gran-icono1,#gran-icono2,#gran-icono3,#gran-icono4,#gran-icono5');


var $contenedorParalax1 = $("#contenedor-paralax1");
var $contenedorParalax2 = $("#contenedor-paralax2");
var $contenedorParalax3 = $("#contenedor-paralax3");
var $contenedorParalax4 = $("#contenedor-paralax4");
var $paralaxSlide1 = $('#slide-paralax1');
var $paralaxSlide2 = $('#slide-paralax2');
var $paralaxSlide3 = $('#slide-paralax3');
var $paralaxSlide4 = $('#slide-paralax4');

var $contenedorParalax1b = $("#contenedor-paralax1b");
var $contenedorParalax2b = $("#contenedor-paralax2b");
var $contenedorParalax3b = $("#contenedor-paralax3b");
var $contenedorParalax4b = $("#contenedor-paralax4b");
var $paralaxSlide1b = $('#slide-paralax1b');
var $paralaxSlide2b = $('#slide-paralax2b');
var $paralaxSlide3b = $('#slide-paralax3b');
var $paralaxSlide4b = $('#slide-paralax4b');

var $contenedorParalax1c = $("#contenedor-paralax1c");
var $contenedorParalax2c = $("#contenedor-paralax2c");
var $contenedorParalax3c = $("#contenedor-paralax3c");
var $contenedorParalax4c = $("#contenedor-paralax4c");
var $paralaxSlide1c = $('#slide-paralax1c');
var $paralaxSlide2c = $('#slide-paralax2c');
var $paralaxSlide3c = $('#slide-paralax3c');
var $paralaxSlide4c = $('#slide-paralax4c');

var $contenedorParalax1d = $("#contenedor-paralax1d");
var $contenedorParalax2d = $("#contenedor-paralax2d");
var $contenedorParalax3d = $("#contenedor-paralax3d");
var $contenedorParalax4d = $("#contenedor-paralax4d");
var $paralaxSlide1d = $('#slide-paralax1d');
var $paralaxSlide2d = $('#slide-paralax2d');
var $paralaxSlide3d = $('#slide-paralax3d');
var $paralaxSlide4d = $('#slide-paralax4d');

var $contenedorParalax1e = $("#contenedor-paralax1e");
var $contenedorParalax2e = $("#contenedor-paralax2e");
var $contenedorParalax3e = $("#contenedor-paralax3e");
var $contenedorParalax4e = $("#contenedor-paralax4e");
var $paralaxSlide1e = $('#slide-paralax1e');
var $paralaxSlide2e = $('#slide-paralax2e');
var $paralaxSlide3e = $('#slide-paralax3e');
var $paralaxSlide4e = $('#slide-paralax4e');

(function(){
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: "mp4/bg.mp4",
    poster: "img/bg-mobile-fallback.jpg"
  }, {
    posterType: 'jpg'
  })
})(jQuery);

 // Agrega color inverso animacion-
 //a los contenedores que aprecen horizontalmente
$('#boton-inferiores1').on('click','a',function(){
    $target1.removeClass().addClass($(this).attr('id'));

});
$('#boton-inferiores2').on('click','a',function(){
    $target2.removeClass().addClass($(this).attr('id'));

});
$('#boton-inferiores3').on('click','a',function(){
    $target3.removeClass().addClass($(this).attr('id'));

});
$('#boton-inferiores4').on('click','a',function(){
    $target4.removeClass().addClass($(this).attr('id'));

});
$('#boton-inferiores5').on('click','a',function(){
    $target5.removeClass().addClass($(this).attr('id'));

});

/*if (($class2 != ('click')){
  function(){
    $class6.addClass('blue');
    document.write("holla"); }
}*/

$($class4).on('click',function(){
    $class5.toggleClass('animate');
});
 // Elimina las animacion de los
 //contenedores que aprecen horizontalmente
$($classbtcerrar1).on('click',function(){
    $target1.removeClass();
});

$($classbtcerrar1).on('click',function(){
    $target2.removeClass();
});

$($classbtcerrar1).on('click',function(){
    $target3.removeClass();
});

$($classbtcerrar1).on('click',function(){
    $target4.removeClass();
});

$($classbtcerrar1).on('click',function(){
    $target5.removeClass();
});
// al precionar los botones inferiores
// Agrega color a los botones de el layout colocandolos azules
$($class2a).bind('click',function(){
    $($class3).addClass('blue');
});
$($class2b).bind('click',function(){
    $($class3).addClass('blue');
});
$($class2c).bind('click',function(){
    $($class3).addClass('blue');
});
$($class2d).bind('click',function(){
    $($class3).addClass('blue');
});
$($class2e).bind('click',function(){
    $($class3).addClass('blue');
});
// al precionar los botones inferiores
// Elimina color a los botones de el layout colocandolos azules
$($classbtcerrar1).on('click',function(){
    $class3.removeClass('blue');
});



// Agrega si no tienen color a los botones de el layout colocandolos azules
//$($class4).bind('click',function(){
 //   $($class3).toggleClass('blue');
//});

// BLOQUE PARALAX 1
//codigo para que funcione el parallax 1

$($contenedorParalax1).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide1, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide1);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 2

$($contenedorParalax2).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide2, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide2);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 3

$($contenedorParalax3).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide3, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide3);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 4

$($contenedorParalax4).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide4, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide4);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
// BLOQUE PARALAX 2
//codigo para que funcione el parallax 1

$($contenedorParalax1b).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide1b, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide1b);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 2

$($contenedorParalax2b).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide2b, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide2b);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 3

$($contenedorParalax3b).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide3b, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide3b);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 4

$($contenedorParalax4b).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide4b, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide4b);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}// BLOQUE PARALAX 3
//codigo para que funcione el parallax 1

$($contenedorParalax1c).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide1c, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide1c);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 2

$($contenedorParalax2c).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide2c, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide2c);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 3

$($contenedorParalax3c).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide3c, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide3c);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 4

$($contenedorParalax4c).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide4c, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide4c);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}// BLOQUE PARALAX 4
//codigo para que funcione el parallax 1

$($contenedorParalax1d).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide1d, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide1d);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 2

$($contenedorParalax2d).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide2d, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide2d);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 3

$($contenedorParalax3d).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide3d, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide3d);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 4

$($contenedorParalax4d).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide4d, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide4d);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}// BLOQUE PARALAX 5
//codigo para que funcione el parallax 1

$($contenedorParalax1e).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide1e, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide1e);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 2

$($contenedorParalax2e).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide2e, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide2e);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 3

$($contenedorParalax3e).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide3e, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide3e);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
//codigo para que funcione el parallax 4

$($contenedorParalax4e).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide4e, -50);
  parallaxIt(e, "img", -30);
})

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide4e);
  var relX = e.pageX - $this.offset().top;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}