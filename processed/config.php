<?php
	
	$host = "localhost";
	$user = "root";
	$password = "123456789";
	$db = "livescore";

	$conn = new mysqli($host, $user, $password, $db);	
	mysqli_set_charset( $conn, 'utf8' );
	if($conn->connect_error)
	{
		die("Kết nối CSDL thất bại ". $conn->connect_error);
	}