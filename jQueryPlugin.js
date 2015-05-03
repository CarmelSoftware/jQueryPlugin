(function( $ ){
$.fn.customize = function(option1,option2){

  this.animate({
      left:'250px',
      opacity:'0.5',
      height:'150px',
      width:'150px',
      borderRadius:'10px'
    }).css("color",option2)
      .css("background",option1)
      .fadeIn(3000)
      .slideUp(2000)
      .slideDown(2000)
      .fadeOut(3000);

return this;

};


}(jQuery));

