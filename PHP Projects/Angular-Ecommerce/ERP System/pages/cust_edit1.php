<?php
include('../includes/connection.php');
			$zz = $_POST['id'];
			
	   	
		
			$keys = array();
			$values = array();
			$query = 'UPDATE `customer` set ';
			$numItems = count($_POST);
			$i = 0;
			foreach($_POST as $key => $value){
				$keys[] = $key;
				$values[] = $value;
				if($key != 'id'){

					$query.= $key.'="'.$value.'"';
					if(++$i === $numItems-1) {
						// echo 'lastele';
					}else{
						$query.=',';
						// echo 'not last ';
					}
				}
			}
			$query.='WHERE CUST_ID ="'.$zz.'"';		
					$result = mysqli_query($db, $query) or die(mysqli_error($db));

					if($result){
						$_SESSION['message'] = "You've Update Customer Successfully";
						$_SESSION['status'] = 'success';
					}else{
						$_SESSION['message'] = 'Customer Not updated';
						$_SESSION['status'] = 'error';
					}
							
?>	
	<script type="text/javascript">
			// alert("You've Update Customer Successfully.");
			window.location = "customer.php";
		</script>