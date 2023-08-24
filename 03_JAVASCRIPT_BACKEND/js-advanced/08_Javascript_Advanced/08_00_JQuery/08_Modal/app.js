$(document).ready(function(){
    $("#immagine1").click(function(){
        var urlImmagine = $(this).attr("src");
        $("#immagine-modal").attr("src", urlImmagine);
        $("#modal").fadeIn();
    });
    $("#modal").click(function(){
        $(this).fadeOut();
    });
});