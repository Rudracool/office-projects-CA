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
    <div class="card-header d-flex">
        <div class="element-change col-md-6">

            <h4 class="m-2 font-weight-bold text-primary">File Manager Record&nbsp;</h4>
        </div>
        <div class="element-change custom-url-content col-md-6">
            <form class="form-inline" id="uploadFileContent" enctype="multipart/form-data">
                <input type="file" name="file_upload" id="file_upload" accept=".png,.jpg,.webp,.JPEG"/>
                <div class="button-container">
                    <button type="submit" name="submit" class="btn btn-primary Explore-more-btn">Upload</button>
                </div>
            </form>
        </div>
  </div>
  
  <div class="card-body">
    
    <div class="error-msg" id="err_msg"></div>
    <div class="table-responsive">
      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">        
        <thead>
          <tr>
            <th>#</th>
            <th>Internal Id</th>
            <th>Image</th>
            <th>Image Name</th>
            <th>Image Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <?php                  
            $query = 'SELECT * FROM file_manger';
            $result = mysqli_query($db, $query) or die (mysqli_error($db));
            while ($row = mysqli_fetch_assoc($result)) {
              echo '<tr>';
              echo '<td>'. $row['ID'].'</td>';
              echo '<td>'. $row['INTERNAL_ID'].'</td>';
              echo '<td> <img class="media-file-types" width="180"  src="'. $row['IMAGE_DIR'].'"></td>';
              echo '<td>'. $row['IMAGE_NAME'].'</td>';
              echo '<td>'. $row['IMAGE_TYPE'].'</td>';
              echo '<td align="right"> 
                      <div class="btn-group">
                        <a type="button" class="edit-btn custom-btn" style="border-radius: 0px;" id ="deleteFilesData" data-id="'.$row['INTERNAL_ID']. '" href="deleteuploadfile.php?action=delete&fileid='.$row['ID'].'&filename='.$row['IMAGE_NAME'].'">
                          <i class="fas fa-fw fa-trash"></i>
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

<script src="../js/uploadfile.js"></script>
          
<?php
  include '../includes/footer.php';
?>