<?php
include '../includes/connection.php';
include '../includes/sidebar.php';
include './fetch_custom_field_customer.php';

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
$query = 'SELECT * FROM customer WHERE CUST_ID =' . $_GET['id'];
$result = mysqli_query($db, $query) or die(mysqli_error($db));
while ($row = mysqli_fetch_array($result)) {
  $zz = $row['CUST_ID'];
  $i = $row['FIRST_NAME'];
  $a = $row['LAST_NAME'];
  $b = $row['PHONE_NUMBER'];
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

    $c .= "<div class='form-group col-md-6'>
       <label for='" . $value['ATTRIBUTES_ID'] . "' class='label-controller'> {$value['NAME']}</label>
         <input class='form-control' type='" . $value['TYPE_OF_FIELD'] . "' placeholder='Enter Your {$value['NAME']}' name='{$value['ATTRIBUTES_ID']}' value='{$value['custval']}' required>
     </div>";
  }
}
  $id = $_GET['id'];
?>

<center>
  <div class="card shadow mb-4 border-bottom-primary">
    <div class="card-header py-3">

      <div class="absolute-back-button">
        <a href="customer.php?" type="button" class="back-btn-arrow">
          <div></div>
        </a>
      </div>

      <h4 class="m-2 font-weight-bold text-primary">Edit Customer</h4>
    </div>

    <div class="card-body">

      <form role="form" id="uploadadditionalAttributes" method="post" action="cust_edit1.php">
        <input type="hidden" name="id" value="<?php echo $zz; ?>" />

        <div class="form-group col-md-6">
          <label for="FIRST_NAME" class="label-controller"> First Name</label>
          <input class="form-control" placeholder="First Name" name="FIRST_NAME" value="<?php echo $i; ?>" required>
        </div>
        <div class="form-group col-md-6">
          <label for="LAST_NAME" class="label-controller"> Last Name</label>
          <input class="form-control" placeholder="Last Name" name="LAST_NAME" value="<?php echo $a; ?>" required>
        </div>
        <div class="form-group col-md-6">
          <label for="PHONE_NUMBER" class="label-controller"> Phone Number</label>
          <input class="form-control" placeholder="Phone Number" name="PHONE_NUMBER" value="<?php echo $b; ?>" required>
        </div>
        <?php
        echo $c;
        ?>
        <hr>

        <div class="button-container col-md-12 d-flex">

          <div class="col-md-2">
            <button type="submit" class="btn btn-success btn-block Explore-more-btn"><i class="fa fa-edit fa-fw"></i>update</button>
          </div>
          <div class="col-md-2">
            <button type="reset" class="btn btn-danger btn-block Explore-more-btn-reverse"><i class="fa fa-times fa-fw"></i>Reset</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <?php
  include '../includes/footer.php';
  ?>