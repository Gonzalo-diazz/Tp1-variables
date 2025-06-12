// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
// (hay que decir todos por los que es divisible)


const n = parseInt(prompt("Ingrese un numero:"))


if (n % 2 === 0){
  alert(`El ${n} es divisible por 2`)

}
if (n % 3 === 0){
  alert(`El ${n} es divisible por 3`)

} 
if (n % 5 === 0){
  alert(`El ${n} es divisible por 5`)

}
else if (n % 7 === 0){
  alert(`El ${n} es divisible por 7`)

} 
else{
  alert("No es divisible por ninguno de los numeros")

}
