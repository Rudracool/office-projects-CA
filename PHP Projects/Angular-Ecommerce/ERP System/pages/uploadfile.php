<?php
include '../includes/connection.php';
include 'session.php';

$array = [];

switch ($_GET['action']) {
    case 'upload':
        $target_dir = "FileManager/";
        $target_file = $target_dir . basename($_FILES["file_upload"]["name"]);
        $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);
        $fileExist;
        if (file_exists($target_file)) {
            $fileExist=0;
            
        }else{
            $fileExist=1;
        }
        
        if($fileExist == 1){

            if (move_uploaded_file($_FILES["file_upload"]["tmp_name"], $target_file)) {

            } else {
                $imgUploadErr = [
                   
                    'message' => "Sorry, there was an error uploading your Image.",
                    "success" => false
                   
                ];
                echo json_encode($imgUploadErr);
                return;
            }
        }else{
            $existUploadErr = [
                   
                'message' => "The file " . basename($_FILES["file_upload"]["name"]) . " already exists.",
                "success" => false
               
            ];
            echo json_encode($existUploadErr);
           return;
        }

        $imageName = basename($_FILES["file_upload"]["name"]); // used to store the filename in a variable
        // $data = pathinfo($imageName,PATHINFO_FILENAME);
        
        
        // $imageConatiner;
        // $pos = strpos($data, '_');
        // $Internalid;
    
        // if(false !== $pos) {
        //     $imageConatiner = $data;
        // }
        // else {
        //     $Internalid = explode("_", $data);
        //     $imageInternalid = $Internalid[0];
        //     $imageConatiner = $imageInternalid;
        // }
        $imageConatiner=$_POST['filenameWithoutExt'];
        $imageDir = $target_file;
        $imageType = basename($_FILES["file_upload"]["type"]);
        
        try {
            if($fileExist == 0){
               
            }else{

                $query = "INSERT INTO file_manger
                        (INTERNAL_ID, IMAGE_DIR, IMAGE_NAME, IMAGE_TYPE)
                        VALUES ('{$imageConatiner}','{$imageDir}','{$imageName}','{$imageType}');";
    
                $result = mysqli_query($db, $query) or die('Error in updating and creating attributes in ' . $query);
                $array=[
                    
                    "message"=>"file Added successfully",
                    "success" => true
                ];
                echo json_encode($array);
                if($result){
                    $_SESSION['message'] = "file Successfully added";
                    $_SESSION['status'] = 'success';
                }else{
                    $_SESSION['message'] = 'File not added';
                    $_SESSION['status'] = 'error';
                }		
            }
        } catch (mysqli_sql_exception $e) {
            var_dump($e);
            exit;
        }

         
    break;
    // for delete the file name and file type in the folder and database.
    case 'delete':
        
    break;
}
