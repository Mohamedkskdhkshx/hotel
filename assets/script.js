$( function() {
    $("#Check-In" ).datepicker();
    $("#Check-out" ).datepicker();
    $('.slider').slick({
       dots:true,
       
    });

  } );


let iPlay = document.getElementById("i-play")
let iPause = document.getElementById("i-pause")
let video = document.getElementById("video")
let overlay = document.getElementsByClassName("overlay")


iPlay.addEventListener("click",function(){
   if(video.paused){
      video.play()
       video.hide()
     
   }else{
      video.pause();
    
   }

})
