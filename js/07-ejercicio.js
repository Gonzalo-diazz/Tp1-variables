//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.


const n1 = parseInt(prompt("Ingrese un numero:"));
const n2 = parseInt(prompt("Ingrese el segundo numero:"));
const n3 = parseInt(prompt("Ingrese el tercer numero:"));

if(n1 > n2 && n1 > n3){
    alert("El numero mayor es:" + n1)
}
if(n2 > n1 && n2 > n3){
    alert("El numero mayor es:" + n2)
}
if(n3 > n1 && n3 > n1){
    alert("El numero mayor es:" + n3)
}
else{
     alert("Son iguales")
}