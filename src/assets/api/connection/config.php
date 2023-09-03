<?php

$HOST='localhost';
$USER='root';
$PASSWORD='';
$DB='thriftstnpclone';

$con=mysqli_con($HOST,$USER,$PASSWORD,$DB);

if(!$con){
    die("COnnection failed");
}

?>