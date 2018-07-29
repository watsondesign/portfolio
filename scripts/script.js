// Tyler Watson portfolio
// javascript bullshit
//
// 2018


var images = {
  "gladwell series" : "gladwell_series.png",
  "frame magazine" : "frame_magazine.png",
  "arsia" : "arsia.png",
  "ÆOLIA" : "ÆOLIA.png",
  "EET" : "EET.png",
  "motion reel" : "motion reel.png",
  "panopticon" : "panopticon.png",
  "Air & Space" : "Air & Space.png",
  "MV Agusta" : "Mv Agusta.png"
};

$(function() {

  var back = $('.back img');
  var front = $('.front img');

    $("li")
        .mouseover(function(){
            var name = $(this).text();
            var src = "images/" + images[name];

            if (back.is(":animated")){
              //if back image is animating then we stop it's animation and fade in the front image
              back.stop(true,false).fadeOut(300);
              front.attr({"src":src}).stop(true,true).hide().fadeIn(800).queue(false);
            }
            else{
              //fade in the back when complete assign it to the front
              back.attr({"src":src}).stop(true, true).hide().fadeIn(800,function(){
                front.attr({"src":src}).stop(true, true).show();
                back.removeAttr("src");
              }).queue(false);
            }

        })
        .mouseout(function() {
          if (back.is(":animated")){
            //if back is in transition to fading in (or just animating) fade out
            back.stop(true,false).fadeOut(300).queue(false);
          }
          else {
            front.stop(true,true).fadeOut(800).queue(false);
          }
        });

});
