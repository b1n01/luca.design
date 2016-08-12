<?php
	header("Content-type: text/xml");
	$name = $_POST['name'];
	$email = $_POST['mail'];
	$message = $_POST['message'];
		
	if($name != null && $email != null && $message != null){

		include 'email_composer.php';
			
		$mail->msgHTML('
			<html>
				<head>
					<title>Promemoria compleanni di Agosto</title>
				</head>
				<body>
					<p>Ciao, un contatto ha utilizzato il <a href="http://www.lucalorenzini.org" title="form">form</a> nel sito.</p>
					<p style="margin-bottom: 25px;">Dati inseriti:</p>
					<p>Nome: <span style="font-size:20px;">'.$name.'</span></p>
					<p>E-mail: <span style="font-size:20px;">'.$email.'</span></p>
					<p>Messaggio:</p>
					<p><span style="font-size:20px;">'.$message.'</span></p>
				</body>
			</html>
		');

		echo '<?xml version="1.0" encoding="UTF-8"?>';
		if (!$mail->send()) {
		    echo "<response>Errore: riprova più tardi.</response>";
		} else {
		    echo "<response>Dati inviati correttamente, sarai contattato al più presto.</response>";
		}
	}
	else{
		echo "<response>Dati non inseriti correttamnte, hai usato il form? DEVi passare usare il <a href='http://www.lucalorenzini.org'>form</a> </response>";
	}
?>