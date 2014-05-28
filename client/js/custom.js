var options="<li class=\"nav-header active\">Planificar materias por:</li> <li ><a id=\"orgjornada\" href=\"#\">Jornada</a></li>";
options += "<li><a id=\"orgcreditos\"  href=\"#\">Cr&eacute;ditos</a></li><li><a id=\"orgprom\"  href=\"#\">Aumento de Promedio</a></li>";
var pager = "<ul class=\"pager\"><li class=\"previous\"><a href=\"#\">&larr; Older</a></li><li class=\"next\"><a href=\"#\">Newer &rarr;</a></li></ul>";

var MatVistas = new Array();
var MatRestantes = new Array();
var test1= new Array();
var test2= new Array();
var testaux= new Array();
var contv=0;
var contr=0;

$(document).on("ready",carrusel);
function carrusel(){
    $('.carousel').carousel();
}


$("#pensumamb").click(        
    function() {
        $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=ambiental", function(result) {
           $("#menuSide").html(options);
           var html="";
           html+= "<h3>Ingenier&iacute;a Ambiental</h3>";
           $("#info").html(html);
           html="<img src=\""+ result.toString()+"\" title=\"Pensum Ambiental\" alt=\"Pensum Ambiental\" />";
           $("#pensum").html(html);
        });
});  

$("#pensumciv").click(
    function() {
        $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=civil", function(result) {
           $("#menuSide").html(options);
           var html="";
           html+= "<h3>Ingenier&iacute;a Civil</h3>";
           $("#info").html(html);
           html="<img src=\""+ result.toString()+"\" title=\"Pensum Civil\" alt=\"Pensum Civil\" />";
           $("#pensum").html(html);
        });
});  

$("#pensumele").click(
    function() {
        $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=electrica", function(result) {
           $("#menuSide").html(options);
           var html="";
           html+= "<h3>Ingenier&iacute;a El&eacute;ctrica</h3>";
           $("#info").html(html);
           html="<img src=\""+ result.toString()+"\" title=\"Pensum Electrica\" alt=\"Pensum Electrica\" />";
           $("#pensum").html(html);
        });
});  

$("#pensumetr").click(
    function() {
        $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=electronica", function(result) {
           $("#menuSide").html(options);
           var html="";
           html+= "<h3>Ingenier&iacute;a Electr&oacute;nica</h3>";
           $("#info").html(html);
           html="<img src=\""+ result.toString()+"\" title=\"Pensum Electronica\" alt=\"Pensum Electronica\" />";
           $("#pensum").html(html);
        });
});

$("#pensumind").click(
        function() {
            $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=industrial", function(result) {
               $("#menuSide").html(options);
               var html="";
               html+= "<h3>Ingenier&iacute;a Industrial</h3>";
               $("#info").html(html);
               html="<img src=\""+ result.toString()+"\" title=\"Pensum Industrial\" alt=\"Pensum Industrial\" />";
               $("#pensum").html(html);
            });
        });  

$("#pensummec").click(
    function() {
        $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=mecanica", function(result) {
           $("#menuSide").html(options);
           var html="";
           html+= "<h3>Ingenier&iacute;a Mecanica</h3>";
           $("#info").html(html);
           html="<img src=\""+ result.toString()+"\" title=\"Pensum Mecanica\" alt=\"Pensum Mecanica\" />";
           $("#pensum").html(html);
        });
});  

$("#pensummcr").click(
    function() {
        $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=mecatronica", function(result) {
           $("#menuSide").html(options);
           var html="";
           html+= "<h3>Ingenier&iacute;a Mecatr&oacute;nica</h3>";
           $("#info").html(html);
           html="<img src=\""+ result.toString()+"\" title=\"Pensum Mecatronica\" alt=\"Pensum Mecatronica\" />";
           $("#pensum").html(html);
        });
});  


$("#pensumsis").click(pensum);

