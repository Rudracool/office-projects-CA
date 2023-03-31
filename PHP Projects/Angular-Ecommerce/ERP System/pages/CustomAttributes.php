<?php
  include '../includes/connection.php';
  include '../includes/sidebar.php';
?>
<?php 

  $query = 'SELECT ID, t.TYPE
            FROM users u
            JOIN type t ON t.TYPE_ID=u.TYPE_ID WHERE ID = '.$_SESSION['MEMBER_ID'].'';
  $result = mysqli_query($db, $query) or die (mysqli_error($db));
      
  while ($row = mysqli_fetch_assoc($result)) {
    $Aa = $row['TYPE'];
    if ($Aa=='User'){
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



<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h4 class="m-2 font-weight-bold text-primary">Add attributes Record&nbsp;<a  href="CreateAdditionalAttributes.php" type="button" class="btn btn-primary Explore-more-btn" style="border-radius: 0px;"><i class="fas fa-fw fa-plus"></i></a></h4>
  </div>
  
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">        
        <thead>
          <tr>
            <th>Name Of the Attributes</th>
            <th>Applies to</th>
            <th>Type of the attributes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <?php                  
            $query = 'SELECT * FROM additional_attributes';
            $result = mysqli_query($db, $query) or die (mysqli_error($db));
            while ($row = mysqli_fetch_assoc($result)) {
              echo '<tr>';
              echo '<td>'. $row['NAME'].'</td>';
              echo '<td>'. $row['APPLIESTO'].'</td>';
              echo '<td>'. $row['TYPE_OF_FIELD'].'</td>';
              echo '<td align="right"> 
                      <div class="btn-group">
                        <a type="button" class="details-btn custom-btn" href="cust_searchfrm.php?action=edit & id='.$row['ATTRIBUTES_ID'] . '">
                          <i class="fas fa-fw fa-list-alt"></i>
                        </a>
                        <a type="button" class="edit-btn custom-btn" style="border-radius: 0px;" href="cust_edit.php?action=edit & id='.$row['ATTRIBUTES_ID']. '">
                          <i class="fas fa-fw fa-edit"></i>
                        </a>
                      </div> 
                    </td>';
              echo '</tr> ';
            }
          ?>
        </tbody>
      </table>
    </div>
  </div>
</div>
          
<?php
  include '../includes/footer.php';
?>