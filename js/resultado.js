function res(){
    $("#jogar").click(function (){
        if(parOuImpar == 1 || parOuImpar == 2 && selectNum() == true){

            let numEscolhido = parseInt($("#numEscolhido").val());
            let numRandom = Math.floor(Math.random()*6);

            if(numRandom == 0){numRandom ++};

            let res = numEscolhido + numRandom;

            $("#player").addClass("mostraMao");
            $("#bot").addClass("mostraMao");
            $(this).addClass("escondeIniciar");
            $("#avisaNum").removeClass("mostraEscolhaNum");
            $("#escolherNum").removeClass("mostraEscolhaNum");


            if(numEscolhido == 1){$("#um").addClass("mostraMao")};
            if(numEscolhido == 2){$("#dois").addClass("mostraMao")};
            if(numEscolhido == 3){$("#tres").addClass("mostraMao")};
            if(numEscolhido == 4){$("#quatro").addClass("mostraMao")};
            if(numEscolhido == 5){$("#cinco").addClass("mostraMao")};

            if(numRandom == 1){$("#umBot").addClass("mostraMao")};
            if(numRandom == 2){$("#doisBot").addClass("mostraMao")};
            if(numRandom == 3){$("#tresBot").addClass("mostraMao")};
            if(numRandom == 4){$("#quatroBot").addClass("mostraMao")};
            if(numRandom == 5){$("#cincoBot").addClass("mostraMao")};

            if(res%2 == 0 ){
                
                if(parOuImpar == 2)
                {
                    $("#buttonRes").addClass("mostraMao");
                    $("#buttonParWin").addClass("mostraMao");
                    $("#buttonRes").append('<button id="buttonParWin">' + res + "<p> é par, você ganhou!</p></button>");

                    $("#buttonParWin").click(function(){
                        window.location.reload()
                    });
                }
                else{
                    $("#buttonRes").addClass("mostraMao");
                    $("#buttonParLose").addClass("mostraMao");
                    $("#buttonRes").append('<button id="buttonParLose">' + res + "<p> é par, você perdeu!</p></button>");

                    $("#buttonParLose").click(function(){
                        window.location.reload()
                    });
                };
            }
            else{
                
                if(parOuImpar == 1)
                {
                    $("#buttonRes").addClass("mostraMao");
                    $("#buttonImparWin").addClass("mostraMao");
                    $("#buttonRes").append('<button id="buttonImparWin">' + res + "<p> é ímpar, você ganhou!</p></button>");

                    $("#buttonImparWin").click(function(){
                        window.location.reload()
                    });  
                }
                else{
                    $("#buttonRes").addClass("mostraMao");
                    $("#buttonImaprLose").addClass("mostraMao");
                    $("#buttonRes").append('<button id="buttonImparLose">' + res + "<p> é ímpar, você perdeu!</p></button>");

                    $("#buttonImparLose").click(function(){
                        window.location.reload();
                    });
                };
            };  
        };
    });  
};

function mostraMao (){

};


    