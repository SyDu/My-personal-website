<?php
$name=$_POST["name"];
$subject=$_POST["subject"];
$mailfrom=$_POST["email"];
$msg=$_POST["Message"];

$info=$name . "  " . $mailfrom;
$to="siyidu95124@gmail.com";
$toOUT="syDu2020@outlook.com";
$replay=$name . " thx to contact me";
mail($to, $subject , $msg,$info);
mail($toOUT, $subject , $msg,$info);
mail($mailfrom, "Your msg sent to Du successfully" ,$replay ,null);

header("Location: index.html");
?>
