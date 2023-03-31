<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to codesign corp ERP</title>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css?v=<?php echo time(); ?>">
    <script src="assets/Javascript/jquery.js?v=<?php echo time(); ?>"></script>
    <script src="assets/Javascript/bootstrap.min.js?v=<?php echo time(); ?>"></script>
    <script src="assets/Javascript/underscore.min.js?v=<?php echo time(); ?>"></script>
    <script src="assets/Javascript/handlebar.min.js?v=<?php echo time(); ?>"></script>
    <link rel="stylesheet" href="./Main/css/main.css?v=<?php echo time(); ?>">
    
</head>
<body class="hero-anime">	

	<div class="navigation-wrap bg-light start-header start-style">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav class="navbar navbar-expand-md navbar-light">
					
						<a class="navbar-brand" href="https://front.codes/" target="_blank"><img src="https://assets.codepen.io/1462889/fcy.png" alt=""></a>	
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						
						<!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
							
							
						</div> -->
                        <ul class="navbar-nav ml-auto py-4 py-md-0">
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                <a class="nav-link " href="#" >Home</a>
                
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="./ItemsNew.php" role="button" aria-haspopup="true" aria-expanded="false">Items</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="./ItemsNew.php">New Items</a>
                    <a class="dropdown-item" href="#">List</a>
                </div>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link" href="#">Agency</a>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link" href="#">Journal</a>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
						
					</nav>		
				</div>
			</div>
		</div>
	</div>



     <!-- Site is Logic less Handlebars -->

    <script id="HeaderTemplate" type="text/x-handlebars-template">
        <ul class="navbar-nav ml-auto py-4 py-md-0">
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                <a class="nav-link " href="#" >Home</a>
                
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Items</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">New Items</a>
                    <a class="dropdown-item" href="#">List</a>
                </div>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link" href="#">Agency</a>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <a class="dropdown-item" href="#">Another action</a>
                </div>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link" href="#">Journal</a>
            </li>
            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </script>


    <script src="Header/Javascript/header.js"></script>