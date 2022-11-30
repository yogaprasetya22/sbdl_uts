<?php
// $connection = new mysqli("localhost", "root", "", "db_kampus");
// if ($connection->connect_error) {
//     die("Connection failed: " . $connection->connect_error);
// }

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

echo "Data berhasil disimpan : $data->nama";
    