$('body').on('click', '#btnreinicio', function(){
    var html = "";
    $("#pensum").html("");
    $("#menuSide").html("");
    $("#info").html("");
    html += "<div class=\"hero-unit offset3\"><h1>Est&aacute;s seguro?</h1><p>Se perder&aacute; la informaci&oacute;n sobre las materias que<br>ya completaste.</p>";
    html += "<br><br><div class=\"container-fluid\"><div class=\"row-fluid\"><div class=\"span8 offset1\"><div class=\"span4\"><button type=\"submit\" id=\"btnsegsi\" class=\"btn btn-success\">Reiniciar</button></div>";
    html += "<div class=\"span4 offset1\"><button type=\"submit\" id=\"btnsegno\" class=\"btn btn-success\">Volver</button></div></div></div></div></div>";
    $("#pensum").html(html).hide().fadeIn(700); 
});

$('body').on('click', '#btnsegsi', pensum);

$('body').on('click', '#btnsegno', function(){
    var html = "<h3>Ingenier&iacute;a de Sistemas</h3>";
    $("#info").html(html).hide().fadeIn(800);
    if(MatVistas.length>0){
        var html = "";
        $("#orgcreditos").removeClass("nav-header active");
        $("#orgprom").removeClass("nav-header active");
        $("#orgjornada").removeClass("nav-header active");
        html += "<div class=\"hero-unit\"><h1>Organiza tu horario de forma autom&aacute;tica!</h1>";
        html += "<p>Escoge, del men&uacute de la izquierda, la forma en como deseas empezar a hacerlo.</p><p><img src=\"img/arrow.jpg\" width=\"100\" height=\"110\" /></p></div>";
        $("#menuSide").html(options +"<li><br><button type=\"submit\" id=\"btnreinicio\" class=\"btn btn-success\">Reinicio</button></li>").hide().fadeIn(800);
        $("#pensum").html(html).hide().fadeIn(700);
    }
});

