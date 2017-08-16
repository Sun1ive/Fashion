<?php 

$recepient = "sunliveua@gmail.com";
$sitename = "Fashion";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \n Телефон: $phone \n Email: $email ";
$title = "Новая заявка с сайта \"$sitename\" ";


mail($recepient, $title, $message);