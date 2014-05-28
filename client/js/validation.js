$(document).on("ready",main);

function main(){
    $("#form1").on("submit",validador);
    $("#form1").on("reset",clear);
}

function validador(){
    var codigo = $("#inputCodigo").val();
    var password = $("#inputPass").val();
    var error=false;
    
       
    if(codigo === ""){
        $("#ingcodigo").addClass("error");
        error=true;
    }else{
        $("#ingcodigo").removeClass("error");
    }
    
    if(password === ""){
        $("#ingpass").addClass("error");
        error=true;
    }else{
        $("#ingpass").removeClass("error");
    }

    if(error){
        var html="Error! Por favor, revise la infomaci&oacute;n ingresada";
        $("#errormsg").html(html);
        return false;   
    }
}

function clear(){
    $("#ingcodigo").removeClass("error");
    $("#ingpass").removeClass("error");
    var html="";
    $("#errormsg").html(html);
}