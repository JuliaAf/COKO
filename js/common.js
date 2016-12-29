$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 75){
      $(".header").addClass("header--sticky");
    }
    else{
      $(".header").removeClass("header--sticky");
    };
  });

  if($(window).width() > 768){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top -50;
        $("body,html").animate({scrollTop: top}, 500);
        return false;
    })
  };

  $(function (){
    $(".scrollTop").click(function (e){
      e.preventDefault;
      $("body,html").animate({
        scrollTop:0
      }, 500);
      return false;
    });
  });

  wow = new WOW(
     {
     boxClass:     'wow',      // default
     animateClass: 'animated', // default
     offset:       0,          // default
     mobile:       true,       // default
     live:         true        // default
   }
   )
   wow.init();

   $(".modal").fancybox({
    width:600,
    height:350,
    autoScale:true,
    centerOnScroll:true,
    autoDimensions:true,
    type:'iframe'
  });
})//ready-end
