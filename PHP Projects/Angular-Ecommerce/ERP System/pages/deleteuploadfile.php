<?php
include '../includes/connection.php';
include '../includes/sidebar.php';
?><?php 

    	switch ($_GET['action']) {
    		case 'delete':
                try{
                    $filename = $_GET['filemane'];
                    $dir = "FileManager";
                    $dirHandle = opendir($dir);
                    while ($file = readdir($dirHandle)) {
                        if ($file==$filename) {
                            unlink($dir.'/'.$filename);
                        }
                    }
                    $query = 'DELETE FROM `file_manger` WHERE `ID` ='.$_GET['fileid'];
                    
                    $result = mysqli_query($db, $query) or die(mysqli_error($db));		
                    
                    if($result){
						$_SESSION['message'] = "file Uploaded Successfully";
						$_SESSION['status'] = 'success';
					}else{
						$_SESSION['message'] = 'file not uploaded';
						$_SESSION['status'] = 'error';
					}

            } catch (mysqli_sql_exception $e) {
                var_dump($e);
                exit;
            }
            ?>
    			<script type="text/javascript">window.location = "FileManger.php";</script>					
            <?php
    			break;
        }
?>