<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@tediceexpress.co.ke, seth.oduor@tediceexpress.co.ke";
    $subject = "New Container Quote Request - Tedice Express";

    $fields = [
        "Container Type" => $_POST['containerType'],
        "Quantity" => $_POST['quantity'],
        "Delivery Required" => $_POST['deliveryRequired'],
        "Transport Type" => $_POST['transportType'],
        "Delivery Address" => $_POST['deliveryAddress'],
        "Name" => $_POST['name'],
        "Email" => $_POST['email'],
        "Contact Number" => $_POST['contactNumber'],
        "Company" => $_POST['company'],
        "Additional Info" => $_POST['additionalInfo']
    ];

    $body = "You have received a new container quote request:\n\n";
    foreach ($fields as $key => $value) {
        $body .= "$key: " . htmlspecialchars($value) . "\n";
    }

    $headers = "From: " . $_POST['email'] . "\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your request has been sent.";
    } else {
        echo "Error sending your request. Please try again.";
    }
}
?>
