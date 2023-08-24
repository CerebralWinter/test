$(document).ready(function(){
    $("#img1").mouseover(function(){
        $(this).css("width", "400px");
    });
    $("#img1").mouseout(function(){
        $(this).css("width", "200px");
    });
});