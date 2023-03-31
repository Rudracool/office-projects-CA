<?php
include '../includes/connection.php';
include '../includes/sidebar.php';

?>
<center>
  <div class="card shadow mb-4 border-bottom-primary">
    <div class="card-header custom-field-changes py-3">

      <div class="absolute-back-button">
        <a href="customer.php" type="button" class="back-btn-arrow">
          <div></div>
        </a>
      </div>

      <h4 class="m-2 font-weight-bold text-primary">Add Custom Fields attributes</h4>
    </div>
    <!-- <a href="customer.php" type="button" class="btn btn-primary bg-gradient-primary">Back</a> -->
    <div class="card-body">
      <div class="table-responsive">
        <form role="form" id="uploadadditionalAttributes" action="create_additional_attributes.php?action=add" method="post">
          <div class="form-group col-md-6">
          <label for="NAME" class="label-controller"> Name of the attributes</label>
            <input class="form-control" placeholder="Name of the attributes" name="NAME" required>
          </div>
          <div class="form-group col-md-6">
          <label for="ATTRIBUTES_ID" class="label-controller"> Attributes internalId</label>
            <input class="form-control" placeholder="Attributes internalId" name="ATTRIBUTES_ID" required>
          </div>
          <div class="form-group col-md-6">
            <label for="APPLIESTO" class="label-controller"> Applied To Which Record</label>

            <select name="APPLIESTO" class="selectpicker custom-select-optoions" id="APPLIESTO">
              <?php

                $attributes_query = 'SHOW TABLES';
                $result_query = mysqli_query($db, $attributes_query) or die(mysqli_error($db));
                if ($result_query) {
                  while ($row_query = mysqli_fetch_assoc($result_query)) {
                    $value = current((array)$row_query);
                    ?>
                      <option value="<?php echo $value; ?>"><?php echo $value; ?></option>
                    <?php
                  }
                }
              ?>
            </select>
          </div>

          <div class="form-group col-md-6">
            <label for="TYPE_OF_FIELD" class="label-controller"> Which Type of field</label>

            <select name="TYPE_OF_FIELD" class="selectpicker custom-select-optoions" id="TYPE_OF_FIELD">
              <?php
                $getinputTypes = array(
                  'button', 'checkbox', 'color', 'date',
                  'datetime-local', 'email', 'file', 'hidden',
                  'image', 'month', 'number', 'password',
                  'radio', 'range', 'reset', 'search',
                  'submit', 'tel', 'text', 'url'
                );
                foreach ($getinputTypes as $value) {
                  ?>
                    <option value="<?php echo $value; ?>"><?php echo $value; ?></option>
                  <?php
                }
              ?>
            </select>
          </div>
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
<!-- ATTRIBUTES_ID 	NAME 	APPLIESTO 	APPLIED_TABLE_ID 	TYPE_OF_FIELD -->


<!-- <script id="fetchfieldandaddcustominputfield" type="text/x-handlebars-template">
            <select name="APPLIESTO" class="selectpicker custom-select-optoions" id="APPLIESTO">
              {{#each loopingData}}
                <option value="{{this}}">{{this}}</option>
              {{/each}}
            </select>
          </script> -->
<!-- <script src="../js/dynamicAppendData.js"></script> -->
<?php
include "../includes/footer.php";
?>