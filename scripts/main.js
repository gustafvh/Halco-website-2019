$(document).ready(function(){

  $(".nav-items").click(function(){
    // $(this).hide("slow");
    $("").toggleClass("main");
  });

  //Init state
  $(".TabTwo, .TabThree, .TabFour").hide();
  $(".LabelOne").css({"color": "#186cb5", "border-left": "5px solid #186cb5"});

  //Once clicked on TabX for every client
  $(".LabelOne").click(function(){
    $(".TabOne").show("slow");          //Show tabs content
    $(".TabTwo, .TabThree, .TabFour").hide();   //Hide the rest tabcontent
    $(".LabelOne").css({"color": "#186cb5", "border-left": "5px solid #186cb5"}); //Put the tab label in 'active' state
    $(".LabelTwo, .LabelThree, .LabelFour").css({"color": "#dddddd", "border-left": "5px solid #dddddd"});  //Put any previous label from active -> inactive state
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









