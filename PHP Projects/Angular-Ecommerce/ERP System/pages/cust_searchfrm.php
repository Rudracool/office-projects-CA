<?php
include '../includes/connection.php';
include '../includes/sidebar.php';
include './fetch_custom_field_customer.php';
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
  $query = 'SELECT * FROM customer WHERE CUST_ID ='.$_GET['id'];
  $result = mysqli_query($db, $query) or die(mysqli_error($db));
    while($row = mysqli_fetch_array($result))
    {   
      $zz= $row['CUST_ID'];
      $i= $row['FIRST_NAME'];
      $a=$row['LAST_NAME'];
      $b=$row['PHONE_NUMBER'];
      $c = '';
      foreach ($ResultantData as $key => $value) {
        // if($row[$value['ATTRIBUTES_ID']]){
        $CustD = $value['ATTRIBUTES_ID'];
        if (is_null($row[$CustD])) {
          $row[$CustD] = "";
          // $value = new stdClass();
          $value['custval'] = $row[$CustD];
        } else {
          $value['custval'] = $row[$CustD];
        }
    
        $c .= "<div class='form-group row text-left'>

              <div class='col-sm-3 text-primary'>
          <h5>
          {$value['NAME']} <br>
          </h5>
        </div>

        <div class='col-sm-9'>
          <h5>
            : {$value['custval']}  <br>
          </h5>
        </div>
        
      </div>
      ";
      }
    }
    $id = $_GET['id'];
?>
            
            <center><div class="card shadow mb-4 border-bottom-primary">
            <div class="card-header py-3">
                            
            <div class="absolute-back-button">
              <a href="customer.php" type="button" class="back-btn-arrow"> <div></div></a>
            </div>

              <h4 class="m-2 font-weight-bold text-primary">Customer's Detail</h4>
            </div>
            <!-- <a href="customer.php" type="button" class="btn btn-primary bg-gradient-primary btn-block"> <i class="fas fa-flip-horizontal fa-fw fa-share"></i> Back </a> -->
            <div class="card-body">
                

                    <div class="form-group row text-left">

                      <div class="col-sm-3 text-primary">
                        <h5>
                          Full Name<br>
                        </h5>
                      </div>

                      <div class="col-sm-9">
                        <h5>
                          : <?php echo $i; ?> <?php echo $a; ?> <br>
                        </h5>
                      </div>

                    </div>

                    <div class="form-group row text-left">

                      <div class="col-sm-3 text-primary">
                        <h5>
                          Contact #<br>
                        </h5>
                      </div>

                      <div class="col-sm-9">
                        <h5>
                          : <?php echo $b; ?> <br>
                        </h5>
                      </div>
                      
                    </div>
                    <?php
                    echo $c;
                    ?>
                    <div class="button-container col-md-12 d-flex">

            <div class="col-md-2">
              <a href="cust_edit.php?action=edit & id=<?php echo $zz;?>" class="btn btn-success btn-block Explore-more-btn"><i class="fa fa-edit fa-fw"></i>Edit</a>
            </div>
            
          </div>
            </div>
          </div>

<?php
include '../includes/footer.php';
?>