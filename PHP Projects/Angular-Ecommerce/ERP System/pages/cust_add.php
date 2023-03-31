<?php
  include '../includes/connection.php';
  include '../includes/sidebar.php';
  include './fetch_custom_field_customer.php';
  
?>
<?php

  $query = 'SELECT ID, t.TYPE
            FROM users u
            JOIN type t ON t.TYPE_ID=u.TYPE_ID WHERE ID = ' . $_SESSION['MEMBER_ID'] . '';
  $result = mysqli_query($db, $query) or die(mysqli_error($db));

  while ($row = mysqli_fetch_assoc($result)) {
    $Aa = $row['TYPE'];

    if ($Aa == 'User') {

      ?> 
        <script type="text/javascript">
          //then it will be redirected
          alert("Restricted Page! You will be redirected to POS");
          window.location = "pos.php";
        </script>
      <?php   
    }
  }
?>

<center>
  <div class="card shadow mb-4 border-bottom-primary">
    <div class="card-header py-3">

      <div class="absolute-back-button">
        <a href="customer.php" type="button" class="back-btn-arrow">
          <div></div>
        </a>
      </div>

      <h4 class="m-2 font-weight-bold text-primary">Add Customers</h4>
    </div>
    <!-- <a href="customer.php" type="button" class="btn btn-primary bg-gradient-primary">Back</a> -->
    <div class="card-body">
      <div class="table-responsive">
        <!-- <form role="form" method="post" action="cust_transac.php?action=add">
          <div class="form-group">
            <input class="form-control" placeholder="First Name" name="firstname" required>
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="Last Name" name="lastname" required>
          </div>
          <div class="form-group">
            <input class="form-control" placeholder="Phone Number" name="phonenumber" required>
          </div>
          <hr>

          <button type="submit" class="btn btn-success btn-block"><i class="fa fa-check fa-fw"></i>Save</button>
          <button type="reset" class="btn btn-danger btn-block"><i class="fa fa-times fa-fw"></i>Reset</button>

        </form> -->
        <form role="form" id="uploadadditionalAttributes" action="cust_transac.php?action=add" method="post">
          <div class="form-group col-md-6">
          <label for="FIRST_NAME" class="label-controller"> First Name</label>
            <input class="form-control" placeholder="First Name" name="FIRST_NAME" required>
          </div>
          <div class="form-group col-md-6">
          <label for="LAST_NAME" class="label-controller"> Last Name</label>
            <input class="form-control" placeholder="Last Name" name="LAST_NAME" required>
          </div>
          <div class="form-group col-md-6">
            <label for="PHONE_NUMBER" class="label-controller"> Phone Number</label>
              <input class="form-control" placeholder="Phone Number" name="PHONE_NUMBER" required>
          </div>
<!-- 
          <div class="form-group col-md-6">

          </div> -->
          <?php 
           foreach($ResultantData as $key=>$value) {
            ?>
            <div class="form-group col-md-6">
            <label for="<?php echo $value['ATTRIBUTES_ID']?>" class="label-controller"> <?php echo $value['NAME']?></label>
              <input class="form-control" type="<?php echo $value['TYPE_OF_FIELD']?>" placeholder="Enter Your <?php echo $value['NAME']?>" name="<?php echo $value['ATTRIBUTES_ID']?>" required>
          </div>
          <?php
          }
          ?>
          
          

          <hr>
          <div class="button-container col-md-12 d-flex">

            <div class="col-md-2">
              <button type="submit" class="btn btn-success btn-block Explore-more-btn"><i class="fa fa-check fa-fw"></i>Save</button>
            </div>
            <div class="col-md-2">
              <button type="reset" class="btn btn-danger btn-block Explore-more-btn-reverse"><i class="fa fa-times fa-fw"></i>Reset</button>
            </div>
          </div>


        </form>
      </div>
    </div>
  </div>
</center>

<script>
  // $(()=>{
  //   $.ajax({

  //   })
  // })
  // $('#additionalAttrAddedCustomer')
            
</script>
<?php
  include '../includes/footer.php';
?>