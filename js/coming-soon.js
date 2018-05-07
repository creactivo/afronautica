(function(){
	"use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: "mp4/bg.mp4",
    poster: "img/bg-mobile-fallback.jpg"
  }, {
    posterType: 'jpg'
  })
})(jQuery)

// let demo = function(){
	
// 	if($("#flag").val() == 0){
//             $("#flag").val(1)    
//         }else{
//             $("#flag").val(0)
//         }
        
//         if($("#flag").val()==1){
//             $(".aparecido").show(2000);
//         }else{
//              $(".aparecido").hide(2000);
//         }
// };


function mostrar(){
var section = document.getElementById('aparecido2');
    section.style.display = none;
}
/*if($("#flag").val() == 0){
            $("#flag").val(1)    
        }else{
            $("#flag").val(0)
        }
        
        if($("#flag").val()==1){
            $("#id_tope").hide(1500);
        }else{
            $("#id_tope").show(1500);
        }*/