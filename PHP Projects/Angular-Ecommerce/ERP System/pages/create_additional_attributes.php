<?php
include '../includes/connection.php';
include 'session.php';
?>
          <!-- Page Content -->
          <div class="col-lg-12">
            <?php

              $attributesId = $_POST['ATTRIBUTES_ID'];
              $nameAttr = $_POST['NAME'];
              $appliedTableName = $_POST['APPLIESTO'];
              $appliedTableID = $_POST['APPLIESTO'];
              // $appliedTableID = $_POST['APPLIED_TABLE_ID'];
              $FieldTypes = $_POST['TYPE_OF_FIELD'];

              $createField = [
                "category" => "custcategories",
                "customer" => "custentity",
                "employee" => "custemployee",
                "job" => "custjob",
                "location" => "custlocation",
                "manager" => "custmanager",
                "product" => "custitem",
                "supplier" => "custsupplier",
                "transaction" => "custtransaction",
                "transaction_details" => "custbody",
                "users" => "custusers"
              ];
              $fieldIdChange="";
              foreach($createField as $key=>$value) {
                if($key == $appliedTableID){
                  $fieldIdChange = "{$value}_{$attributesId}" ;
                  
                }           
              }
              echo $fieldIdChange;
             
              
              switch($_GET['action']){
                case 'add': 
                 
                    $query = "INSERT INTO additional_attributes
                              (ATTRIBUTES_ID, NAME, APPLIESTO, APPLIED_TABLE_ID, TYPE_OF_FIELD)
                              VALUES ('{$fieldIdChange}','{$nameAttr}','{$appliedTableName}','{$appliedTableID}','{$FieldTypes}');";
                    // Adding the new data inside the table
                    
                    $query .= "ALTER TABLE `{$appliedTableID}`
                              ADD COLUMN `{$fieldIdChange}` VARCHAR( 255 );";
                   $uploadData = mysqli_multi_query($db,$query)or die ('Error in updating and creating attributes in '. $query);

                   if($uploadData){
                      $_SESSION['message'] = 'Additional attributes create sucessfully';
                      $_SESSION['status'] = 'success';
                   }else{
                    $_SESSION['message'] = 'Additional attributes not created';
                    $_SESSION['status'] = 'error';

                   }

                    // echo $query;
                break;
              }
            ?>
              <script type="text/javascript">
                
              window.location = "CustomAttributes.php";
              </script>
          </div>

<?php
include '../includes/footer.php';
?>