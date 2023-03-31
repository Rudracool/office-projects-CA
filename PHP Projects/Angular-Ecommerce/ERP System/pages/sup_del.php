<?php
include '../includes/connection.php';
include 'session.php';

	if (!isset($_GET['do']) || $_GET['do'] != 1) {
						
    	switch ($_GET['type']) {
    		case 'supplier':
    			$query = 'DELETE FROM supplier WHERE SUPPLIER_ID = ' . $_GET['id'];
    			$result = mysqli_query($db, $query) or die(mysqli_error($db));	
				if($result){
					$_SESSION['message'] = "Supplier Successfully Deleted";
					$_SESSION['status'] = 'success';
				}else{
					$_SESSION['message'] = 'something went wrong';
					$_SESSION['status'] = 'error';
					
				}			
            ?>
    			<script type="text/javascript">;window.location = "supplier.php";</script>					
            <?php
    			//break;
            }
	}
?>