
<?php

$messageadmin = '';


// if (isset($_POST["submit"])) {
    $path = 'upload/' . $_FILES["file"]["name"];
    move_uploaded_file($_FILES["file"]["tmp_name"], $path);
    $messageadmin = '
		<h3 align="center" style="font-size: 30px;text-align: center;">Applicant Details</h3>
		<table border="1" width="100%" cellpadding="5" cellspacing="5">
			<tr>
				<td style="font-size: 20px;" width="30%">Name</td>
				<td style="font-size: 20px;" width="70%">' . $_POST["fullname"] . '</td>
			</tr>
			<tr>
				<td style="font-size: 20px;" width="30%">Address</td>
				<td style="font-size: 20px;" width="70%">' . $_POST["address"] . '</td>
			</tr>
			<tr>
				<td style="font-size: 20px;" width="30%">Email Address</td>
				<td style="font-size: 20px;" width="70%">' . $_POST["email"] . '</td>
			</tr>

			<tr>
				<td style="font-size: 20px;" width="30%"> zip code</td>
				<td style="font-size: 20px;" width="70%">' . $_POST["zip"] . '</td>
			</tr>
			<tr>
				<td style="font-size: 20px;" width="30%">Phone Number</td>
				<td style="font-size: 20px;" width="70%">' . $_POST["tel"] . '</td>
			</tr>
			<tr>
				<td style="font-size: 20px;" width="30%">Additional Information</td>
				<td style="font-size: 20px;" width="70%">' . $_POST["city"] . '</td>
			</tr>
		</table>
	';

require_once('class/class/class.phpmailer.php');
require 'class/class/class.smtp.php';

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch
$mail->IsSMTP();  // telling the class to use SendMail transport


try{
    // ADD YOUR DETAILS HERE
    $name=$_POST['fullname'];
    $emailAddress=$_POST['email'];

    $adminemailAddress='info@cloudalp.com';
    $mail->Host = 'smtp.gmail.com';        //Sets the SMTP hosts of your Email hosting, this for Godaddy
    $mail->Port = '465';                                //Sets the default SMTP server port
    $mail->Mailer = "smtp";
    // $mail->SMTPDebug  = 1;
    $mail->SMTPAuth   = TRUE;                            //Sets SMTP authentication. Utilizes the Username and Password variables
    $mail->Username = $adminemailAddress;                    //Sets SMTP username
    $mail->Password = 'Cloudalp@123';                    //Sets SMTP password
    $mail->SMTPSecure = 'ssl';  
    $text= file_get_contents('html/emailTemplate/emailCareerPage.html');
    $htmlFileUserName = array('UserName','Year');
    $curretYear = date("Y");
    $changes=array($name,$curretYear);

    // Test if string contains the word 
    // if(strpos($text, $htmlFileUserName) !== false){
    $emailtemplate = str_replace($htmlFileUserName,$changes,$text);
        // to add some details and message for user
        $usermessage2 = 'Dear '.$name.',
                              <br/>
                              <br/>
                           Thank you for your interest with CloudAlp, We have exiting opportunities for you.
                           <br>
                          Someone from HR Team will get back to you.
                          <br/>
                          <br/>
                          Bests,
                          <br/>
                          <br/>
                          CloudAlp HR Team.';
        // $usermail = $_POST['user-email'];

        $mail->SetFrom($adminemailAddress, 'Clodalp Career');

        $mail->AddReplyTo($adminemailAddress, 'Clodalp Career');

        $mail->AddAddress($adminemailAddress);        //Adds a "To" address
         
        $mail->WordWrap = 50;                            //Sets word wrapping on the body of the message to a given number of characters
        $mail->IsHTML(true);                            //Sets message type to HTML
        $mail->AddAttachment($path); 
        $mail->Subject = 'Application For Job';                //Sets the Subject of the message
        $mail->Body = $messageadmin;                            //An HTML or plain text message body
        // ini_set('get_magic_quotes_runtime', 0);
     
        $mail->Send();
        // Remove previous recipients
        $mail->ClearAllRecipients();
        // alternative in this case (only addresses, no cc, bcc): 
        // $mail->ClearAddresses();
    
        $mail->Body = $emailtemplate;
        //$adminemail = $generalsettings[0]["admin_email"]; 
    
        $mail->AddAddress($_POST['email']);
         if ($mail->Send())                                //Send an Email. Return true on success or false on error
         {
             $message = '<div class="alert alert-success">Application Successfully Submitted</div>';
             echo '<i style="color:var(--color211);" class="fa fa-check-circle"></i> Thank You for submitting your request, <br/> some one will get back to you soon.';
         } else {
           $message = '<div class="alert alert-danger">There is an Error</div>';
           echo 'your message Sending Failed';
         }
         




} catch (phpmailerException $e) {
    echo $e->errorMessage(); //Pretty error messages from PHPMailer
  } catch (Exception $e) {
    echo $e->getMessage(); //Boring error messages from anything else!
  }


?>