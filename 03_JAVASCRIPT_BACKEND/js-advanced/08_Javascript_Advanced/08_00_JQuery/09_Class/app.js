$(document).ready(function(){
    $("#btn1").click(function(){
        $(".verde").removeClass("nascosto");
        $(".rosso, .blu").addClass("nascosto");
    });
    $("#btn2").click(function(){
        $(".rosso").removeClass("nascosto");
        $(".verde, .blu").addClass("nascosto");
    });
    $("#btn3").click(function(){
        $(".blu").removeClass("nascosto");
        $(".verde, .rosso").addClass("nascosto");
    });
});