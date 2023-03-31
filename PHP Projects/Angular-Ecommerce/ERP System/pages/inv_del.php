<?php
include '../includes/connection.php';
include 'session.php';
          
	if (!isset($_GET['do']) || $_GET['do'] != 1) {
						
    	switch ($_GET['type']) {
    		case 'product':
    			$query = 'DELETE FROM product WHERE PRODUCT_ID = ' . $_GET['id'];
    			$result = mysqli_query($db, $query) or die(mysqli_error($db));	
				
				if($result){
					$_SESSION['message'] = "Product Successfully Deleted";
					$_SESSION['status'] = 'success';
				}else{
					$_SESSION['message'] = 'Product not Deleted';
					$_SESSION['status'] = 'error';
				}		
            ?>
    			<script type="text/javascript">window.location = "inventory.php";</script>					
            <?php
    			//break;
            }
	}
?>