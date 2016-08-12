<?php
	mysql_connect("localhost", "root", "") or
	    die("Connessione non riuscita: " . mysql_error());
	mysql_select_db("lucalorenzini");

	$risultato = mysql_query("SELECT name, description, version, link, image FROM evolutions ORDER BY version DESC");


    while ($riga = mysql_fetch_array($risultato, MYSQL_NUM)) {
		echo ("
		<div class='evolutionTail'>
			<a href='$riga[3]' title='link al progetto'>
				<img src='dist/img/$riga[4]' alt='anteprima del progetto'>
			</a>
			<div class='description'>
				<h3>v$riga[2]: $riga[0]</h3>
				<p>$riga[1]</p>
			</div>
		</div>
		");
	}
?>