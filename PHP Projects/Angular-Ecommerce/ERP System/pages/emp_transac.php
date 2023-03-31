<?php
include '../includes/connection.php';
include 'session.php';
?>
            <?php
            $fname = $_POST['firstname'];
            $lname = $_POST['lastname'];
            $gen = $_POST['gender'];
            $email = $_POST['email'];
            $phone = $_POST['phonenumber'];
            $jobb = $_POST['jobs'];
            $hdate = $_POST['hireddate'];
            $prov = $_POST['province'];
            $cit = $_POST['city'];

           $result =  mysqli_query($db, "INSERT INTO location
                              (LOCATION_ID, PROVINCE, CITY)
                              VALUES (Null,'$prov','$cit')");
             if($result){
              $_SESSION['message'] = "Location Successfully uploaded";
              $_SESSION['status'] = 'success';
            }else{
              $_SESSION['message'] = 'Location not uploaded';
              $_SESSION['status'] = 'error';
            }		
            mysqli_query($db, "INSERT INTO employee
                              (EMPLOYEE_ID, FIRST_NAME, LAST_NAME,GENDER, EMAIL, PHONE_NUMBER, JOB_ID, HIRED_DATE, LOCATION_ID)
                              VALUES (Null,'{$fname}','{$lname}','{$gen}','{$email}','{$phone}','{$jobb}','{$hdate}',(SELECT MAX(LOCATION_ID) FROM location))");

if($result){
  $_SESSION['message'] = "Employee Successfully created";
  $_SESSION['status'] = 'success';
}else{
  $_SESSION['message'] = 'Employee not created';
  $_SESSION['status'] = 'error';
}		
            header('location:employee.php');
            ?>