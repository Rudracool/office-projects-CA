<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
  require_once '../../config.php';
  $sqlData="SELECT * FROM  headernavigation";
  $get = $mysqli->query($sqlData);
  $newArr=[];

  while ($rowData = mysqli_fetch_array($get)){
            $object = new stdClass();

            $object->id = $rowData[0];
            $object->Name = $rowData[1];
            $object->classname = $rowData[2];
            
            $newArr[] = $object;
            
          } 
          echo json_encode($newArr);


?>