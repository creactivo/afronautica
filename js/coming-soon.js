var $target1 = $('#aparecido1,#aparecido2,#aparecido3,#aparecido4');
var $class1 = $('#boton-cerrar1,#boton-cerrar2');
var $class2 = $('#boton1,#boton2,#boton3,#boton4');
var $class3 = $('#boton-menu1,#logo,#boton-menu3,#boton1,#boton2,#boton3,#boton4,#gran-icono1,#gran-icono2,#gran-icono3,#gran-icono4,#gran-icono5');
var $class4 = $('#boton-menu1');
var $class5 = $('#carrodeCompras');
var $containerParalax = $('#contenedor-paralax1,#contenedor-paralax2,#contenedor-paralax3,#contenedor-paralax4');
var $paralaxSlide = $('#slide-paralax1,#slide-paralax2,#slide-paralax3,#slide-paralax4');

var $contenedorParalax1 = $("#contenedor-paralax1");
var $contenedorParalax2 = $("#contenedor-paralax2");
var $contenedorParalax3 = $("#contenedor-paralax3");
var $contenedorParalax4 = $("#contenedor-paralax4");
var $paralaxSlide1 = $('#slide-paralax1');
var $paralaxSlide2 = $('#slide-paralax2');
var $paralaxSlide3 = $('#slide-paralax3');
var $paralaxSlide4 = $('#slide-paralax4');



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


$('#boton-inferiores').on('click','a',function(){
    $target1.removeClass().addClass($(this).attr('id'));

});

$($class4).on('click',function(){
    $class5.toggleClass('animate');

});
$($class1).on('click',function(){
    $target1.removeClass();
});

$($class2).bind('click',function(){
    $($class3).addClass('yellow');
});


$($class1).on('click',function(){
    $class3.removeClass('yellow');
});

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
