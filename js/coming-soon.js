var $target1 = $('#aparecido1,#aparecido2');
var $class1 = $('#boton-cerrar1,#boton-cerrar2');



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

//codigo para que funcione el parallax

$('#boton-inferiores').on('click','a',function(){
    $target1.removeClass().addClass($(this).attr('id'));
    console.log($(this).attr('id'));
});

$($class1).on('click',function(){
    $target1.removeClass();
});

$("#contenedor-paralax").mousemove(function(e) {
  parallaxIt(e, ".slide-paralax", -100);
  parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $("#contenedor-paralax");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
