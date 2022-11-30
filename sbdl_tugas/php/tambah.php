<?php
$connection = new mysqli("localhost", "root", "", "db_kampus");
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

try {
    foreach ($data as  $value) {
        $sql = "INSERT INTO tb_kampus (nama, nim, prodi) VALUES ('" . $value['nama'] . "', '" . $value['nim'] . "', '" . $value['kdProdi'] . "')";
        $connection->query($sql);
    }
    echo "Data berhasil disimpan";
} catch (Exception $e) {
    echo "Data sudah tersimpan";
}
