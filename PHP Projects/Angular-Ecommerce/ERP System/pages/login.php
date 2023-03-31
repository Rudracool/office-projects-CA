<?php require('session.php');?>
<?php if(logged_in()){ ?>
          <script type="text/javascript">
            window.location = "index.php";
          </script>
    <?php
    } ?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Sales And Inventory System</title>

  <!-- Custom fonts for this template-->
  <link href="../vendor/fontawesome-free/css/all.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="../css/sb-admin-2.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/login-form.css?v=<?php echo time();?>">

</head>

<body style="background-color: pink">


<div class="box-form row">
	<div class="left col-md-7">
		<div class="overlay">
		<h1>Welcome To Codesign Corp.</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Curabitur et est sed felis aliquet sollicitudin</p>
		<span>
			<p>login with social media</p>
			<a href="#"><i class="fab fa-facebook-f"></i></a>
			<a href="#"><i class="fab fa-twitter"></i> Login with Twitter</a>
		</span>
		</div>
	</div>
	
	
		<div class="right col-md-5">
		<h5>Login with ERP</h5>
		<!-- <p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p> -->
    <form class="user" role="form" action="processlogin.php" method="post">
		<div class="inputs">
    <div class="form-group">
      <input  placeholder="Username" name="user" type="text" autofocus>
    </div>
                    <div class="form-group">
                        <input placeholder="Password" name="password" type="password" value="">
                    </div>
			
			
		</div>
			
			<br><br>
			
		<div class="remember-me--forget-password">
				<!-- Angular -->
	<label>
    <i class="Data-checkbox fas"></i>
		<input type="checkbox" name="item" checked/>
		<span class="text-checkbox">Remember me</span>
	</label>
			<p>forget password?</p>
		</div>
			
			<br>
			<button type="submit" name="btnlogin">Login</button>
    </form>
	</div>
	
</div>
<!-- partial -->
<!-- 
  <div class="container">

    Outer Row
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            Nested Row within Card Body
            <div class="row shadow">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome to Codesign corp presents Sales and Inventory!</h1>
                  </div>
                  <form class="user" role="form" action="processlogin.php" method="post">
                    <div class="form-group">
                        <input class="form-control form-control-user" placeholder="Username" name="user" type="text" autofocus>
                    </div>
                    <div class="form-group">
                        <input class="form-control form-control-user" placeholder="Password" name="password" type="password" value="">
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <button class="btn btn-primary btn-user btn-block" type="submit" name="btnlogin">Login</button>
                    <hr>
                  <div class="text-center">
                    <a class="small" href="register.php">Create an Account!</a>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div> -->

  <!-- Bootstrap core JavaScript-->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="../js/sb-admin-2.min.js"></script>
    <script src="../vendor/SweetAlert/sweetalert.js"></script>




  <?php 
  // $inactive = 3; 
  // ini_set('session.gc_maxlifetime', $inactive); // set the session max lifetime to 2 hours
  
  // if (isset($_SESSION['message']) && (time() - $_SESSION['message'] > $inactive)) {
  //     // last request was more than 2 hours ago
  //     session_unset($_SESSION['message']);     // unset $_SESSION variable for this page
  //     // destroy session data
  // }
  // $_SESSION['message'] = time(); // Update session

    if(isset($_SESSION['message']) && $_SESSION['message'] != ''){
      ?>
      <script>

        swal({
          title: "<?php echo $_SESSION['message'];?>",
          icon: "<?php echo $_SESSION['status'];?>",
          button:"ok!"
        });
      </script>

      <?php
    }
    // 2 hours in seconds

  ?>
      <script>
  setTimeout(()=>{
    <?php unset($_SESSION['message']); unset($_SESSION['status']); ?>

  },6000);
</script>


</body>

</html>









