$(document).ready(function(){
    $("#btn1").click(function(){
        var nuovoElemento = "<li>Nuovo elemento</li>";
        $("#lista").append(nuovoElemento);
    });
});