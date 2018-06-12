var $target1 = $('#aparecido1,#aparecido2,#aparecido3,#aparecido4');
var $class1 = $('#boton-cerrar1,#boton-cerrar2');
var $class2 = $('#boton1,#boton2,#boton3,#boton4');
var $class3 = $('#boton-menu1,#logo,#boton-menu3,#boton1,#boton2,#boton3,#boton4,#gran-icono1,#gran-icono2,#gran-icono3,#gran-icono4,#gran-icono5');
var $class4 = $('#boton-menu1');
var $class5 = $('#carrodeCompras');
var $containerParalax = $('#contenedor-paralax1,#contenedor-paralax2,#contenedor-paralax3,#contenedor-paralax4');
var $paralaxSlide = $('#slide-paralax1,#slide-paralax2,#slide-paralax3,#slide-paralax4');



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

//codigo para que funcione el parallax

$($containerParalax).mousemove(function(e) {
  parallaxIt(e, $paralaxSlide, -50);
  parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $($paralaxSlide);
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
