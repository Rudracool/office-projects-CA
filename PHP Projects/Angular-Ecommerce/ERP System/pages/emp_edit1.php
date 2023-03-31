<?php
include '../includes/connection.php';
include 'session.php';

			$zz = $_POST['id'];
			$fname = $_POST['firstname'];
            $lname = $_POST['lastname'];
            $gen = $_POST['gender'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $hdate = $_POST['hireddate'];
            $prov = $_POST['province'];
            $cit = $_POST['city'];
		
	 			$query = 'UPDATE employee e join location l on l.LOCATION_ID=e.LOCATION_ID set FIRST_NAME="'.$fname.'",
					LAST_NAME="'.$lname.'",
					GENDER="'.$gen.'", EMAIL="'.$email.'", PHONE_NUMBER="'.$phone.'", HIRED_DATE ="'.$hdate.'", l.PROVINCE ="'.$prov.'", l.CITY ="'.$cit.'" WHERE
					EMPLOYEE_ID ="'.$zz.'"';
					$result = mysqli_query($db, $query) or die(mysqli_error($db));
				
					if($result){
						$_SESSION['message'] = "Employee Successfully updated";
						$_SESSION['status'] = 'success';
					}else{
						$_SESSION['message'] = 'Employee not updated';
						$_SESSION['status'] = 'error';
					}		
?>	
	<script type="text/javascript">
			// alert("You've Update Employee Successfully.");
			window.location = "employee.php";
		</script>