$("#pensumqui").click(
    function() {
        $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=quimica", function(result) {
           $("#menuSide").html(options);
           var html="";
           html+= "<h3>Ingenier&iacute;a Qu&iacute;mica</h3>";
           $("#info").html(html);
           html="<img src=\""+ result.toString()+"\" title=\"Pensum Quimica\" alt=\"Pensum Quimica\" />";
           $("#pensum").html(html);
        });
});
        
        
//FUNCIONES IMPORTANTES
function pensum() {   
    MatVistas = new Array();
    MatRestantes = new Array();
    test1= new Array();
    test2= new Array();
    testaux= new Array();
    test3= new Array();
    test4= new Array();
    MatDisponibles= new Array();
    test6= new Array();
    testout= new Array();

    $("#pensum").html("");
    $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=sistemas", function(result) {
        $.each(result, function(indice, valor) {
            var html="<br><br><button type=\"button\" id=\"btnstart\" class=\"btn btn-success\" data-loading-text=\"Cargando...\">Empezar</button><p><div class=\"hide-notif alert alert-info\" id=\"ntf\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"></button><span style=\"font-size:16px;\"> Selecciona al menos un curso.</span></div></p>";
            $("#menuSide").html(html).hide().fadeIn(700);
            $("#ntf").hide();

            var html = "<h3>Ingenier&iacute;a de Sistemas</h3>";
            $("#info").html(html).hide().fadeIn(800);
            var html = "";
            var cont=1;
            var cont2=1;

            html += "<h4 id\"titlesel\">Selecciona las materias que ya has completado:</h4><table class=\"table table-hover\">";
            html += "<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>";
            $.each(valor, function(iI, valorI) {
                cont = 1;
                html += "<tr>";
                $.each(valorI, function(iII, valorII) {
                    test2=new Array();
                    html += "<td>";
                    if(valorII.nombre!==""){
                        html += "<input type=\"checkbox\" id=\"sel"+cont+cont2+"\" >";
                    }
                    html += "<div><a href=\"#info"+cont+cont2+"\" id=\"name" + cont+ cont2+"\" role=\"link\"  data-toggle=\"modal\">"+valorII.nombre+ "</a></div></td>";
                    html += "<div id=\"info" + cont+ cont2+"\" class=\"modal hide fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">";
                    html += "<div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"></button>";
                    html += "<h3 id=\"myModalLabel\" style=\"text-align:center;\">" + valorII.nombre + "</h3> </div>";
                    html += "<div class=\"modal-body\"><ul type=\"none\">";
                    html += "<li><ul class=\"thumbnails\"> <li class=\"span8 offset2\"> <div id=\"infoasig\" class=\"thumbnail\"><h4 style=\"text-align:center;\">Informaci&oacute;n:</h4><p>Materia: " +valorII.Matr+"<br>Curso: "+valorII.Curso+"<br>Cr&eacute;ditos: "+valorII.Creditos;

                    test2.push([valorII.nombre,valorII.Curso,valorII.Matr]);
                    test1.push(test2);

                    $.each(valor, function(iX, valorX){
                        $.each(valorX, function(iXX, valorXX){
                            if(valorII.Prereq1.Matr!=="" && (valorII.Prereq1.Matr === valorXX.Matr) && (valorII.Prereq1.Curso === valorXX.Curso) ){
                                html += "<br><br></p><h4 style=\"text-align:center;\">Pre-requisitos:</h4><p>";
                                html +="Nombre: "+ valorXX.nombre + "<br>Materia: " + valorXX.Matr + "<br>Curso: " + valorXX.Curso;
                            }

                            if(valorII.Prereq2.Matr!=="" && (valorII.Prereq2.Matr === valorXX.Matr) && (valorII.Prereq2.Curso === valorXX.Curso)){
                                html +="<br><br>Nombre: " + valorXX.nombre + "<br>Materia: " + valorXX.Matr + "<br>Curso: " + valorXX.Curso;
                            }
                        });
                    });
                    html += "</p> </div> </li> </ul></li>";
                    html += "</ul></div><div class=\"modal-footer\"> <button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Cerrar</button> </div> </div>";
                    cont++;
                });
                cont2++;
                html += "</tr>"; 
            });
            html += "</table>";
            $("#pensum").html(html).hide().fadeIn(1000);
        });
    });		
}

//Verificar que materias puede ver el estudiante
function GetInfoMatVistas(){
    $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=sistemas", function(result) {
        
        $.each(result, function(indice, valor) {
            
            $.each(valor, function(iI, valorI) {
               
                $.each(valorI, function(iII, valorII) {
                   testaux= new Array();
                   for(var i=0;i<MatVistas.length;i++){
                       if(MatVistas[i]===valorII.nombre){
                            testaux.push([valorII.nombre,valorII.Curso,valorII.Matr]);
                            test3.push(testaux);
                       }
                   }
               }); 
            });
        });
    });
    
}

function GetInfoMatRestantes(){
   $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=sistemas", function(result) {
        
       $.each(result, function(indice, valor) {
            
           $.each(valor, function(iI, valorI) {
               
               $.each(valorI, function(iII, valorII) {
                   testaux= new Array();
                   for(var i=0;i<MatRestantes.length;i++){
                       if(MatRestantes[i]===valorII.nombre){
                            testaux.push([valorII.nombre,valorII.Curso,valorII.Matr,valorII.Prereq1.Curso,valorII.Prereq1.Matr,valorII.Prereq2.Curso,valorII.Prereq2.Matr]);
                            test4.push(testaux);                     
                       }
                   }
               }); 
            });
        });
    });
}

