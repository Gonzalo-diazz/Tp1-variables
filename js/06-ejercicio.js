//6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let n1 = parseInt(prompt("Ingrese un numero:"))
let n2 = parseInt(prompt("Ingrese otro numero:"))

if(n1 > n2){
    alert("El numero mayor es:" + n1)
}
else if(n1 < n2){
    alert("El numero mayor es:" + n2)
}
else{
    alert("Son iguales")
} 

