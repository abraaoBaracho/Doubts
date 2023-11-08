<?php
$host = 'localhost';
$user = 'abraao';
$password = 'abraao123';
$dbName = 'projeto';

$dsn = 'mysql:host=' . $host . ';dbname=' . $dbName;


try {
    $pdo = new PDO($dsn, $user, $password);
}
catch ( PDOException $e ) {
    echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
}
?>