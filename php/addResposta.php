<?php

require_once 'conexao.php';
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST ");
header("Access-Control-Allow-Origin: *");

$id_user = $_POST['id_user'];
$resposta = $_POST['resposta'];
$id_pergunta = $_POST['id_pergunta'];

try {
	$sql = "INSERT INTO resposta (resposta, id_user, id_pergunta) VALUES(:titulo, :id_user, :id_pergunta)";

	$stmt = $pdo->prepare($sql);
	$stmt->bindParam(':titulo', $resposta);
    $stmt->bindParam(':id_user', $id_user);
	$stmt->bindParam(':id_pergunta', $id_pergunta);
	$result = $stmt->execute();

	if (!$result) {
		echo json_encode($stmt->errorInfo());
		exit;
	} else {
		echo json_encode("Resposta cadastrada com sucesso!");
        
	}

} catch (PDOException $e) {
	echo json_encode("Erro" . $e->getMessage());
}