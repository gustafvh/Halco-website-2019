$(document).ready(function(){

  $(".nav-items").click(function(){
    // $(this).hide("slow");
    $("").toggleClass("main");
  });

  $(".TabTwo, .TabThree, .TabFour").hide();
  $(".LabelOne").css({"color": "#186cb5", "border-left": "5px solid #186cb5"});


  $(".LabelOne").click(function(){
    $(".TabOne").show("slow");
    $(".TabTwo, .TabThree, .TabFour").hide();
    $(".LabelOne").css({"color": "#186cb5", "border-left": "5px solid #186cb5"});
    $(".LabelTwo, .LabelThree, .LabelFour").css({"color": "#dddddd", "border-left": "5px solid #dddddd"});
  });
  $(".LabelTwo").click(function(){
    $(".TabTwo").show("slow");
    $(".LabelTwo").addClass( "activeTab" );
    $(".TabOne, .TabThree, .TabFour").hide();
    $(".LabelTwo").css({"color": "#186cb5", "border-left": "5px solid #186cb5"});
    $(".LabelOne, .LabelThree, .LabelFour").css({"color": "#dddddd", "border-left": "5px solid #dddddd"});
  });
  $(".LabelThree").click(function(){
    $(".TabThree").show("slow");
    $(".TabOne, .TabTwo, .TabFour").hide();
    $(".LabelThree").css({"color": "#186cb5", "border-left": "5px solid #186cb5"});
    $(".LabelOne, .LabelTwo, .LabelFour").css({"color": "#dddddd", "border-left": "5px solid #dddddd"});
  });
  $(".LabelFour").click(function(){
    $(".TabFour").show("slow");
    $(".TabOne, .TabTwo, .TabThree").hide();
    $(".LabelFour").css({"color": "#186cb5", "border-left": "5px solid #186cb5"});
    $(".LabelOne, .LabelTwo, .LabelThree").css({"color": "#dddddd", "border-left": "5px solid #dddddd"});
  });





  




});





