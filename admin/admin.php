<?php 
session_start();
if(!$_SESSION['admin']){
 header("Location: index.php");
 exit;
}
/*if($_GET['do'] == 'logout'){
	unset($_SESSION['admin']);
	session_destroy();
}*/

echo "admin page";

?>
<a href="admin.php?do=logout">Выход</a>
<?php
unset($_SESSION['admin']);
?>