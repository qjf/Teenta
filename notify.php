<?php

if (count($_POST) > 0) {

  $requestedFile = explode("/", $_SERVER['PHP_SELF']);
  $reqFile = '/' . end($requestedFile);


  $base = substr($_SERVER['PHP_SELF'], 0, -strlen($reqFile));
    //$fullbase = 'http://www.qijingfan.com/QijingFanPortfolioSite' . $_SERVER['HTTP_HOST'] . $base;
  $fullbase = $_SERVER['HTTP_HOST'] . $base;

  $user_pos = $_POST['user_pos'];
  $cur_pos = $_POST['cur_pos'];

  $link = "<a href='$fullbase/single.php?title=$_POST[title]&lat=$_POST[lat]&lng=$_POST[lng]'>Click here</a>";

  if ($user_pos == "outside"){
    if ($cur_pos == ""){
      $message = "Hi, <br /><br />Kathy: " . $_POST['title'] . " is out of school's geofence (" . $_POST['address'] . "). 
      <br /><br />$link for current location on map.
      <br /><br />By TeenTa";
    }else{
      $message = "Hi, <br /><br />Kathy: " . $_POST['title'] . " is at (" . $_POST['address'] . "). 
      <br /><br />$link for current location on map.
      <br /><br />By TeenTa";
    }
  }else{
    if ($cur_pos == ""){
      $message = "Hi, <br /><br />Kathy: " . $_POST['title'] . " has entered school's geofence (" . $_POST['address'] . "). 
      <br /><br />$link for current location on map.
      <br /><br />By TeenTa";
    }else{
      $message = "Hi, <br /><br />Kathy: " . $_POST['title'] . " is at (" . $_POST['address'] . "). 
      <br /><br />$link for current location on map.
      <br /><br />By TeenTa";
    }
  }


  $subject = "Geo-fence Notification From TeenTa";

  $to = "qijing_fan@yahoo.com";
  

  $headers = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    // Additional headers
  $headers .= 'From: Teenta <qijingfan@gmail.com>' . "\r\n";

  if (@mail($to, $subject, $message, $headers))
    echo 'ok';
}
?>