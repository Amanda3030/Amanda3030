function Sumar(){ //la fucion que se quiere hacer con el button
var num1= document.getElementById("N1").value;
var num2= document.getElementById("N2").value;

var resultado=parseInt(num1)+parseInt(num2); //la suma de los dos nuemros del campo de texto
alert("La suma de los numeros es " +resultado);

}

function Resta(){ 
    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    
    var resultado=parseInt(num1)-parseInt(num2); //var resultado=parseInt(num1-num2);
    alert("La resta de los numeros es " +resultado);
    
    }

    
function Multiplicar(){ 
    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    
    var resultado=parseInt(num1)*parseInt(num2);
    alert("La Multiplicacion de los numeros es " +resultado);
    
    }

    
function Division(){ 
    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    
    var resultado=parseInt(num1)/parseInt(num2);
    alert("La Division de los numeros es " +resultado);
    
    }


function Ver(){

var dato=document.getElementById("Materia").value;

switch (dato) {

    case "Programacion":
         alert("Usted a seleccionado Programacion");
    break;

    case "Soporte TI":
        alert("Usted a seleccionado Soporte TI");
    break

    case "TICS":
        alert("Usted a seleccionado TICS");
    break

    case "Diseño de Software":
        alert("Usted a seleccionado Diseño de Software");
    break
    default:
        break;
}

}


function Validar(){

    var dato=document.getElementById("Edad").value;

    if(dato>=18){
       alert("Eres mayor de edad ");
    }
    else (dato<=18);
        alert("Eres menor de edad ");
   }