//Verificar que materias puede ver el estudiante
var test3= new Array();//Nombre,Curso,Materia
var test4= new Array();//Nombre,Curso,Materia,CursoP1,MatrP1,CursoP2,MatrP2
var MatDisponibles= new Array();//Nombre,Curso,Materia,Creditos
var test6= new Array();
var testout= new Array();
function MatAVer(){
    var ing=0;
    var hum=0;
    $.getJSON("http://localhost/SubjectScheduler/server/pensums.php?pensums=sistemas", function(result) {
    $.each(result, function(indice, valor) {
        $.each(valor, function(iI, valorI) {
            $.each(valorI, function(iII, valorII) {
                testout= new Array();
                for(var i=0;i<MatVistas.length;i++){
                   if(MatVistas[i]===valorII.nombre){
                        testout.push([valorII.nombre,valorII.Curso,valorII.Matr]);
                        test3.push(testout);
                   }
                }
                for(var i=0;i<MatRestantes.length;i++){
                    testout= new Array();
                    if(MatRestantes[i]!=="Electiva Ingenieria" &&MatRestantes[i]!=="Electiva de Humanidades" ){
                        if(MatRestantes[i]===valorII.nombre){
                            testout.push([valorII.nombre,valorII.Curso,valorII.Matr,valorII.Prereq1.Curso,valorII.Prereq1.Matr,valorII.Prereq2.Curso,valorII.Prereq2.Matr,valorII.Creditos]);
                            test4.push(testout);
                        }
                    }
                }
            }); 
        });
    });
        
    for(var i=0;i<MatRestantes.length;i++){
        testout= new Array();
        if(MatRestantes[i]==="Electiva Ingenieria" || MatRestantes[i]==="Electiva de Humanidades" ){
            if(MatRestantes[i]==="Electiva Ingenieria"){
                ing++;
                testout.push(["Electiva Ingenieria","0"+(6-ing)+"3","ISISE","","","","","3"]);
                test4.push(testout);
            }else{
                hum++;
                testout.push(["Electiva de Humanidades","0"+(4-hum)+"3","ISISH","","","","","2"]);
                test4.push(testout);
            }
        }
    }
    var y=false;
    var z=false;
    var exist=false;
    for(var i=0;i<test4.length;i++){
        //console.log("+");
         y=false;
         z=false;
         exist=false;
         MatDisponibles= new Array();
         
         //Si no tiene Prerequisitos
            if(test4[i][0][3]===""){
                test6.push([test4[i][0][0],test4[i][0][1],test4[i][0][2],test4[i][0][7]]);
                MatDisponibles.push(test6);

            }else{
                //Si solo tiene un Prerequisito
                if(test4[i][0][5]===""){
                    for(var j=0;j<test3.length;j++){
                        if(test3[j][0][1]===test4[i][0][3]&&test3[j][0][2]===test4[i][0][4]){
                            test6.push([test4[i][0][0],test4[i][0][1],test4[i][0][2],test4[i][0][7]]);
                            MatDisponibles.push(test6);
                        }
                    }
                //Si tiene dos Prerequisitos
                }else{
                    for(var j=0;j<test3.length;j++){
                        if(test3[j][0][1]===test4[i][0][3]&&test3[j][0][2]===test4[i][0][4]){
                            y=true;
                        }
                    }
                    for(var j=0;j<test3.length;j++){
                        if(test3[j][0][1]===test4[i][0][5]&&test3[j][0][2]===test4[i][0][6]){
                            z=true;
                        }
                    }
                    if(y&&z){
                        test6.push([test4[i][0][0],test4[i][0][1],test4[i][0][2],test4[i][0][7]]);
                        MatDisponibles.push(test6);
                    }
                }
            }
    }
    
   });
}
    
$('body').on('click', '#btnstart', function(){
    contv=0;
    contr=0;   
    
    for(var i=1;i<=9;i++){
        for(var j=1;j<=6;j++){
            if(i===9 && (j===3 || j===4 || j===5 || j===6)){
                continue;
            }else{
                if($("#sel"+i+j).is(":checked")){
                    document.getElementById("sel"+i+j).checked=false;
                    MatVistas[contv++]=document.getElementById("name"+i+j).innerHTML;        
                }else{
                    MatRestantes[contr++]=document.getElementById("name"+i+j).innerHTML;     
                }
            }
        }
    }
      
    if(MatVistas.length>0){
               
        MatAVer();
        var html = "";
        html += "<div class=\"hero-unit\"><h1>Organiza tu horario de forma autom&aacute;tica!</h1>";
        html += "<p>Escoge, del men&uacute de la izquierda, la forma en como deseas empezar a hacerlo.</p><p><img src=\"img/arrow.jpg\" width=\"100\" height=\"110\" /></p></div>";
        $("#menuSide").html(options +"<li><br><button type=\"submit\" id=\"btnreinicio\" class=\"btn btn-success\">Reiniciar Proceso</button></li>").hide().fadeIn(800);
        $("#pensum").html(html).hide().fadeIn(700);
    }else{
        $("#ntf").fadeIn(700).delay(5000).fadeOut(700);
    }
});

