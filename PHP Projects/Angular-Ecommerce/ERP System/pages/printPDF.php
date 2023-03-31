
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" integrity="sha512-SbiR/eusphKoMVVXysTKG/7VseWii+Y3FdHrt0EpKgpToZeemhqHeZeLWLhJutz/2ut2Vw1uQEj2MbRF+TVBUA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css?v=<?php echo time();?>" rel="stylesheet">
    <!-- <link href="../vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet"> -->
    <style>
        body{margin-top:20px;
/* background:#eee; */
}

/*Invoice*/
.invoice .top-left {
    font-size:65px;
	color:#3ba0ff;
}

.invoice .top-right {
	text-align:right;
	padding-right:20px;
}

.invoice .table-row {
	margin-left:-15px;
	margin-right:-15px;
	margin-top:25px;
}

.invoice .payment-info {
	font-weight:500;
}

.invoice .table-row .table>thead {
	border-top:1px solid #ddd;
}

.invoice .table-row .table>thead>tr>th {
	border-bottom:none;
}

.invoice .table>tbody>tr>td {
	padding:8px 20px;
}

.invoice .invoice-total {
	margin-right:-10px;
	font-size:16px;
}

.invoice .last-row {
	border-bottom:1px solid #ddd;
}

.invoice-ribbon {
	width:85px;
	height:88px;
	overflow:hidden;
	position:absolute;
	top:-1px;
	right:14px;
}

.ribbon-inner {
	text-align:center;
	-webkit-transform:rotate(45deg);
	-moz-transform:rotate(45deg);
	-ms-transform:rotate(45deg);
	-o-transform:rotate(45deg);
	position:relative;
	padding:7px 0;
	left:-5px;
	top:11px;
	width:120px;
	background-color:#66c591;
	font-size:15px;
	color:#fff;
}

.ribbon-inner:before,.ribbon-inner:after {
	content:"";
	position:absolute;
}

.ribbon-inner:before {
	left:0;
}

.ribbon-inner:after {
	right:0;
}
.total-ammount{

    font-size: 20px;
    font-weight: 600;
}
.custom-value{
    display: inline-block;
    width: 100%;
}
.table > :not(caption) > * > *{
    /* background-color: none !important; */
    border-bottom-width: 0px !important;
}
.table-striped > tbody > tr:nth-of-type(2n+1) > *{
    --bs-table-accent-bg: none !important;
}

@media(max-width:575px) {
	.invoice .top-left,.invoice .top-right,.invoice .payment-details {
		text-align:center;
	}

	.invoice .from,.invoice .to,.invoice .payment-details {
		float:none;
		width:100%;
		text-align:center;
		margin-bottom:25px;
	}

	.invoice p.lead,.invoice .from p.lead,.invoice .to p.lead,.invoice .payment-details p.lead {
		font-size:22px;
	}

	.invoice .btn {
		margin-top:10px;
	}
}

@media print {
	.invoice {
		width:900px;
		height:800px;
      
        /* size: A4 portrait; */
	}
}
/* @page {
    size: 7in 9.25in;
    margin: 27mm 16mm 27mm 16mm;
} */
    </style>
