<?php
	include 'config.php';


	

	if(isset($_GET['loadnews']))
	{
		$idDanhMuc = $_GET['loadnews'];
		$sql = "SELECT * FROM tintuc WHERE magiai_tintuc = $idDanhMuc and status = 1";
		$query = $conn->query($sql);

		$data = array();
		if($query->num_rows > 0)
		{
			while ($row = $query->fetch_object()) {
				$data[] = $row;			
			}
		}
		else
		{
			$data[] = null;
		}

		$conn->close();
		echo json_encode($data);
	}

	if(isset($_GET['video']))
	{
		$id = $_GET['video'];
		$sql = "SELECT * FROM video WHERE ma_giaidau_video = $id and status = 1";
		$query = $conn->query($sql);

		$data = array();
		if($query->num_rows > 0)
		{
			while ($row = $query->fetch_object()) {
				$data[] = $row;			
			}
		}
		else
		{
			$data[] = null;
		}

		$conn->close();
		echo json_encode($data);
	}
	if(isset($_GET['loaddanhmuc']))
	{
		$sql = "SELECT * FROM giaidau_tintuc WHERE status = 1";
		$query = $conn->query($sql);

		$data = array();
		if($query->num_rows > 0)
		{
			while ($row = $query->fetch_object()) {
				$data[] = $row;			
			}
		}
		else
		{
			$data[] = null;
		}

		$conn->close();
		echo json_encode($data);
	}
	if(isset($_GET['loadkenhtivi']))
	{
		$sql = "SELECT * FROM tivi WHERE status = 1";
		$query = $conn->query($sql);

		$data = array();
		if($query->num_rows > 0)
		{
			while ($row = $query->fetch_object()) {
				$data[] = $row;			
			}
		}
		else
		{
			$data[] = null;
		}

		$conn->close();
		echo json_encode($data);
		}
		if(isset($_GET['loadbangxephang']))
			{
				$sql = "SELECT * FROM bangxephangngoaihanganh WHERE status = 1";
				$query = $conn->query($sql);

				$data = array();
				if($query->num_rows > 0)
				{
					while ($row = $query->fetch_object()) {
						$data[] = $row;			
					}
				}
				else
				{
					$data[] = null;
				}

				$conn->close();
				echo json_encode($data);
				}

		if(isset($_GET['kenhtivi']))
	{
		$makenh = $_GET['kenhtivi'];
		$sql = "SELECT * FROM tivi WHERE id = $makenh and status = 1";
		$query = $conn->query($sql);

		$data = array();
		if($query->num_rows > 0)
		{
			while ($row = $query->fetch_object()) {
				$data[] = $row;			
			}
		}
		else
		{
			$data[] = null;
		}

		$conn->close();
		echo json_encode($data);
		}
	if(isset($_GET['chitiettintuc']))
	{
		$id = $_GET['chitiettintuc'];
		$sql = "SELECT * FROM tintuc WHERE matintuc = $id and status = 1";
		$query = $conn->query($sql);

		$data = array();
		if($query->num_rows > 0)
		{
			while ($row = $query->fetch_object()) {
				$data[] = $row;			
			}
		}
		else
		{
			$data[] = null;
		}

		$conn->close();
		echo json_encode($data);

	}

	if(isset($_GET['chitietvideo']))
	{
		$id = $_GET['chitietvideo'];
		$sql = "SELECT * FROM video WHERE mavideo = $id and status = 1";
		$query = $conn->query($sql);

		$data = array();
		if($query->num_rows > 0)
		{
			while ($row = $query->fetch_object()) {
				$data[] = $row;			
			}
		}
		else
		{
			$data[] = null;
		}

		$conn->close();
		echo json_encode($data);

	}
	