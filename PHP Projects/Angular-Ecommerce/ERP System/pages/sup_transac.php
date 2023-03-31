<?php
include '../includes/connection.php';
include 'session.php';
?>
          <!-- Page Content -->
          <div class="col-lg-12">
            <?php
              $name = $_POST['companyname'];
              $prov = $_POST['province'];
              $cit = $_POST['city'];
              $phone = $_POST['phonenumber'];
        
              switch($_GET['action']){
                case 'add':     
                    $query = "INSERT INTO location
                              (LOCATION_ID, PROVINCE, CITY)
                              VALUES (Null,'{$prov}','{$cit}')";
                   $result= mysqli_query($db,$query)or die ('Error in updating location in Database');
                   $messagemerge='';
                    if($result){
                      $messagemerge = "Location is updated";
                    }else{
                      $messagemerge = ' Error in updating location in Database';
                    }
                    $query2 = "INSERT INTO supplier
                              (SUPPLIER_ID, COMPANY_NAME, LOCATION_ID, PHONE_NUMBER)
                              VALUES (Null,'{$name}',(SELECT MAX(LOCATION_ID) FROM location),'".$phone."')";
                    $result2 = mysqli_query($db,$query2)or die ('Error in updating supplier in Database');
                    if($result2){
                      $messagemerge .= "& supplier is updated";
                    }else{
                      $messagemerge .= '& Error in updating supplier in Database';
                    }

                    if($messagemerge != ""){
                      $_SESSION['message'] = $messagemerge;
                      $_SESSION['status'] = 'warning';
                    }
                break;
              }
            ?>
              <script type="text/javascript">window.location = "supplier.php";</script>
          </div>

<?php
include '../includes/footer.php';
?>