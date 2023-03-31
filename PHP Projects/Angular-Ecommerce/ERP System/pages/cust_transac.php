<?php
include '../includes/connection.php';
include '../includes/sidebar.php';
?><?php 

                $query = 'SELECT ID, t.TYPE
                          FROM users u
                          JOIN type t ON t.TYPE_ID=u.TYPE_ID WHERE ID = '.$_SESSION['MEMBER_ID'].'';
                $result = mysqli_query($db, $query) or die (mysqli_error($db));
      
                while ($row = mysqli_fetch_assoc($result)) {
                          $Aa = $row['TYPE'];
                   
if ($Aa=='User'){
           
             ?>    <script type="text/javascript">
                      //then it will be redirected
                      alert("Restricted Page! You will be redirected to POS");
                      window.location = "pos.php";
                  </script>
             <?php   }
                         
           
}   
            ?>
          <!-- Page Content -->
          <div class="col-lg-12">
            <?php
              // $fname = $_POST['firstname'];
              // $lname = $_POST['lastname'];
              // $pn = $_POST['phonenumber'];

        
              switch($_GET['action']){
                case 'add':     

                  $keys = array();
                  $values = array();
                  foreach($_POST as $key => $value){
                      $keys[] = $key;
                      $values[] = $value;
                  }
                  $query = "INSERT INTO `customer`(`".implode("`,`", $keys)."`) VALUES('".implode("','", $values)."')";
                    // $query = "INSERT INTO customer
                    // (CUST_ID, FIRST_NAME, LAST_NAME, PHONE_NUMBER)
                    // VALUES (Null,'{$fname}','{$lname}','{$pn}')";
                   $result = mysqli_query($db,$query)or die ('Error in updating Database');
                    if($result){
                      $_SESSION['message'] = "You've Update Customer Successfully";
                      $_SESSION['status'] = 'success';
                    }else{
                      $_SESSION['message'] = 'Customer Not updated';
                      $_SESSION['status'] = 'error';
                    }
                break;
              }
            ?>
              <script type="text/javascript">
                window.location = "customer.php";
              </script>
          </div>

<?php
include'../includes/footer.php';
?>