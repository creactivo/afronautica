// carousel efecto paralax


// Carousel 1
var $carouselContenedorParalaxprimero = $("#caroucel-paralaxprimero");
var $carouselContenedorParalaxsegundo = $("#caroucel-paralaxsegundo");
var $carouselContenedorParalaxtercero = $("#caroucel-paralaxtercero");

var $carouselParalaxSlideprimero = $("#slide-carousel-paralaxprimero");
var $carouselParalaxSlidesegundo = $("#slide-carousel-paralaxsegundo");
var $carouselParalaxSlidetercero = $("#slide-carousel-paralaxtercero");

var $carouselImgSlideprimero = $("#img-carouselprimero");
var $carouselImgSlidesegundo = $("#img-carouselsegundo");
var $carouselImgSlidetercero = $("#img-carouseltercero");


var $carouselSubimgSlideprimero = $("#subimg-carouselprimero");
var $carouselSubimgSlidesegundo = $("#subimg-carouselsegundo");
var $carouselSubimgSlidetercero = $("#subimg-carouseltercero");




// carousel paralax 1

$($carouselContenedorParalaxprimero).mousemove(function(e) {
  parallaxIt(e, $carouselParalaxSlideprimero, -60);
  parallaxIt(e, $carouselImgSlideprimero, -30);
  parallaxIt(e, $carouselSubimgSlideprimero, -10);
});

function parallaxIt(e, target, movement) {
  var $this = $($carouselParalaxSlideprimero);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

$($carouselContenedorParalaxsegundo).mousemove(function(e) {
  parallaxIt(e, $carouselParalaxSlidesegundo, -60);
  parallaxIt(e, $carouselImgSlidesegundo, -30);
  parallaxIt(e, $carouselSubimgSlidesegundo, -20);
});

function parallaxIt(e, target, movement) {
  var $this = $($carouselParalaxSlidesegundo);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
// carousel paralax 3

$($carouselContenedorParalaxtercero).mousemove(function(e) {
  parallaxIt(e, $carouselParalaxSlidetercero, -50),
  parallaxIt(e, $carouselImgSlidetercero, -40),
  parallaxIt(e, $carouselSubimgSlidetercero, -30);
});

function parallaxIt(e, target, movement) {
  var $this = $($carouselParalaxSlidetercero);
  var relX = e.pageX - $this.offset().right;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {

    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


