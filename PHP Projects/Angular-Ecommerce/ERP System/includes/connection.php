<?php
//  $db = mysqli_connect('localhost', 'id20045032_admin', 'RudraSucharita@8980','id20045032_erp_system') or
//         die ('Unable to connect. Check your connection parameters.');
        // mysqli_select_db($db, 'id20045032_erp_system' ) or die(mysqli_error($db));
 $db = mysqli_connect('localhost:3308', 'root', '') or
        die ('Unable to connect. Check your connection parameters.');
        mysqli_select_db($db, 'erp3' ) or die(mysqli_error($db));
?>