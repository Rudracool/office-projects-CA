<?php
include '../includes/connection.php';
include 'session.php';

	if (!isset($_GET['do']) || $_GET['do'] != 1) {
						
    	switch ($_GET['type']) {
    		case 'user':
    			$query = 'DELETE FROM users WHERE ID = ' . $_GET['id'];
    			$result = mysqli_query($db, $query) or die(mysqli_error($db));	
				
				if($result){
                    $_SESSION['message'] = "User Successfully Deleted";
                    $_SESSION['status'] = 'success';
                }else{
                    $_SESSION['message'] = 'User Not Deleted';
                    $_SESSION['status'] = 'error';
                }
            ?>
    			<script type="text/javascript">window.location = "user.php";</script>					
            <?php
    			//break;
            }
	}
?>