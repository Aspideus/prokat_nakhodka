<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$budget = $_POST['price_get'];
$date = $_POST['user_date'];
$radio = $_POST['user_radio'];
$car = $_POST['car_name'];

if(!empty($budget) || !empty($date) || !empty($radio)){
    $big_form = true;
}
else {
    $big_form = false;
}

$f_stat = fopen("stats.txt", 'a') or die("не удалось создать файл");
date_default_timezone_set('Asia/Vladivostok');
$str = date("Y-m-d H:i:s"); 
fwrite($f_stat, $str);
$str =  "\nЧеловек " .$name. ' оставил заявку, его телефон: '.$phone. ', Цель: ' .$radio. ', на вопрос "Примерный бюджет" написал: ' .$budget. ', а на вопрос "Когда нужна машина" написал:  ' .$date. '' .$car.  PHP_EOL;
//$str += $name;
fwrite($f_stat, $str);
fclose($f_stat);
//$mail->SMTPDebug = 2;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP

//$mail->Host = 'smtp.mail.ru';                         // Specify main and backup SMTP servers
$mail->Host = 'smtp.yandex.ru'; 

$mail->SMTPAuth = true;                               // Enable SMTP authentication

$mail->Username = ' '; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ' '; // Ваш пароль от почты с которой будут отправляться письма

$mail->SMTPSecure = 'ssl';// Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

//$mail->SMTPSecure = 'tls';// Enable TLS encryption, `ssl` also accepted
//$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров

//$mail->setFrom(' '); // от кого будет уходить письмо
$mail->setFrom(' '); // от кого будет уходить письмо

$mail->addAddress(' ');     // Кому будет уходить письмо moscow-cargo@outlook.com
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта Автопрокат Находка';
if($big_form) {
    $mail->Body = 'Человек оставил заявку, его телефон: '.$phone. ', Цель: ' .$radio. ', на вопрос "Примерный бюджет" написал: ' .$budget. ' а на вопрос "Когда нужна машина" написал:  ' .$date. '';
}
else {
    $mail-> Body = ''.$name.' оставил заявку, его телефон ' .$phone. '';
}
$mail->AltBody = '';


if(!$mail->send()) {
    echo 'Error';
    $f_stat = fopen("stats.txt", 'a') or die("не удалось создать файл");
    fwrite($f_stat, "Ошибка при попытке отправить сообщение выше на почту\n\n");
//    fwrite($f_stat, $mail->ErrorInfo);
    fclose($f_stat);
} else {
    //!
	//header('location: index.html');
	echo 'Super';
	$f_stat = fopen("stats.txt", 'a') or die("не удалось создать файл");
    fwrite($f_stat, "Сообщение выше успешно доставлено на почту\n\n");
    fclose($f_stat);

}
?>
