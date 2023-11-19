<?php
 
require_once 'conexao.php';
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST ");
header("Access-Control-Allow-Origin: *");

$matricula = $_POST['matricula-login'];
$senha = md5($_POST['password-login']);


try {
    $sql = "SELECT * FROM users WHERE matricula = '$matricula' AND senha = '$senha'";
    $stmt = $pdo->prepare($sql);
    $result = $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($rows) > 0) {
        
        $rows[0]["senha"] = null;
        echo json_encode($rows);
        
        
    } else {
        echo json_encode("Usuario ou senha invalidos");
        
    }
} catch (PDOException $e) {
    echo json_encode( "Erro na consulta: " . $e->getMessage());
}

?>