<?php
	include 'config.php';
	$user = json_decode(file_get_contents('php://input'));
	$username = $user->username;
	$password = $user->password;

	$sql = "SELECT * FROM nguoidung WHERE email = '$username' AND password = '$password'";	

	$query = $conn->query($sql);
	$num_rows = $query->num_rows;
	if($num_rows > 0)
	{
		session_start();
		$_SESSION['user'] = $username;
		print $_SESSION['user'];
	}	
	else
	{
		print "error";
	}
?>