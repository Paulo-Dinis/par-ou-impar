let parOuImpar = 0

function selectPar(){
    $("#par").click(function(){
        parOuImpar = 2;
        $("#selectPlay").removeClass("mostraSelect");
        $("#escolherNum").addClass("mostraEscolhaNum");
        $("#avisaNum").addClass("mostraEscolhaNum");
        $("#divJogar").addClass("mostraEscolhaNum");
    });       
};

function selectImp(){
    $("#impar").click(function(){
        parOuImpar = 1;
        $("#selectPlay").removeClass("mostraSelect");
        $("#escolherNum").addClass("mostraEscolhaNum");
        $("#avisaNum").addClass("mostraEscolhaNum");
        $("#divJogar").addClass("mostraEscolhaNum");
    }); 
};

function selectNum(){
    if($("#numEscolhido").val() != "" && 
    ($("#numEscolhido").val() >= 0 && $("#numEscolhido").val() < 10))
        {return true}
    else
        {return false};
};