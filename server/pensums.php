<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

class materia{
    var $nombre;
    var $coord;
    var $Creditos;
    var $Matr;
    var $Curso;
    var $Prereq1;
    var $Prereq2;
}

class pensumrow {
    var $field1;
    var $field2;
    var $field3;
    var $field4;
    var $field5;
    var $field6;
    var $field7;
    var $field8;
    var $field9;
}
switch ($_GET["pensums"]){
    case "ambiental":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Ambiental.png";
        echo json_encode($img);
        break;
    
    case "civil":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Civil.png";
        echo json_encode($img);
        break;
    
    case "electrica":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Electrica.png";
        echo json_encode($img);
        break;
    
    case "electronica":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Electronica.png";
        echo json_encode($img);
        break;
    
    case "industrial":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Industrial.png";
        echo json_encode($img);
        break;
    
    case "mecanica":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Mecanica.png";
        echo json_encode($img);
        break;
    
    case "mecatronica":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Mecatronica.png";
        echo json_encode($img);
        break;
    
    case "sistemas":
               
        $dato[0] = new pensumrow();
        $dato[0]->field1=new materia();
        $dato[0]->field1->nombre="Habilidades del Pensamiento";
        $dato[0]->field1->Matr="CHUM";
        $dato[0]->field1->Curso="1203";
        $dato[0]->field1->Creditos="3";
        $dato[0]->field1->Prereq1=new materia();
        $dato[0]->field1->Prereq1->Matr="";
        $dato[0]->field1->Prereq1->Curso="";
        $dato[0]->field1->Prereq2=new materia();
        $dato[0]->field1->Prereq2->Matr="";
        $dato[0]->field1->Prereq2->Curso="";
        
        $dato[0]->field2=new materia();
        $dato[0]->field2->nombre="Composicion de Textos Cientificos";
        $dato[0]->field2->Matr="CHUM";
        $dato[0]->field2->Curso="1213";
        $dato[0]->field2->Creditos="3";
        $dato[0]->field2->Prereq1=new materia();
        $dato[0]->field2->Prereq1->Matr="CHUM";
        $dato[0]->field2->Prereq1->Curso="1203";
        $dato[0]->field2->Prereq2=new materia();
        $dato[0]->field2->Prereq2->Matr="";
        $dato[0]->field2->Prereq2->Curso="";
        
        $dato[0]->field3=new materia();
        $dato[0]->field3->nombre="Matematica Discreta";
        $dato[0]->field3->Matr="ISIS";
        $dato[0]->field3->Curso="2403";
        $dato[0]->field3->Creditos="3";
        $dato[0]->field3->Prereq1=new materia();
        $dato[0]->field3->Prereq1->Matr="CBAS";
        $dato[0]->field3->Prereq1->Curso="2403";
        $dato[0]->field3->Prereq2=new materia();
        $dato[0]->field3->Prereq2->Matr="";
        $dato[0]->field3->Prereq2->Curso="";
        
        $dato[0]->field4=new materia();
        $dato[0]->field4->nombre="Estadistica 1";
        $dato[0]->field4->Matr="CBAS";
        $dato[0]->field4->Curso="2603";
        $dato[0]->field4->Creditos="3";
        $dato[0]->field4->Prereq1=new materia();
        $dato[0]->field4->Prereq1->Matr="";
        $dato[0]->field4->Prereq1->Curso="";
        $dato[0]->field4->Prereq2=new materia();
        $dato[0]->field4->Prereq2->Matr="";
        $dato[0]->field4->Prereq2->Curso="";
        
        $dato[0]->field5=new materia();
        $dato[0]->field5->nombre="Entorno Economico";
        $dato[0]->field5->Matr="ECON";
        $dato[0]->field5->Curso="1533";
        $dato[0]->field5->Creditos="3";
        $dato[0]->field5->Prereq1=new materia();
        $dato[0]->field5->Prereq1->Matr="";
        $dato[0]->field5->Prereq1->Curso="";
        $dato[0]->field5->Prereq2=new materia();
        $dato[0]->field5->Prereq2->Matr="";
        $dato[0]->field5->Prereq2->Curso="";
        
        $dato[0]->field6=new materia();
        $dato[0]->field6->nombre="Liderazgo y Emprendimiento";
        $dato[0]->field6->Matr="AEMP";
        $dato[0]->field6->Curso="1713";
        $dato[0]->field1->Creditos="3";
        $dato[0]->field6->Prereq1=new materia();
        $dato[0]->field6->Prereq1->Matr="ECON";
        $dato[0]->field6->Prereq1->Curso="1533";
        $dato[0]->field6->Prereq2=new materia();
        $dato[0]->field6->Prereq2->Matr="";
        $dato[0]->field6->Prereq2->Curso="";
        
        $dato[0]->field7=new materia();
        $dato[0]->field7->nombre="Gestion de Proyectos";
        $dato[0]->field7->Matr="AEMP";
        $dato[0]->field7->Curso="1733";
        $dato[0]->field7->Creditos="3";
        $dato[0]->field7->Prereq1=new materia();
        $dato[0]->field7->Prereq1->Matr="AEMP";
        $dato[0]->field7->Prereq1->Curso="1713";
        $dato[0]->field7->Prereq2=new materia();
        $dato[0]->field7->Prereq2->Matr="";
        $dato[0]->field7->Prereq2->Curso="";
        
        $dato[0]->field8=new materia();
        $dato[0]->field8->nombre="Electiva de Humanidades";
        $dato[0]->field8->Matr="ISISH";
        $dato[0]->field8->Curso="033";
        $dato[0]->field8->Creditos="2";
        $dato[0]->field8->Prereq1=new materia();
        $dato[0]->field8->Prereq1->Matr="";
        $dato[0]->field8->Prereq1->Curso="";
        $dato[0]->field8->Prereq2=new materia();
        $dato[0]->field8->Prereq2->Matr="";
        $dato[0]->field8->Prereq2->Curso="";
        
        $dato[0]->field9=new materia();
        $dato[0]->field9->nombre="Practica Empresarial";
        $dato[0]->field9->Matr="ISIS";
        $dato[0]->field9->Curso="2903";
        $dato[0]->field9->Creditos="9";
        $dato[0]->field9->Prereq1=new materia();
        $dato[0]->field9->Prereq1->Matr="";
        $dato[0]->field9->Prereq1->Curso="";
        $dato[0]->field9->Prereq2=new materia();
        $dato[0]->field9->Prereq2->Matr="";
        $dato[0]->field9->Prereq2->Curso="";
        
        
        $dato[1] = new pensumrow();
        $dato[1]->field1=new materia();
        $dato[1]->field1->nombre="Calculo 1";
        $dato[1]->field1->Matr="CBAS";
        $dato[1]->field1->Curso="2413";
        $dato[1]->field1->Creditos="4";
        $dato[1]->field1->Prereq1=new materia();
        $dato[1]->field1->Prereq1->Matr="";
        $dato[1]->field1->Prereq1->Curso="";
        $dato[1]->field1->Prereq2=new materia();
        $dato[1]->field1->Prereq2->Matr="";
        $dato[1]->field1->Prereq2->Curso="";
        
        $dato[1]->field2=new materia();
        $dato[1]->field2->nombre="Algebra Lineal";
        $dato[1]->field2->Matr="CBAS";
        $dato[1]->field2->Curso="2403";
        $dato[1]->field2->Creditos="3";
        $dato[1]->field2->Prereq1=new materia();
        $dato[1]->field2->Prereq1->Matr="CBAS";
        $dato[1]->field2->Prereq1->Curso="2413";
        $dato[1]->field2->Prereq2=new materia();
        $dato[1]->field2->Prereq2->Matr="";
        $dato[1]->field2->Prereq2->Curso="";
        
        $dato[1]->field3=new materia();
        $dato[1]->field3->nombre="Calculo 3";
        $dato[1]->field3->Matr="CBAS";
        $dato[1]->field3->Curso="2433";
        $dato[1]->field3->Creditos="4";
        $dato[1]->field3->Prereq1=new materia();
        $dato[1]->field3->Prereq1->Matr="CBAS";
        $dato[1]->field3->Prereq1->Curso="2403";
        $dato[1]->field3->Prereq2=new materia();
        $dato[1]->field3->Prereq2->Matr="CBAS";
        $dato[1]->field3->Prereq2->Curso="2423";
        
        $dato[1]->field4=new materia();
        $dato[1]->field4->nombre="Metodos Numericos";
        $dato[1]->field4->Matr="CBAS";
        $dato[1]->field4->Curso="2453";
        $dato[1]->field4->Creditos="3";
        $dato[1]->field4->Prereq1=new materia();
        $dato[1]->field4->Prereq1->Matr="";
        $dato[1]->field4->Prereq1->Curso="";
        $dato[1]->field4->Prereq2=new materia();
        $dato[1]->field4->Prereq2->Matr="";
        $dato[1]->field4->Prereq2->Curso="";
        
        $dato[1]->field5=new materia();
        $dato[1]->field5->nombre="Teoria de la Computacion";
        $dato[1]->field5->Matr="ISIS";
        $dato[1]->field5->Curso="2413";
        $dato[1]->field5->Creditos="3";
        $dato[1]->field5->Prereq1=new materia();
        $dato[1]->field5->Prereq1->Matr="ISIS";
        $dato[1]->field5->Prereq1->Curso="1433";
        $dato[1]->field5->Prereq2=new materia();
        $dato[1]->field5->Prereq2->Matr="";
        $dato[1]->field5->Prereq2->Curso="";
        
        $dato[1]->field6=new materia();
        $dato[1]->field6->nombre="Lenguajes de Programacion";
        $dato[1]->field6->Matr="ISIS";
        $dato[1]->field6->Curso="2423";
        $dato[1]->field6->Creditos="3";
        $dato[1]->field6->Prereq1=new materia();
        $dato[1]->field6->Prereq1->Matr="ISIS";
        $dato[1]->field6->Prereq1->Curso="2413";
        $dato[1]->field6->Prereq2=new materia();
        $dato[1]->field6->Prereq2->Matr="";
        $dato[1]->field6->Prereq2->Curso="";
        
        $dato[1]->field7=new materia();
        $dato[1]->field7->nombre="Electiva Ingenieria";
        $dato[1]->field7->Matr="ISISE";
        $dato[1]->field7->Curso="013";
        $dato[1]->field7->Creditos="3";
        $dato[1]->field7->Prereq1=new materia();
        $dato[1]->field7->Prereq1->Matr="";
        $dato[1]->field7->Prereq1->Curso="";
        $dato[1]->field7->Prereq2=new materia();
        $dato[1]->field7->Prereq2->Matr="";
        $dato[1]->field7->Prereq2->Curso="";
        
        $dato[1]->field8=new materia();
        $dato[1]->field8->nombre="Electiva Ingenieria";
        $dato[1]->field8->Matr="ISISE";
        $dato[1]->field8->Curso="023";
        $dato[1]->field8->Creditos="3";
        $dato[1]->field8->Prereq1=new materia();
        $dato[1]->field8->Prereq1->Matr="";
        $dato[1]->field8->Prereq1->Curso="";
        $dato[1]->field8->Prereq2=new materia();
        $dato[1]->field8->Prereq2->Matr="";
        $dato[1]->field8->Prereq2->Curso="";
        
        $dato[1]->field9=new materia();
        $dato[1]->field9->nombre="Electiva Ingenieria";
        $dato[1]->field9->Matr="ISISE";
        $dato[1]->field9->Curso="053";
        $dato[1]->field9->Creditos="3";
        $dato[1]->field9->Prereq1=new materia();
        $dato[1]->field9->Prereq1->Matr="";
        $dato[1]->field9->Prereq1->Curso="";
        $dato[1]->field9->Prereq2=new materia();
        $dato[1]->field9->Prereq2->Matr="";
        $dato[1]->field9->Prereq2->Curso="";
        
        
        $dato[2] = new pensumrow();
        $dato[2]->field1=new materia();
        $dato[2]->field1->nombre="Quimica";
        $dato[2]->field1->Matr="CBAS";
        $dato[2]->field1->Curso="3503";
        $dato[2]->field1->Creditos="3";
        $dato[2]->field1->Prereq1=new materia();
        $dato[2]->field1->Prereq1->Matr="";
        $dato[2]->field1->Prereq1->Curso="";
        $dato[2]->field1->Prereq2=new materia();
        $dato[2]->field1->Prereq2->Matr="";
        $dato[2]->field1->Prereq2->Curso="";
        
        $dato[2]->field2=new materia();
        $dato[2]->field2->nombre="Calculo 2";
        $dato[2]->field2->Matr="CBAS";
        $dato[2]->field2->Curso="2423";
        $dato[2]->field2->Creditos="4";
        $dato[2]->field2->Prereq1=new materia();
        $dato[2]->field2->Prereq1->Matr="CBAS";
        $dato[2]->field2->Prereq1->Curso="2413";
        $dato[2]->field2->Prereq2=new materia();
        $dato[2]->field2->Prereq2->Matr="";
        $dato[2]->field2->Prereq2->Curso="";
        
        $dato[2]->field3=new materia();
        $dato[2]->field3->nombre="Fisica 2";
        $dato[2]->field3->Matr="CBAS";
        $dato[2]->field3->Curso="3413";
        $dato[2]->field3->Creditos="4";
        $dato[2]->field3->Prereq1=new materia();
        $dato[2]->field3->Prereq1->Matr="CBAS";
        $dato[2]->field3->Prereq1->Curso="2423";
        $dato[2]->field3->Prereq2=new materia();
        $dato[2]->field3->Prereq2->Matr="CBAS";
        $dato[2]->field3->Prereq2->Curso="3403";
        
        $dato[2]->field4=new materia();
        $dato[2]->field4->nombre="Ecuaciones Diferenciales y en Diferencia";
        $dato[2]->field4->Matr="CBAS";
        $dato[2]->field4->Curso="2443";
        $dato[2]->field4->Creditos="4";
        $dato[2]->field4->Prereq1=new materia();
        $dato[2]->field4->Prereq1->Matr="CBAS";
        $dato[2]->field4->Prereq1->Curso="2433";
        $dato[2]->field4->Prereq2=new materia();
        $dato[2]->field4->Prereq2->Matr="";
        $dato[2]->field4->Prereq2->Curso="";
        
        $dato[2]->field5=new materia();
        $dato[2]->field5->nombre="Arquitectura y Ensamblador";
        $dato[2]->field5->Matr="ISIS";
        $dato[2]->field5->Curso="2513";
        $dato[2]->field5->Creditos="3";
        $dato[2]->field5->Prereq1=new materia();
        $dato[2]->field5->Prereq1->Matr="ISIS";
        $dato[2]->field5->Prereq1->Curso="2403";
        $dato[2]->field5->Prereq2=new materia();
        $dato[2]->field5->Prereq2->Matr="ISIS";
        $dato[2]->field5->Prereq2->Curso="1433";
        
        $dato[2]->field6=new materia();
        $dato[2]->field6->nombre="Modelos Cuantitativos";
        $dato[2]->field6->Matr="ISIS";
        $dato[2]->field6->Curso="2433";
        $dato[2]->field6->Creditos="3";
        $dato[2]->field6->Prereq1=new materia();
        $dato[2]->field6->Prereq1->Matr="CBAS";
        $dato[2]->field6->Prereq1->Curso="2603";
        $dato[2]->field6->Prereq2=new materia();
        $dato[2]->field6->Prereq2->Matr="CBAS";
        $dato[2]->field6->Prereq2->Curso="2453";
        
        $dato[2]->field7=new materia();
        $dato[2]->field7->nombre="Sistemas Dinamicos y Simulacion";
        $dato[2]->field7->Matr="ISIS";
        $dato[2]->field7->Curso="2723";
        $dato[2]->field7->Creditos="3";
        $dato[2]->field7->Prereq1=new materia();
        $dato[2]->field7->Prereq1->Matr="CBAS";
        $dato[2]->field7->Prereq1->Curso="2603";
        $dato[2]->field7->Prereq2=new materia();
        $dato[2]->field7->Prereq2->Matr="CBAS";
        $dato[2]->field7->Prereq2->Curso="2453";
        
        $dato[2]->field8=new materia();
        $dato[2]->field8->nombre="Inteligencia Artificial";
        $dato[2]->field8->Matr="ISIS";
        $dato[2]->field8->Curso="2443";
        $dato[2]->field8->Creditos="3";
        $dato[2]->field8->Prereq1=new materia();
        $dato[2]->field8->Prereq1->Matr="ISIS";
        $dato[2]->field8->Prereq1->Curso="2403";
        $dato[2]->field8->Prereq2=new materia();
        $dato[2]->field8->Prereq2->Matr="";
        $dato[2]->field8->Prereq2->Curso="";
        
        $dato[2]->field9=new materia();
        $dato[2]->field9->nombre="";
        $dato[2]->field9->Matr="";
        $dato[2]->field9->Curso="";
        $dato[2]->field9->Creditos="";
        $dato[2]->field9->Prereq1=new materia();
        $dato[2]->field9->Prereq1->Matr="";
        $dato[2]->field9->Prereq1->Curso="";
        $dato[2]->field9->Prereq2=new materia();
        $dato[2]->field9->Prereq2->Matr="";
        $dato[2]->field9->Prereq2->Curso="";
       
        
        $dato[3] = new pensumrow();
        $dato[3]->field1=new materia();
        $dato[3]->field1->nombre="Seminario de Ing de Sistemas";
        $dato[3]->field1->Matr="ISIS";
        $dato[3]->field1->Curso="4403";
        $dato[3]->field1->Creditos="1";
        $dato[3]->field1->Prereq1=new materia();
        $dato[3]->field1->Prereq1->Matr="";
        $dato[3]->field1->Prereq1->Curso="";
        $dato[3]->field1->Prereq2=new materia();
        $dato[3]->field1->Prereq2->Matr="";
        $dato[3]->field1->Prereq2->Curso="";
        
        $dato[3]->field2=new materia();
        $dato[3]->field2->nombre="Fisica 1";
        $dato[3]->field2->Matr="CBAS";
        $dato[3]->field2->Curso="3403";
        $dato[3]->field2->Creditos="4";
        $dato[3]->field2->Prereq1=new materia();
        $dato[3]->field2->Prereq1->Matr="CBAS";
        $dato[3]->field2->Prereq1->Curso="2413";
        $dato[3]->field2->Prereq2=new materia();
        $dato[3]->field2->Prereq2->Matr="";
        $dato[3]->field2->Prereq2->Curso="";
        
        $dato[3]->field3=new materia();
        $dato[3]->field3->nombre="Programacion 2";
        $dato[3]->field3->Matr="ISIS";
        $dato[3]->field3->Curso="1423";
        $dato[3]->field3->Creditos="3";
        $dato[3]->field3->Prereq1=new materia();
        $dato[3]->field3->Prereq1->Matr="ISIS";
        $dato[3]->field3->Prereq1->Curso="1413";
        $dato[3]->field3->Prereq2=new materia();
        $dato[3]->field3->Prereq2->Matr="";
        $dato[3]->field3->Prereq2->Curso="";
        
        $dato[3]->field4=new materia();
        $dato[3]->field4->nombre="Electiva de Humanidades";
        $dato[3]->field4->Matr="ISISH";
        $dato[3]->field4->Curso="023";
        $dato[3]->field4->Creditos="2";
        $dato[3]->field4->Prereq1=new materia();
        $dato[3]->field4->Prereq1->Matr="";
        $dato[3]->field4->Prereq1->Curso="";
        $dato[3]->field4->Prereq2=new materia();
        $dato[3]->field4->Prereq2->Matr="";
        $dato[3]->field4->Prereq2->Curso="";
        
        $dato[3]->field5=new materia();
        $dato[3]->field5->nombre="Bases de Datos";
        $dato[3]->field5->Matr="ISIS";
        $dato[3]->field5->Curso="4413";
        $dato[3]->field5->Creditos="3";
        $dato[3]->field5->Prereq1=new materia();
        $dato[3]->field5->Prereq1->Matr="ISIS";
        $dato[3]->field5->Prereq1->Curso="1433";
        $dato[3]->field5->Prereq2=new materia();
        $dato[3]->field5->Prereq2->Matr="";
        $dato[3]->field5->Prereq2->Curso="";
        
        $dato[3]->field6=new materia();
        $dato[3]->field6->nombre="Comunicacion y Redes";
        $dato[3]->field6->Matr="ISIS";
        $dato[3]->field6->Curso="3703";
        $dato[3]->field6->Creditos="3";
        $dato[3]->field6->Prereq1=new materia();
        $dato[3]->field6->Prereq1->Matr="CBAS";
        $dato[3]->field6->Prereq1->Curso="3413";
        $dato[3]->field6->Prereq2=new materia();
        $dato[3]->field6->Prereq2->Matr="ISIS";
        $dato[3]->field6->Prereq2->Curso="1433";
        
        $dato[3]->field7=new materia();
        $dato[3]->field7->nombre="Sistemas Operativos";
        $dato[3]->field7->Matr="ISIS";
        $dato[3]->field7->Curso="3713";
        $dato[3]->field7->Creditos="3";
        $dato[3]->field7->Prereq1=new materia();
        $dato[3]->field7->Prereq1->Matr="ISIS";
        $dato[3]->field7->Prereq1->Curso="2513";
        $dato[3]->field7->Prereq2=new materia();
        $dato[3]->field7->Prereq2->Matr="";
        $dato[3]->field7->Prereq2->Curso="";
        
        $dato[3]->field8=new materia();
        $dato[3]->field8->nombre="Electiva Ingenieria";
        $dato[3]->field8->Matr="ISISE";
        $dato[3]->field8->Curso="033";
        $dato[3]->field8->Creditos="3";
        $dato[3]->field8->Prereq1=new materia();
        $dato[3]->field8->Prereq1->Matr="";
        $dato[3]->field8->Prereq1->Curso="";
        $dato[3]->field8->Prereq2=new materia();
        $dato[3]->field8->Prereq2->Matr="";
        $dato[3]->field8->Prereq2->Curso="";
        
        $dato[3]->field9=new materia();
        $dato[3]->field9->nombre="";
        $dato[3]->field9->Matr="";
        $dato[3]->field9->Curso="";
        $dato[3]->field9->Creditos="";
        $dato[3]->field9->Prereq1=new materia();
        $dato[3]->field9->Prereq1->Matr="";
        $dato[3]->field9->Prereq1->Curso="";
        $dato[3]->field9->Prereq2=new materia();
        $dato[3]->field9->Prereq2->Matr="";
        $dato[3]->field9->Prereq2->Curso="";
        
        $dato[4] = new pensumrow();
        $dato[4]->field1=new materia();
        $dato[4]->field1->nombre="Algoritmos";
        $dato[4]->field1->Matr="ISIS";
        $dato[4]->field1->Curso="1403";
        $dato[4]->field1->Creditos="3";
        $dato[4]->field1->Prereq1=new materia();
        $dato[4]->field1->Prereq1->Matr="";
        $dato[4]->field1->Prereq1->Curso="";
        $dato[4]->field1->Prereq2=new materia();
        $dato[4]->field1->Prereq2->Matr="";
        $dato[4]->field1->Prereq2->Curso="";
        
        $dato[4]->field2=new materia();
        $dato[4]->field2->nombre="Programacion 1";
        $dato[4]->field2->Matr="ISIS";
        $dato[4]->field2->Curso="1413";
        $dato[4]->field2->Creditos="3";
        $dato[4]->field2->Prereq1=new materia();
        $dato[4]->field2->Prereq1->Matr="ISIS";
        $dato[4]->field2->Prereq1->Curso="1403";
        $dato[4]->field2->Prereq2=new materia();
        $dato[4]->field2->Prereq2->Matr="";
        $dato[4]->field2->Prereq2->Curso="";
        
        $dato[4]->field3=new materia();
        $dato[4]->field3->nombre="Electiva de Humanidades";
        $dato[4]->field3->Matr="ISISH";
        $dato[4]->field3->Curso="013";
        $dato[4]->field3->Creditos="2";
        $dato[4]->field3->Prereq1=new materia();
        $dato[4]->field3->Prereq1->Matr="";
        $dato[4]->field3->Prereq1->Curso="";
        $dato[4]->field3->Prereq2=new materia();
        $dato[4]->field3->Prereq2->Matr="";
        $dato[4]->field3->Prereq2->Curso="";
        
        $dato[4]->field4=new materia();
        $dato[4]->field4->nombre="Estructura de datos y Analisis de Algoritmos";
        $dato[4]->field4->Matr="ISIS";
        $dato[4]->field4->Curso="1433";
        $dato[4]->field4->Creditos="3";
        $dato[4]->field4->Prereq1=new materia();
        $dato[4]->field4->Prereq1->Matr="ISIS";
        $dato[4]->field4->Prereq1->Curso="1423";
        $dato[4]->field4->Prereq2=new materia();
        $dato[4]->field4->Prereq2->Matr="";
        $dato[4]->field4->Prereq2->Curso="";
        
        $dato[4]->field5=new materia();
        $dato[4]->field5->nombre="Fisica 3";
        $dato[4]->field5->Matr="CBAS";
        $dato[4]->field5->Curso="3423";
        $dato[4]->field5->Creditos="4";
        $dato[4]->field5->Prereq1=new materia();
        $dato[4]->field5->Prereq1->Matr="CBAS";
        $dato[4]->field5->Prereq1->Curso="3413";
        $dato[4]->field5->Prereq2=new materia();
        $dato[4]->field5->Prereq2->Matr="";
        $dato[4]->field5->Prereq2->Curso="";
        
        $dato[4]->field6=new materia();
        $dato[4]->field6->nombre="Ingenieria de Software 1";
        $dato[4]->field6->Matr="ISIS";
        $dato[4]->field6->Curso="2703";
        $dato[4]->field6->Creditos="3";
        $dato[4]->field6->Prereq1=new materia();
        $dato[4]->field6->Prereq1->Matr="ISIS";
        $dato[4]->field6->Prereq1->Curso="4413";
        $dato[4]->field6->Prereq2=new materia();
        $dato[4]->field6->Prereq2->Matr="";
        $dato[4]->field6->Prereq2->Curso="";
        
        $dato[4]->field7=new materia();
        $dato[4]->field7->nombre="Ingenieria de Software 2";
        $dato[4]->field7->Matr="ISIS";
        $dato[4]->field7->Curso="2713";
        $dato[4]->field7->Creditos="3";
        $dato[4]->field7->Prereq1=new materia();
        $dato[4]->field7->Prereq1->Matr="ISIS";
        $dato[4]->field7->Prereq1->Curso="2703";
        $dato[4]->field7->Prereq2=new materia();
        $dato[4]->field7->Prereq2->Matr="";
        $dato[4]->field7->Prereq2->Curso="";
        
        $dato[4]->field8=new materia();
        $dato[4]->field8->nombre="Electiva Ingenieria";
        $dato[4]->field8->Matr="ISISE";
        $dato[4]->field8->Curso="043";
        $dato[4]->field8->Creditos="3";
        $dato[4]->field8->Prereq1=new materia();
        $dato[4]->field8->Prereq1->Matr="";
        $dato[4]->field8->Prereq1->Curso="";
        $dato[4]->field8->Prereq2=new materia();
        $dato[4]->field8->Prereq2->Matr="";
        $dato[4]->field8->Prereq2->Curso="";
        
        $dato[4]->field9=new materia();
        $dato[4]->field9->nombre="";
        $dato[4]->field9->Matr="";
        $dato[4]->field9->Curso="";
        $dato[4]->field9->Creditos="";
        $dato[4]->field9->Prereq1=new materia();
        $dato[4]->field9->Prereq1->Matr="";
        $dato[4]->field9->Prereq1->Curso="";
        $dato[4]->field9->Prereq2=new materia();
        $dato[4]->field9->Prereq2->Matr="";
        $dato[4]->field9->Prereq2->Curso="";
        
        $dato[5] = new pensumrow();
        $dato[5]->field1=new materia();
        $dato[5]->field1->nombre="Ingles 1";
        $dato[5]->field1->Matr="CHUM";
        $dato[5]->field1->Curso="1903";
        $dato[5]->field1->Creditos="2";
        $dato[5]->field1->Prereq1=new materia();
        $dato[5]->field1->Prereq1->Matr="";
        $dato[5]->field1->Prereq1->Curso="";
        $dato[5]->field1->Prereq2=new materia();
        $dato[5]->field1->Prereq2->Matr="";
        $dato[5]->field1->Prereq2->Curso="";
        
        $dato[5]->field2=new materia();
        $dato[5]->field2->nombre="Ingles 2";
        $dato[5]->field2->Matr="CHUM";
        $dato[5]->field2->Curso="1913";
        $dato[5]->field2->Creditos="2";
        $dato[5]->field2->Prereq1=new materia();
        $dato[5]->field2->Prereq1->Matr="CHUM";
        $dato[5]->field2->Prereq1->Curso="1903";
        $dato[5]->field2->Prereq2=new materia();
        $dato[5]->field2->Prereq2->Matr="";
        $dato[5]->field2->Prereq2->Curso="";
        
        $dato[5]->field3=new materia();
        $dato[5]->field3->nombre="Ingles 3";
        $dato[5]->field3->Matr="CHUM";
        $dato[5]->field3->Curso="1923";
        $dato[5]->field3->Creditos="2";
        $dato[5]->field3->Prereq1=new materia();
        $dato[5]->field3->Prereq1->Matr="CHUM";
        $dato[5]->field3->Prereq1->Curso="1913";
        $dato[5]->field3->Prereq2=new materia();
        $dato[5]->field3->Prereq2->Matr="";
        $dato[5]->field3->Prereq2->Curso="";
        
        $dato[5]->field4=new materia();
        $dato[5]->field4->nombre="Ingles 4";
        $dato[5]->field4->Matr="CHUM";
        $dato[5]->field4->Curso="1933";
        $dato[5]->field4->Creditos="2";
        $dato[5]->field4->Prereq1=new materia();
        $dato[5]->field4->Prereq1->Matr="CHUM";
        $dato[5]->field4->Prereq1->Curso="1923";
        $dato[5]->field4->Prereq2=new materia();
        $dato[5]->field4->Prereq2->Matr="";
        $dato[5]->field4->Prereq2->Curso="";
        
        $dato[5]->field5=new materia();
        $dato[5]->field5->nombre="Ingles 5";
        $dato[5]->field5->Matr="CHUM";
        $dato[5]->field5->Curso="1943";
        $dato[5]->field5->Creditos="2";
        $dato[5]->field5->Prereq1=new materia();
        $dato[5]->field5->Prereq1->Matr="CHUM";
        $dato[5]->field5->Prereq1->Curso="1933";
        $dato[5]->field5->Prereq2=new materia();
        $dato[5]->field5->Prereq2->Matr="";
        $dato[5]->field5->Prereq2->Curso="";
        
        $dato[5]->field6=new materia();
        $dato[5]->field6->nombre="Ingles 6";
        $dato[5]->field6->Matr="CHUM";
        $dato[5]->field6->Curso="1953";
        $dato[5]->field6->Creditos="2";
        $dato[5]->field6->Prereq1=new materia();
        $dato[5]->field6->Prereq1->Matr="CHUM";
        $dato[5]->field6->Prereq1->Curso="1943";
        $dato[5]->field6->Prereq2=new materia();
        $dato[5]->field6->Prereq2->Matr="";
        $dato[5]->field6->Prereq2->Curso="";
        
        $dato[5]->field7=new materia();
        $dato[5]->field7->nombre="Constitucion Politica";
        $dato[5]->field7->Matr="CHUM";
        $dato[5]->field7->Curso="1323";
        $dato[5]->field7->Creditos="2";
        $dato[5]->field7->Prereq1=new materia();
        $dato[5]->field7->Prereq1->Matr="";
        $dato[5]->field7->Prereq1->Curso="";
        $dato[5]->field7->Prereq2=new materia();
        $dato[5]->field7->Prereq2->Matr="";
        $dato[5]->field7->Prereq2->Curso="";
        
        $dato[5]->field8=new materia();
        $dato[5]->field8->nombre="Etica y Profesionalismo";
        $dato[5]->field8->Matr="CHUM";
        $dato[5]->field8->Curso="1333";
        $dato[5]->field8->Creditos="2";
        $dato[5]->field8->Prereq1=new materia();
        $dato[5]->field8->Prereq1->Matr="";
        $dato[5]->field8->Prereq1->Curso="";
        $dato[5]->field8->Prereq2=new materia();
        $dato[5]->field8->Prereq2->Matr="";
        $dato[5]->field8->Prereq2->Curso="";
        
        $dato[5]->field9=new materia();
        $dato[5]->field9->nombre="";
        $dato[5]->field9->Matr="";
        $dato[5]->field9->Curso="";
        $dato[5]->field9->Creditos="";
        $dato[5]->field9->Prereq1=new materia();
        $dato[5]->field9->Prereq1->Matr="";
        $dato[5]->field9->Prereq1->Curso="";
        $dato[5]->field9->Prereq2=new materia();
        $dato[5]->field9->Prereq2->Matr="";
        $dato[5]->field9->Prereq2->Curso="";
        
        echo json_encode(array($dato));
        break; 
    
    
    /*case "sistemas":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Sistemas.png";
        echo json_encode($img);
        break;
    */
    case "quimica":
        $img="http://localhost/SubjectScheduler/server/img/pensums/Quimica.png";
        echo json_encode($img);
        break;
    
       
    
    default:
        break;        
}
?>
