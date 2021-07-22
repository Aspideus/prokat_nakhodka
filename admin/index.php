<?php

session_start();

/*if($_SESSION['admin']) {
    header('Location: admin.php');
    exit;
}*/

$admin = 'admin';
$pass = 'a029d0df84eb5549c641e04a9ef389e5';

if($_POST['submit']){
	if($admin == $_POST['user'] AND $pass == md5($_POST['pass'])){
		$_SESSION['admin'] = $admin;
		header("Location: admin.php");
		exit;
	}else echo '<p>Логин или пароль неверны!</p>';
}

echo "Авторизация";

?>

<form method="POST">
    <input type="text" name="user" placeholder="Логин"/><br />
    <input type="password" name="pass" placeholder="Пароль"/><br />
    <input type="submit" name="submit" value="Войти"/>
</form>