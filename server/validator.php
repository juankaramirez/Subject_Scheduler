<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


class user{
    var $codigo;
    var $password;
}

switch ($_GET["login"]){
    case "user":
        $users[0] = new user();
        $users[0] -> codigo="T00019974";
        $users[0] -> password="123qwe";
        
        $users[1] = new user();
        $users[1] -> codigo="T00020114";
        $users[1] -> password="123qwe";
        
        echo json_encode(array($users));
        break;
}
?>