//Planificación Por Jornada
var jornada;
$('body').on('click', '#orgjornada', function(){
    var html = "";
    $("#orgjornada").addClass("nav-header active");
    $("#orgprom").removeClass("nav-header active");
    $("#orgcreditos").removeClass("nav-header active");
    $("#pensum").html("");
    html += "<div class=\"hero-unit\"><h1>Planificaci&oacute;n por jornada</h1><p>Elige tu jornada:</p>";
    html += "<label class=\"radio\"><input type=\"radio\" name=\"jnd\" id=\"JAM\" value=\"AM\">AM</label><label class=\"radio\"><input type=\"radio\" name=\"jnd\" id=\"JPM\" value=\"PM\">PM</label>";
    html += "<button type=\"submit\" id=\"btnaceptar1\" class=\"btn btn-success\">Aceptar</button></div>";
    $("#pensum").html(html).hide().fadeIn(400);
});

$('body').on('click', '#btnaceptar1', function(){
    var accept=true;
    if(document.getElementById("JAM").checked){
        jornada="AM";
    }else if(document.getElementById("JPM").checked){
        jornada="PM";
    }else{
        accept=false;
    }
    
    if(accept){
        var html = "";
        $("#pensum").html("");
        
        for(var i=0;i<MatDisponibles[0].length;i++){
            $.getJSON("http://localhost/SubjectScheduler/server/index.php?materia="+MatDisponibles[0][i][0], function(result) {
              var cnt = false;
              var hum = false;
              var ing = false;
              var t;
              $.each(result, function(il, v) {
                     for(var j=0; j<MatDisponibles[0].length;j++){
                         
                         hum = false;
                         ing = false;
                             if(MatDisponibles[0][j][1]===v[0].Curso && MatDisponibles[0][j][2]===v[0].Matr){
                                t=MatDisponibles[0][j][0];
                            }

                            if(v[0].nombre!==null && v[0].Matr==="CHUM"){
                                hum=true;
                                t="Electiva de Humanidades";
                            }

                            if(v[0].nombre!==null && v[0].Matr==="ISIS"){
                                ing=true;
                                t="Electiva de Ingenieria";
                            }
                    }
                    html="<h3>"+t+"</h3><br><ul class=\"thumbnails\"><li class=\"span6\"><div class=\"thumbnail\">"; 
                     $.each(v, function(ii, vv) {
                         if(vv.Dia1.Dia!==""){
                             if(vv.Dia2.Dia!==""){
                                 if(vv.Dia3.Dia!==""){
                                    if(vv.Dia1.Jornada===jornada && vv.Dia2.Jornada===jornada && vv.Dia3.Jornada===jornada){
                                        if(hum || ing){
                                            html+= "<p>Nombre: "+vv.nombre+"</p>";
                                        }
                                        html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                        html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS;
                                        html += "<br>Horarios: "+vv.Dia2.Dia+" - "+vv.Dia2.HoraE+"/"+vv.Dia2.HoraS;
                                        html += "<br>Horarios: "+vv.Dia3.Dia+" - "+vv.Dia3.HoraE+"/"+vv.Dia3.HoraS+"</p>";
                                        cnt=true;
                                        }
                                 }else{
                                     if(vv.Dia1.Jornada===jornada && vv.Dia2.Jornada===jornada){
                                        if(hum || ing){
                                            html+= "<p>Nombre: "+vv.nombre+"</p>";
                                        }
                                        html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                        html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS;
                                        html += "<br>Horarios: "+vv.Dia2.Dia+" - "+vv.Dia2.HoraE+"/"+vv.Dia2.HoraS+"</p>";
                                        cnt=true;
                                     }
                                 }
                             }else{
                                 if(vv.Dia1.Jornada===jornada){
                                     
                                     if(hum || ing){
                                            html+= "<p>Nombre: "+vv.nombre+"</p>";
                                     }
                                     html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                     html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS+"</p>";
                                     cnt=true;
                                 }
                             }
                         }
                    });
                 });
                 if(cnt){
                    $("#pensum").append(html+"</div></li></ul>");
                 }
            });
        }
    }
});


