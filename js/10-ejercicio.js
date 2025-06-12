// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
//  (sólo hay que comprobar si lo es por uno de los cuatro)



const n = parseInt(prompt("Ingrese un numero:"))


if (n % 2 === 0) {
  alert(`El ${n}es divisible por 2`)

} else if (n % 3 === 0) {
  alert(`El ${n}es divisible por 3`)

} else if (n % 5 === 0) {
  alert(`El ${n}es divisible por 5`)

} else if (n % 7 === 0) {
  alert(`El ${n}es divisible por 7`)

} else {
  alert("No es divisible por ninguno de los numeros")

}