</head>
<body>
<div class="container bootstrap snippets bootdeys">
<div class="row">
  <div class="col-sm-12">
	  	<div class="panel panel-default invoice" id="invoice">
		  <div class="panel-body">
			<div class="invoice-ribbon"><div class="ribbon-inner">PAID</div></div>
		    <div class="row">

				<div class="col-sm-6 top-left">
					<i class="fa fa-rocket"></i>
				</div>

				<div class="col-sm-6 top-right">
						<h3 class="marginright">INVOICE-1234578</h3>
						<span class="marginright">14 April 2014</span>
			    </div>

			</div>
			<hr>
			<div class="row">

				<div class="col-md-4 from">
					<p class="lead marginbottom">From : Dynofy</p>
					<p>350 Rhode Island Street</p>
					<p>Suite 240, San Francisco</p>
					<p>California, 94103</p>
					<p>Phone: 415-767-3600</p>
					<p>Email: contact@dynofy.com</p>
				</div>

				<div class="col-md-4 to">
					<p class="lead marginbottom">To : John Doe</p>
					<p>425 Market Street</p>
					<p>Suite 2200, San Francisco</p>
					<p>California, 94105</p>
					<p>Phone: 415-676-3600</p>
					<p>Email: john@doe.com</p>

			    </div>

			    <div class="col-md-4 text-end payment-details">
					<p class="lead marginbottom payment-info">Payment details</p>
					<p>Date: 14 April 2014</p>
					<p>VAT: DK888-777 </p>
					<p>Total Amount: $1019</p>
					<p>Account Name: Flatter</p>
			    </div>

			</div>

			<div class="row table-row">
				<table class="table table-striped">
			      <thead>
			        <tr>
			          <th class="text-center" style="width:5%">#</th>
			          <th style="width:50%;padding-left: 1.2rem;">Item</th>
			          <th class="text-end" style="width:15%">Quantity</th>
			          <th class="text-end" style="width:15%">Unit Price</th>
			          <th class="text-end" style="width:15%">Total Price</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td class="text-center">1</td>
			          <td>Flatter Theme</td>
			          <td class="text-end">10</td>
			          <td class="text-end">$18</td>
			          <td class="text-end">$180</td>
			        </tr>
			        <tr>
			          <td class="text-center">2</td>
			          <td>Flat Icons</td>
			          <td class="text-end">6</td>
			          <td class="text-end">$59</td>
			          <td class="text-end">$254</td>
			        </tr>
			        <tr>
			          <td class="text-center">3</td>
			          <td>Wordpress version</td>
			          <td class="text-end">4</td>
			          <td class="text-end">$95</td>
			          <td class="text-end">$285</td>
			        </tr>
			         <tr class="last-row">
			          <td class="text-center">4</td>
			          <td>Server Deployment</td>
			          <td class="text-end">1</td>
			          <td class="text-end">$300</td>
			          <td class="text-end">$300</td>
			        </tr>
			       </tbody>
			    </table>

			</div>

			<div class="row">
			<!-- <div class="col-md-6 margintop">
				<p class="lead marginbottom">THANK YOU!</p>

				<button class="btn btn-success" id="invoice-print"><i class="fa fa-print"></i> Print Invoice</button>
				<button class="btn btn-danger"><i class="fa fa-envelope-o"></i> Mail Invoice</button>
			</div> -->
			<div class="col-md-12 text-end pull-right invoice-total">
					<p class="custom-value">
                        <span class="float-start">
                            Subtotal 
                        </span> 
                        <span class="subtotal-value float-end">
                            $1019
                        </span> 
                    </p>
            </div>
            <div class="col-md-12 text-end pull-right invoice-total">

                <p class="custom-value"> 
                    <span class="float-start">
                        Discount (10%) 
                    </span> 
                    <span class="discount-value float-end">
                        $101
                    </span>    
                </p>
            </div>
            <div class="col-md-12 text-end pull-right invoice-total" style="border-bottom: 1px solid #ddd;">
            
                <p class="custom-value"> 
                    <span class="float-start">
                        VAT (8%) 
                    </span> 
                    <span class="tax-value float-end">
                        $73
                    </span>    
                </p>
            </div>
            <div class="col-md-12 text-end pull-right invoice-total" style="margin-top: 15px;">
                    <p class="custom-value"> 
                        <span class="float-start total-ammount">
                            Total Amount
                        </span> 
                        <span class="discount-value float-end total-ammount">
                            $991
                        </span>    
                    </p>
			</div>
			</div>

            <div style="margin-bottom: 100px;">

            </div>

		  </div>
		</div>
	</div>
</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha512-1/RvZTcCDEUjY/CypiMz+iqqtaoQfAITmNSJY17Myp4Ms5mdxPS5UV7iOfdZoxcGhzFbOm6sntTKJppjvuhg4g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    setTimeout(()=>{

        window.print();
    },3000);
</script>
</body>
</html>