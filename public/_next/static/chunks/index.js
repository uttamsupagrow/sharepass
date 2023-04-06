
var scrollElements = document.querySelectorAll(".js-scroll");

var elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

var elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

var displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

var hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

var handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});






  $(document).ready(function(){

  //  var element_position1 = $('#chapter1').offset().top;
  //  var element_position2 = $('#chapter2').offset().top;
  //  var element_position3 = $('#chapter3').offset().top;
  //   $(window).scroll(function (event) {
  //       var y_scroll_pos1 = window.pageYOffset;
  //   var scroll_pos_test1 = element_position1;

  //   if(y_scroll_pos1 > scroll_pos_test1) {
  //       $("#c1").css("display","inline");
  //        $("#c2").css("display","none");
  //         $("#c3").css("display","none");
  //   }




  //   var y_scroll_pos2 = window.pageYOffset;
  //   var scroll_pos_test2 = element_position2;

  //   if(y_scroll_pos2 > scroll_pos_test2) {
  //      $("#c1").css("display","none");
  //        $("#c2").css("display","inline");
  //         $("#c3").css("display","none");
  //   }



  //   var y_scroll_pos3 = window.pageYOffset;
  //   var scroll_pos_test3 = element_position3;

  //   if(y_scroll_pos3 > scroll_pos_test3) {
  //        $("#c1").css("display","none");
  //        $("#c2").css("display","none");
  //         $("#c3").css("display","inline");
  //   }
  //   });




  
$(window).scroll(function() {
  
  var wS = $(this).scrollTop();
  
if (wS >=7500 && wS <=7900){

  $("#c1").css("display","inline");
    $("#c2").css("display","none");
     $("#c3").css("display","none");
}
else if (wS >=7900 && wS <=8300){
  $("#c1").css("display","none");
    $("#c2").css("display","inline");
     $("#c3").css("display","none");
}

else if (wS >=8300 ){
   $("#c1").css("display","none");
    $("#c2").css("display","none");
     $("#c3").css("display","inline");
}
});

    




})


$(document).ready(function(){


  var flag="Password";
  $('.Show').click(function() {
  $('#target2').show(500);
  $('.Show').hide(0);
  $('#target').hide(0);
   $('#target1').hide(0);
  $('.Hide').show(0);
});
$('.Hide').click(function() {
  $('#target2').hide(500);
    
  $('.Show').show(0);
  $('.Hide').hide(0);

  if(flag=="Message")
  {   
     $('#target').show(500);
     
  }  
  else
  {
    $('#target1').show(500);
  }
  
});

$('.pass').click(function() {
  flag="Password";

});

$('.msg').click(function() {
  flag="Message";
});

$('.toggle').click(function() {
  $('#target').toggle('slow');
});

});


$(document).ready(function() {
  $("#btn_password").click(function() {
  
    if ($("#id_password").val() == "")
    {
      $("#id_password").effect("shake");
      $("#id_password").css("border","2px solid red");
    }
    else{
      $("#id_password").css("border","2px solid white");
    }
  });


  $("#btn_msg").click(function() {
  
    if ($("#id_msg").val() == "")
    {
      $("#id_msg").effect("shake");
      $("#id_msg").css("border","2px solid red");
    }
    else{
      $("#id_msg").css("border","2px solid white");
    }
  });
});









