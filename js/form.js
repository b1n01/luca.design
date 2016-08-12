function sendMessage(){

	spin(true);
	document.getElementById("send").value = 'invio...';

	var xmlHttp = false;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlHttp= new XMLHttpRequest();
  	}
	else{// code for IE6, IE5
  		xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
	}	

	if(!xmlHttp){
		spin(false);
		document.getElementById("send").value = 'errore nel server, riprova più tardi.';
	}

	if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4  ){
		var empty = '';

		var name = document.getElementById("name").value;
		if(name == '' ) empty = 'name';
		
		var mail = document.getElementById("mail").value;
		if(mail == '' || !validateEmail(mail)) empty = empty+'mail';
		
		var message = document.getElementById("message").value;
		if(message == '') empty = empty+'message';

		if(!empty){
			console.log('Creazione parametri');
			var params = "name="+name+"&mail="+mail+"&message="+message;
			xmlHttp.open("POST","php/message.php", true);
			xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			
			xmlHttp.onreadystatechange = function() {
				if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
						spin(false);
						document.getElementById("send").value = 'inviato';
				}
			}
			xmlHttp.send(params);
		}
		else{
			spin(false);
			switch(empty){
				case 'name':
					document.getElementById("send").value = 'Inserisci il tuo nome';
				break;
				case 'mail':
					document.getElementById("send").value = 'Inserisci il tuo indirizzo';
				break;
				case 'message':
					document.getElementById("send").value = 'Inserisci un messaggio';
				break;
				default:
					document.getElementById("send").value = 'Inserisci tutti i dati';
			}
			
			console.log('Errore: uno dei parametri non è stato inserito correttamente');
		}
	}
	else{
		spin(false);
		document.getElementById("send").value = 'errore nel server, riprova più tardi';
	}

}

function spin(flag){
	if(flag){
		document.body.style.cursor='progress';
	}
	else{
		document.body.style.cursor='auto';
	}
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,2}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 