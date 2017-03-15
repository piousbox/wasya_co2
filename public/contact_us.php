<?php

$curl = curl_init("https://hooks.slack.com/services/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");
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$name  = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$descr = $_POST['descr'];

$data = "payload=" . json_encode(array(
    "text" => "@piousbox Contact from wasya.co form. Name: " . $name . " phone: " . $phone . " email: " . $email . " descr: " . $descr
));
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
$output = curl_exec($curl);
curl_close($curl);

echo $output;

