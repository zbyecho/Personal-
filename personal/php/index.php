<?php
	var_dump($_POST);
    $name=$_POST['uname'];
	$email=$_POST['email'];
	$tex=$_POST['comments'];
	define('HOST','localhost');
	define('USERNAME','root');
	define('POOSWORD','');
	define('SHUKU','geren');
	$con=@new mysqli(HOST,USERNAME,POOSWORD,SHUKU,3306);
	$con->set_charset('utf8');
	if($con->connect_error){
		echo  "数据连接不成功";
		exit();
	}else{
		echo "gonggong";
	}
	$sql="select * from text";
	$cul=$con->query($sql);
	$reg=$cul->fetch_all(MYSQLI_ASSOC);
//	var_dump($reg);
$add="insert into text(username,email,tex)values('$name','$email','$tex')";
$cha=$con->query($add);
if($cha=="true"){
	session_start();
	$_SESSION['name']="提交成功！";
	include 'seeiop.php';

}else{
	session_start();
	$_SESSION['name']="提交失败！";
	include "seeiop.php";
}
header('location:../time.html');

//var_dump($cha);