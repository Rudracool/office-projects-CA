<?php 

$webhookContent = "";

$webhook = fopen('php://input' , 'r');
while (!feof($webhook)) {
    $webhookContent .= fread($webhook, 4096);
}
fclose($webhook);
$dataWebhooks = json_decode($webhookContent, true);
//  $fp = file_put_contents( 'read.log', $webhookContent );



// Print data if need to debug

$service_url = "https://tstdrv1229883.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=3066&deploy=1&compid=TSTDRV1229883&h=53f78b1cc666814562a3";

   // Initialize the cURL
   $ch = curl_init($service_url);

   // Set service authentication

   $body = json_encode($dataWebhooks);

   $headers = array();
   $headers[] = 'Accept: application/json';
   $headers[] = 'Content-Type: application/json; charset=UTF-8';

   // Set the cURL options
   curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
   curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
   curl_setopt($ch, CURLOPT_POST, TRUE);
   curl_setopt($ch, CURLOPT_VERBOSE, 1);
   curl_setopt($ch, CURLOPT_HEADER, TRUE);
   curl_setopt($ch, CURLINFO_HEADER_OUT, true);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

   curl_setopt($ch, CURLOPT_TIMEOUT, 15);

   // Execute the cURL
   $data = curl_exec($ch);

   // Print the result
  print_r($data)





?>