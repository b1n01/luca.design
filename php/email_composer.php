<?php
	date_default_timezone_set('Etc/UTC');
	require 'php_mailer/PHPMailerAutoload.php';
		
	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host = 'smtp.lucalorenzini.org';
	//$mail->Port = 465;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPAuth = true;
	$mail->Username = 'info@lucalorenzini.org';
	$mail->Password = 'YouAreMyCupOfTea';
	$mail->setFrom('info@lucalorenzini.org');
	//$mail->addReplyTo('noreply@ssa.com');
	$mail->addAddress('chielorenz@gmail.com');
	$mail->Subject = 'Un contatto ti ha scritto tramite il form in lucalorenzini.org';
?>
