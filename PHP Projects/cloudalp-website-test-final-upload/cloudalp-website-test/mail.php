<?php 

/**
 * get the all data using post method
 * 
 */
 

 /**
  * chech the condition if the condition true or false 
  */
if( empty( $_POST['token'] ) ){
    echo '<span class="notice">Error! 1</span>';
    exit;
}
if( $_POST['token'] != 'FsWga4&@f6aw' ){
    echo '<span class="notice">Error! 2</span>';
    exit;
}
if(!empty($_POST['tel'])){
    $TelePhoneData=$_POST['tel'];
}
if(!empty($_POST['selectyourService'])){
    $selectYourService=$_POST['selectyourService'];
}

 
/**
 * set the 2 message as per the form selection
 */
$name = $_POST['user-name'];
$emailAddress = $_POST['user-email'];

if(!empty($TelePhoneData) && !empty($selectYourService)){
  
    $adminmessage='
    CloudAlp<br/><br/>'
         .$name. ' has sent you a message via contact form on your website!
     <br/><br/>
        Name:' .$name.'<br />
         Email: '.$emailAddress.'<br/>'.
         'TelePhone: '.$TelePhoneData.'<br/>'.
         'Company Name: '.$_POST['address'].'<br/>'.
         'Select Your service : '.$selectYourService.'<br/>'.
         'Message: <br/><br/>
         '.stripslashes( nl2br( $_POST['user-message'] ) ).'
         <br />
         <br />
    ';
}else{
    $adminmessage='
    CloudAlp<br/><br/>'
         .$name. ' has sent you a message via contact form on your website!
     <br/><br/>
        Name:' .$name.'<br />
         Email: '.$emailAddress.'<br/>
         Message: <br/><br/>
         '.stripslashes( nl2br( $_POST['user-message'] ) ).'
         <br />
         <br />
    ';

}

require_once('class/class/class.phpmailer.php');
require 'class/class/class.smtp.php';

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch
$mail->IsSMTP();  // telling the class to use SendMail transport


try{
    // $HtmlTemplate=file_get_contents('assets/html/emailTemplate/emailGetIntouch.html');
    $adminemailAddress='info@cloudalp.com';
    $mail->Host = 'smtp.gmail.com';        //Sets the SMTP hosts of your Email hosting, this for Godaddy
    $mail->Port = '465';                                //Sets the default SMTP server port
    $mail->Mailer = "smtp";
    $mail->SMTPAuth   = TRUE;                            //Sets SMTP authentication. Utilizes the Username and Password variables
    $mail->Username = $adminemailAddress;                    //Sets SMTP username
    $mail->Password = 'Cloudalp@123';                    //Sets SMTP password
    $mail->SMTPSecure = 'ssl';  
    $usermail = $_POST['user-email'];

    $text= file_get_contents('html/emailTemplate/emailGetInTouch.html');
    $htmlFileUserName = array('UserName','Year');
    $curretYear = date("Y");

    // Test if string contains the word 
    // if(strpos($text, $htmlFileUserName) !== false){
        $changes=array($name,$curretYear);
    $emailtemplate = str_replace($htmlFileUserName,$changes,$text);

    // echo $resultantData;
    // } else{
    // echo "Word Not Found!";
    // }

   
        // to add some details and message for user
        $usermessage2 = 'Dear '.$name.',
                         <br/>
                         <br/>
                         Thank you for contacting CloudAlp Technologies!
                         <br/>
                         Someone from our team will get back to you, please stay with us.
                         <br/>
                         <br/>
                         Regards,
                         CloudAlp Team - Expert NetSuite Consulting.';

        $mail->SetFrom($adminemailAddress, 'CloudAlp Technologies ');

        $mail->AddReplyTo($adminemailAddress, 'CloudAlp Technologies');

        $mail->AddAddress($adminemailAddress);        //Adds a "To" address
         
        $mail->WordWrap = 50;                            //Sets word wrapping on the body of the message to a given number of characters
        $mail->IsHTML(true);                            //Sets message type to HTML
        $mail->Subject = 'Enquiry';                //Sets the Subject of the message
        $mail->Body = $adminmessage;                            //An HTML or plain text message body
        // ini_set('get_magic_quotes_runtime', 0);
     
        $mail->Send();
        // Remove previous recipients
        $mail->ClearAllRecipients();
        // alternative in this case (only addresses, no cc, bcc): 
        // $mail->ClearAddresses();
    
        $mail->Body = $emailtemplate;
        //$adminemail = $generalsettings[0]["admin_email"]; 
    
        // Add the admin address
        $mail->AddAddress($usermail);
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