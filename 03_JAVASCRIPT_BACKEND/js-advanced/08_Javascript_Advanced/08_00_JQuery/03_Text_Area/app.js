$(document).ready(function(){
    $("#input1").keyup(function(){
        var testo = $(this).val();
        $("#textarea1").val(testo);
    });
});