//Planificación por Créditos Disponibles
$('body').on('click', '#orgcreditos', function(){
    var html = "";
    $("#orgcreditos").addClass("nav-header active");
    $("#orgprom").removeClass("nav-header active");
    $("#orgjornada").removeClass("nav-header active");
    $("#pensum").html("");
    html += "<div class=\"hero-unit\"><h1>Planificaci&oacute;n por cr&eacute;ditos</h1><p>Elige el n&uacute;mero m&aacute;ximo de cr&eacute;ditos que puede tener cada materia:</p>";
    html += "<select><option value=\"default\" id=\"def\" selected=\"selected\">Seleccione una opci&oacute;n</option>";
    html += "<option value=\"2\" id=\"c2\">2</option><option value=\"3\" id=\"c3\">3</option><option value=\"4\" id=\"c4\">4</option><option value=\"9\" id=\"c9\">9</option></select>";
    html += "<p><button type=\"submit\" id=\"btnaceptar3\" class=\"btn btn-success\">Aceptar</button></p></div>";
    $("#pensum").html(html).html(html).hide().fadeIn(400);
    
});

var crd="";
$('body').on('click', '#btnaceptar3', function(){
    var accept=true;
    crd="";
    if(document.getElementById("c2").selected){
        crd="2";
    }
    else if(document.getElementById("c3").selected){
        crd="3";
    }else if(document.getElementById("c4").selected){
        crd="4";
    }else if(document.getElementById("c9").selected){
        crd="9";
    }else{
        accept=false;
    }
    
    if(accept){
        var html = "";
        $("#pensum").html("");

        for(var i=0;i<MatDisponibles[0].length;i++){
            $.getJSON("http://localhost/SubjectScheduler/server/index.php?materia="+MatDisponibles[0][i][0], function(result) {

              var cnt = false;
              var hum = false;
              var ing = false;
              var rest = false;
              var t;

              $.each(result, function(il, v) {
                     for(var j=0; j<MatDisponibles[0].length;j++){
                             if(MatDisponibles[0][j][1]===v[0].Curso && MatDisponibles[0][j][2]===v[0].Matr && crd===v[0].Creditos){
                                t=MatDisponibles[0][j][0];
                                rest=true;
                            }
                            if(v[0].nombre!==null && v[0].Matr==="CHUM" && crd===v[0].Creditos){
                                hum=true;
                                t="Electiva de Humanidades";
                            }

                            if(v[0].nombre!==null && v[0].Matr==="ISIS" && crd===v[0].Creditos){
                                ing=true;
                                t="Electiva de Ingenieria";
                            }
                    }

                    html="<h3>"+t+"</h3><br><ul class=\"thumbnails\"><li class=\"span6\"><div class=\"thumbnail\">"; 
                    $.each(v, function(ii, vv) {
                            if(vv.Creditos===crd){              
                                        if(hum || ing){
                                            html+= "<p>Nombre: "+vv.nombre+"</p>";
                                            html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                            html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS;
                                            if(vv.Dia2.Dia!==""){html += "<br>Horarios: "+vv.Dia2.Dia+" - "+vv.Dia2.HoraE+"/"+vv.Dia2.HoraS;}
                                            if(vv.Dia3.Dia!==""){html += "<br>Horarios: "+vv.Dia3.Dia+" - "+vv.Dia3.HoraE+"/"+vv.Dia3.HoraS+"</p>";}else{html+="</p>";}
                                            cnt=true;
                                        }
                                        if(rest){
                                            html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                            html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS;
                                            if(vv.Dia2.Dia!==""){html += "<br>Horarios: "+vv.Dia2.Dia+" - "+vv.Dia2.HoraE+"/"+vv.Dia2.HoraS;}
                                            if(vv.Dia3.Dia!==""){html += "<br>Horarios: "+vv.Dia3.Dia+" - "+vv.Dia3.HoraE+"/"+vv.Dia3.HoraS+"</p>";}else{html+="</p>";}
                                            cnt=true;
                                        }
                            }
                    });
                 });
                 if(cnt){
                    $("#pensum").append(html+"</div></li></ul>");
                 }
            });
        }
    }
});

