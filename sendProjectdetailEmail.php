<?php

$name = trim($_POST['name']);
$email = $_POST['email'];
$projectservice = $_POST['projectservice'];
$site_owners_email = 'example@email.com'; // Replace this with your own email address
$subject = "Project Inquiry";
$projectbudget = $_POST['projectbudget'];


$msg = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Minicon</h2>\r\n";
$msg .= "<p><strong>From:</strong> " . $name . "</p>\r\n";
$msg .= "<p><strong>Email:</strong> " . $email . "</p>\r\n";
if (isset($phone)) {
    $msg .= "<p><strong>Project Service:</strong> " . $projectservice . "</p>\r\n";
}
$msg .= "<p><strong>Project Budget:</strong> <br /> " . $projectbudget . " </p>";
$msg .= "</body></html>";

$headers = "From: " . $name . " <" . $email . "> \r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

if ($name == "") {
    $error['name'] = "Please enter your name";
}

if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
    $error['email'] = "Please enter a valid email address";
}

if ($projectservice == "") {
    $error['projectservice'] = "Please select a Project Service.";
}
if ($projectbudget == "") {
    $error['projectbudget'] = "Please select a Project Budget.";
}

if (!isset($error) || !$error) {
    $mail = mail($site_owners_email, $subject, $msg, $headers);
    
    echo "<div class='success'>" . $name . ". We've received your email. We'll be in touch with you as soon as possible! </div>";
} # end if no error
else {

    foreach ($error as $er) {
        echo '<div>' . $er . '</div>';
    }
} # end if there was an error sending
?>