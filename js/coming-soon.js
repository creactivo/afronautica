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


$('#boton-inferiores').on('click','a',function(){
    $target1.removeClass().addClass($(this).attr('id'));
    console.log($(this).attr('id'));
});

$($class1).on('click',function(){
    $target1.removeClass();
});