var nextprom=0;
var limitprom=new Array();
//Planificación por Aumento de promedio
$('body').on('click', '#orgprom', function(){
    limitcomb();
    var html = "";
    $("#orgprom").addClass("nav-header active");
    $("#orgjornada").removeClass("nav-header active");
    $("#orgcreditos").removeClass("nav-header active");
    
    $("#pensum").html("");
    html += "<div class=\"hero-unit\"><h1>Planificaci&oacute;n para aumento de promedio</h1><p>Aqu&iacute; encontrar&aacute;s las materias que te sugerimos matricular con el fin facilitar el aumento de tu promedio.</p>";
    html += "<p><button type=\"submit\" id=\"btncomb\" class=\"btn btn-success\">Mostrar</button></p></div>";
    $("#pensum").html(html).hide().fadeIn(100);
    
    
});

$('body').on('click', '#btncomb', comb);

var pagina;
function comb(){
    
    var html = "";
    $("#pensum").html("");
        $.getJSON("http://localhost/SubjectScheduler/server/index.php?materia="+limitprom[nextprom], function(result) {
          var cnt = false;
          var hum = false;
          var ing = false;
          var rest = false;
          var t;
          
          $.each(result, function(i, v) {
                 for(var j=0; j<MatDisponibles[0].length;j++){
                         if(v[0].nombre===null && MatDisponibles[0][j][1]===v[0].Curso && MatDisponibles[0][j][2]===v[0].Matr && (v[0].Creditos==="2" || v[0].Creditos==="3")){
                            t=MatDisponibles[0][j][0];
                            rest=true;
                        }
                        if(v[0].nombre!==null && MatDisponibles[0][j][0]==="Electiva de Humanidades" && v[0].Matr==="CHUM"){
                            hum=true;
                            t="Electiva de Humanidades";
                        }
                        if(v[0].nombre!==null && MatDisponibles[0][j][0]==="Electiva Ingenieria"  && v[0].Matr==="ISIS"){
                            ing=true;
                            t="Electiva de Ingenieria";
                        }
                }
                html="<h3>"+t+"</h3><br><ul class=\"thumbnails\"><li class=\"span6\"><div class=\"thumbnail\">"; 
                $.each(v, function(ii, vv) {
                                if(hum || ing){
                                    html+= "<p>Nombre: "+vv.nombre+"</p>";
                                    html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                    html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS+"<p>";
                                    cnt=true;
                                }
                                if(rest){
                                   html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                   html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS;
                                   if(vv.Dia2.Dia!==""){html += "<br>Horarios: "+vv.Dia2.Dia+" - "+vv.Dia2.HoraE+"/"+vv.Dia2.HoraS;}
                                   if(vv.Dia3.Dia!==""){html += "<br>Horarios: "+vv.Dia3.Dia+" - "+vv.Dia3.HoraE+"/"+vv.Dia3.HoraS+"</p>";}else{html+="</p>";}
                                   cnt=true; 
                                }
                });
             });
             if(cnt){
                 if(nextprom===0){
                    $("#pensum").append(html+"</div></li></ul><ul class=\"pager\"><p id=\"pag\">&lt;"+pagina+"&gt;</p><li><a id=\"next\" href=\"#\">Siguiente</a></li></ul>");
                 }else if(nextprom===limitprom.length-1){
                    $("#pensum").append(html+"</div></li></ul><ul class=\"pager\"><p id=\"pag\">&lt;"+pagina+"&gt;</p><li><a id=\"previous\" href=\"#\">Anterior</a></li></ul>");
                 }else{
                    $("#pensum").append(html+"</div></li></ul><ul class=\"pager\"><p id=\"pag\">&lt;"+pagina+"&gt;</p><li><a id=\"previous\" href=\"#\">Anterior</a></li><li><a id=\"next\" href=\"#\">Siguiente</a></li></ul>");
                 }
                
             }else{
                 nextprom++;
                 comb();
             }
        });
}

