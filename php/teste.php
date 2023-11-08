<?php
require_once 'conexao.php';
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST ");
header("Access-Control-Allow-Origin: *");

$sql = "SELECT * FROM users";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':nome', $nome);
$stmt->bindParam(':matricula', $matricula);
$stmt->bindParam(':periodo', $periodo);
$stmt->bindParam(':senha', $senha);
$result = $stmt->execute();

echo json_encode($result);

?>