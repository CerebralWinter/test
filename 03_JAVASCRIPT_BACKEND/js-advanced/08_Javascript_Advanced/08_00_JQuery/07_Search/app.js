$(document).ready(function(){
    $("#campoRicerca").on("keyup", function() {
        var valoreRicerca = $(this).val().toLowerCase();
        $("#lista li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(valoreRicerca) > -1);
        });
    });
});