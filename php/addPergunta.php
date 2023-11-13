<?php
session_start();
require_once 'conexao.php';
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST ");
header("Access-Control-Allow-Origin: *");

$id_user = $_SESSION['id_user'];
$titulo = $_POST['titulo'];
$pergunta = $_POST['pergunta'];

try {
	$sql = "INSERT INTO perguntas (titulo, pergunta, id_user) VALUES(:titulo, :pergunta, :id_user)";

	$stmt = $pdo->prepare($sql);
	$stmt->bindParam(':titulo', $titulo);
	$stmt->bindParam(':pergunta', $pergunta);
	$stmt->bindParam(':id_user', $id_user);
	$result = $stmt->execute();

	if (!$result) {
		echo json_encode($stmt->errorInfo());
		exit;
	} else {
		echo json_encode(true);
	}

} catch (PDOException $e) {
	echo json_encode("Erro" . $e->getMessage());
}