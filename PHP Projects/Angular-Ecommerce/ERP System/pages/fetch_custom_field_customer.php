<?php
include '../includes/connection.php';
$queryData1 = 'SHOW COLUMNS FROM customer';
$resultData1 = mysqli_query($db, $queryData1) or die(mysqli_error($db));
$entityField = 'custentity';
$Data = [];
while ($fetchData1 = mysqli_fetch_assoc($resultData1)) {
    $fieldVal = $fetchData1['Field'];
    if ($entityField == explode("_", $fieldVal)[0]) {
        $Data[] = $fieldVal;       
    }
}
$query2 = "SELECT * from `additional_attributes`";
$resultData2 = mysqli_query($db, $query2) or die(mysqli_error($db));
$ResultantData =[];
while($fetchData2 = mysqli_fetch_array($resultData2)){
    
    for($i=0;$i<count($Data);$i++){
        if($Data[$i] == $fetchData2['ATTRIBUTES_ID'] ){
            $ResultantData[] = $fetchData2;
        }
    }
}

?>