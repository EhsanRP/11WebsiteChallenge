<?php
$name = $_POST['name']
$email = $_POST['email']
$subject = $_POST['subject']
$message = $_POST['message']

$email_form = 'info@ehsanrp.com'

$email_subject='New Form Submission'

$email_body = "Username: + $name.\n".
              "User Email: + $email.\n".
              "Subject: + $subject.\n".
              "User Message: + $message.\n";

$to = 'ehsan.rp98@gmail.com'

$headers = "From: $email_form \r\n";

$headers .= "Reply-To: $email \r\n"

mail($to,$subject,$email_body,$headers)

header("Location: contact.html");

>