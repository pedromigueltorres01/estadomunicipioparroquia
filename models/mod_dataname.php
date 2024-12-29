<?php
/**
 * 
 */
class Data
{
	
	public function estado()
	{
		# code...
		require_once("mod_conexion.php");
		$con=conex();
		$result = pg_query($con,"SELECT id_estado,estado from estados order by estado asc;");
		return $result;
	}
}
?>