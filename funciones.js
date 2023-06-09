function ir(){
    
    window.location.href = "./interaccion.html"
}
function seleccion(){
    var opcion1=document.getElementById("remerablanca").checked;
    var opcion2=document.getElementById("remeraroja").checked;
    var opcion3=document.getElementById("campera").checked;
    var opcion4=document.getElementById("buzo").checked;
    var mensaje="Disponible!"
    if(opcion3){
        alert("Lo sentimos, no tenemos en stock la campera, por favor seleccione otro producto");
    }else {
        document.getElementById("mensaje").innerHTML=" Todos los productos seleccionados estan disponibles, continua tu compra!";
    }
}
function borrar(){
    document.getElementById("remeraroja").checked;
    document.getElementById("remerablanca").value=" ";
    document.getElementById("buzo").value=" ";
    document.getElementById("campera").value=" ";
    document.getElementById("mensaje").innerHTML=" ";
}
function borrar1(){

    document.getElementById("mensaje1").innerHTML=" ";
}
function precioFinal(){
    var metodo = document.getElementById("metodo").value;
    var mensaje1;

    if (metodo=="E"){
        document.getElementById("mensaje1").innerHTML=" En efectivo obtienes un dcto del 15%!";
    }else if (metodo=="TC"){
        document.getElementById("mensaje1").innerHTML=" Con tarjeta de crédito hay un recargo del 15%";
    }else   if (metodo=="TD"){
        document.getElementById("mensaje1").innerHTML=" Con tarjeta de débito hay un regargo del 5 %";
    }
    else   if (metodo=="T"){
      document.getElementById("mensaje1").innerHTML=" Con transferencia tienes un dcto del 5%!";
    }

}
function volver(){
    
    window.location.href = "./index.html"
}
function envio(){
    var loc = document.getElementById("loc").value;

    document.getElementById("mensaje3").innerHTML=" Nuestro delivery llega a "+ loc + "! Tu pedido estará allí pronto"
}
function borrar3(){
    document.getElementById("dir").value=" ";
    document.getElementById("loc").value=" ";
    document.getElementById("dia").value=" ";
    document.getElementById("mensaje3").innerHTML=" ";
}