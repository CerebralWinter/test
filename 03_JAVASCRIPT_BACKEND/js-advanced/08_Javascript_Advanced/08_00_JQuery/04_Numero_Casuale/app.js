$(document).ready(function(){
    $("#btn1").click(function(){
        var numero = Math.floor(Math.random() * 100) + 1;
        $("#numeroCasuale").text(numero);
    });
});