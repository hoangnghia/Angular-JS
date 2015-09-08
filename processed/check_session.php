<?php
	session_start();
	if(isset($_SESSION['user']))
	{
		print "Tồn tại session";
	}