function limitcomb(){
    pagina=1;
    nextprom=0;
    limitprom=new Array();
    var html = "";
    for(var i=0;i<MatDisponibles[0].length;i++){
        $.getJSON("http://localhost/SubjectScheduler/server/index.php?materia="+MatDisponibles[0][i][0], function(result) {
          var cnt = false;
          var hum = false;
          var ing = false;
          var rest = false;
          var t;
          
          $.each(result, function(il, v) {
                 for(var j=0; j<MatDisponibles[0].length;j++){
                         if(v[0].nombre===null && MatDisponibles[0][j][1]===v[0].Curso && MatDisponibles[0][j][2]===v[0].Matr && (v[0].Creditos==="2" || v[0].Creditos==="3")){
                            t=MatDisponibles[0][j][0];
                            rest=true;
                        }
                        if(v[0].nombre!==null && MatDisponibles[0][j][0]==="Electiva de Humanidades" && v[0].Matr==="CHUM"){
                            hum=true;
                            t="Electiva de Humanidades";
                        }
                        if(v[0].nombre!==null && MatDisponibles[0][j][0]==="Electiva Ingenieria"  && v[0].Matr==="ISIS"){
                            ing=true;
                            t="Electiva Ingenieria";
                        }
                }
                html="<h3>"+t+"</h3><br><ul class=\"thumbnails\"><li class=\"span6\"><div class=\"thumbnail\">"; 
                $.each(v, function(ii, vv) {
                                if(hum || ing){
                                    html+= "<p>Nombre: "+vv.nombre+"</p>";
                                    html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                    html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS+"<p>";
                                    cnt=true;
                                }
                                if(rest){
                                   html += "<p>Curso: "+vv.Curso+" - Cr&eacute;ditos: "+vv.Creditos+" - Materia: "+vv.Matr+" - NRC: "+vv.NRC +" - Secci&oacute;n: "+ vv.Sec;
                                   html += "<br>Horarios: "+vv.Dia1.Dia+" - "+vv.Dia1.HoraE+"/"+vv.Dia1.HoraS;
                                   if(vv.Dia2.Dia!==""){html += "<br>Horarios: "+vv.Dia2.Dia+" - "+vv.Dia2.HoraE+"/"+vv.Dia2.HoraS;}
                                   if(vv.Dia3.Dia!==""){html += "<br>Horarios: "+vv.Dia3.Dia+" - "+vv.Dia3.HoraE+"/"+vv.Dia3.HoraS+"</p>";}else{html+="</p>";}
                                   cnt=true; 
                                }
                });
             });
             if(cnt){
                if(limitprom.indexOf(t)===-1 || (t==="Electiva de Humanidades" || t==="Electiva Ingenieria" )){
                    limitprom.push(t);
                }                
             }
        });
    }
}

$('body').on('click', '#next', function(){
    if(nextprom<limitprom.length-1){
        pagina++;
        nextprom++;        
        comb();
    }
});

$('body').on('click', '#previous', function(){
    if(nextprom > 0){
        nextprom--;
        pagina--;
        comb();
    }
});