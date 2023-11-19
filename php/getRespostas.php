<?php
session_start();
require_once 'conexao.php';
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST ");
header("Access-Control-Allow-Origin: *");

$id_pergunta = $_GET["id_pergunta"];

try {
    $stmt = $pdo->prepare("SELECT resposta AS resposta FROM resposta WHERE id_pergunta = $id_pergunta;");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result == null) {
        echo json_encode("Vazio"); 
    } else {
        
        echo json_encode($result);
    }
    
} catch (PDOException $e) {
    echo json_encode($e->getMessage());
}

?>