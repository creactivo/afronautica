var $target1 = $('#aparecido1,#aparecido2,#aparecido3,#aparecido4,#aparecido5,#aparecido1b,#aparecido2b,#aparecido3b,#aparecido4b,#aparecido1c,#aparecido2c,#aparecido3c,#aparecido4c,#aparecido1d,#aparecido2d,#aparecido3d,#aparecido4d,#aparecido1e,#aparecido2e,#aparecido3e,#aparecido4e');
var $target2 = $('#boton-inferiores1,#boton-inferiores2,#boton-inferiores3,#boton-inferiores4,#boton-inferiores5')
var $classbtcerrar1 = $('#boton-cerrar1,#boton-cerrar2');

var $class2a = $('#boton1a,#boton2a,#boton3a,#boton4a,#boton5a,#boton1b,#boton2b,#boton3b,#boton4b,#boton5b,#boton1c,#boton2c,#boton3c,#boton4c,#boton5c,#boton1d,#boton2d,#boton3d,#boton4d,#boton5d,#boton1e,#boton2e,#boton3e,#boton4e,#boton5e');
var $class3 = $('#boton-menu1,#boton-menu3,#logo,#boton-menu3,#boton1a,#boton2a,#boton3a,#boton4a,#boton5a,#boton1b,#boton2b,#boton3b,#boton4b,#boton5b,#boton1c,#boton2c,#boton3c,#boton4c,#boton5c,#boton1d,#boton2d,#boton3d,#boton4d,#boton5d,#boton1e,#boton2e,#boton3e,#boton4e,#boton5e,#gran-icono1,#gran-icono2,#gran-icono3,#gran-icono4,#gran-icono5');

var $class4 = $('#boton-menu1');
var $class4b = $('#boton-menu3');
var $class4c = $('#carrodeCompras,#btn-haburger-menu');
var $class5 = $('#carrodeCompras');
var $class5b = $('#btn-haburger-menu');
var $class5c = $('#navbarHeader');
var $class6 = $('#boton-menu1');
var $class7 = $('#boton-menu1,#logo,#boton-menu3,#gran-icono1,#gran-icono2,#gran-icono3,#gran-icono4,#gran-icono5');




$($class4).on('click',function(){
    $class4b.toggleClass('blue');
});
$($class4b).on('click',function(){
    $class4.removeClass('blue').addClass('blue');
});