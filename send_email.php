<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['firstname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    
    // Set the recipient email address
    $to = 'ricard.durall.lopez@gmail.com';

    // Set the email subject
    $email_subject = 'New Contact Form Submission';

    // Construct the email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n$subject";

    // Set the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>
