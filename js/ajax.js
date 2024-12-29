var resultado1 = document.getElementById("estados");
function estados(){
		var xmlhttp;
        if(window.XMLHttpRequest)
                {
                        xmlhttp =new XMLHttpRequest();
                }else
                {
                    xmlhttp =new   ActiveXObject("Microsoft.XMLHTTP");
                }
   var buscar="estados";
   
    xmlhttp.onreadystatechange = function(){
            if(this.readyState  === 4 && this.status === 200){  
                var mensaje = this.responseText;
                resultado1.innerHTML = mensaje;
            }
        } 
        xmlhttp.open("POST", "../controlers/buscarEstados.php", true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send(buscar);          	
}
var resultado2 = document.getElementById("municipios");
function municipio(){
	alert("si")
}