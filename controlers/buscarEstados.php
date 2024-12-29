<?php
//print_r($_POST);
if (isset($_POST['estados'] )) {
	# code...
	require_once("../models/mod_dataname.php");
		$buscar=new Data();
	 $resultado=$buscar->estado();
	 $estado="";
	 while ($fila= pg_fetch_array($resultado)) {
	 	# code...
	 	$estado.='<option onclick="municipio()" id"info" value="'.$fila['id_estado'].'">'.$fila['estado'].'</option>';
	 	
} echo $estado;
}
?>		  