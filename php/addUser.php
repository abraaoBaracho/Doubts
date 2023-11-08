<?php
require_once 'conexao.php';
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST ");
header("Access-Control-Allow-Origin: *");

$nome = $_POST["name"];
$matricula = $_POST["matricula"];
$periodo = $_POST["periodo"];
$senha = md5($_POST["password"]);


try {
	$sql = "INSERT INTO users (nome, matricula, periodo, senha) VALUES(:nome, :matricula, :periodo, :senha)";

	$stmt = $pdo->prepare($sql);
	$stmt->bindParam(':nome', $nome);
	$stmt->bindParam(':matricula', $matricula);
	$stmt->bindParam(':periodo', $periodo);
	$stmt->bindParam(':senha', $senha);
	$result = $stmt->execute();

	if (!$result) {
		echo json_encode(var_dump($stmt->errorInfo()));
		exit;
	} else {
		echo json_encode(true);
		exit;
	}
} catch (PDOException $e) {
	echo json_encode($e->getMessage());
	//echo "Erro ao cadastrar" . $e->getMessage();
	
}

?>