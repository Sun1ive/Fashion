<?php 

$recepient = "sunliveua@gmail.com";
$sitename = "Fashion";


$email = trim($_POST["email"]);
$message = "Добавить новую почту в подписку: $email";
$title = "Новая заявка на рассылку с сайта \"$sitename\" ";


mail($recepient, $title, $message);