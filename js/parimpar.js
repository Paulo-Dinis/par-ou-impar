$(document).ready(function(){
    res();
    selectPar();
    selectImp();
    iniciar(); 
});

function iniciar(){
    $("#iniciar").click(function(){
        $(this).addClass("escondeIniciar")
        $("#selectPlay").addClass("mostraSelect")
    });
};


