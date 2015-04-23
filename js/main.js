// Scroll to fixed
$(window).scroll(function(){
    if ($(this).scrollTop() > 47) {
        $('.listFarms').addClass('fixed');
        $('.listModules').addClass('fixed');
    } else {
        $('.listFarms').removeClass('fixed');
        $('.listModules').removeClass('fixed');
    }
});


$(document).ready(function() {

  $('[data-toggle=tab]').click(function(){
    if ($(this).parent().hasClass('active')){
      $($(this).attr("href")).toggleClass('active');
      $(this).toggleClass('inactive');
    }

  })

});