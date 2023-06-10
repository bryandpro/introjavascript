/* un automovil recorre una distancia de 144 kilometros del punto A al punto B en un tiempo de 3 horas, calcular velocidad 
var d = 144;
var t = 3; 
var v = d/t;
alert("La velocidad es de:" + v + "km/h");
*/
/*function suma(){
    var a = 3; 
    var b = 5;
    var c = a+b;
    alert(c);
}
*/
/* listas y ciclos JavaScript
var animals= ["conejo", "pato", "jirafa", "elefante", "leon"]
console.log(animals);
for (var x=0;x<=animals.length;x++){
    console.log(animals[x]);
}
console.log("***********");
console.log(animals.length);
*/

//condiciones 
/*se desea calular la edad de una persona partiendo del año de nacimiento y edad actual, verifique si es mayor o menor de edad*/
an = prompt("Ingrese año de nacimiento");
aa = prompt("Ingrese año actual ");
e = aa - an;
if (e>=18){
    alert("Mayor de edad ");
} else{
    alert("Menor de Edad");
}