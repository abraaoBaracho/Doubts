<?php
require_once 'conexao.php';
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST ");
header("Access-Control-Allow-Origin: *");

$nome = $_POST["name"];
$matricula = $_POST["matricula"];
$periodo = $_POST["periodo"];
$senha = md5($_POST["password"]);
$confirmacao = $_POST["password-login"];

if ($senha == $confirmacao) {
	
try {
	$sql = "INSERT INTO users (nome, matricula, periodo, senha) VALUES(:nome, :matricula, :periodo, :senha)";

	$stmt = $pdo->prepare($sql);
	$stmt->bindParam(':nome', $nome);
	$stmt->bindParam(':matricula', $matricula);
	$stmt->bindParam(':periodo', $periodo);
	$stmt->bindParam(':senha', $senha);
	$result = $stmt->execute();

	if (!$result) {
		echo json_encode("Usuario já cadastrado");
		exit;
	} else {
		echo json_encode("Usuario cadastrado com sucesso");
		exit;
	}
} catch (PDOException $e) {
	echo json_encode($e->getMessage());
	//echo "Erro ao cadastrar" . $e->getMessage();
	
}
}else{
	echo json_encode("As senhas não conferem");
}

?>