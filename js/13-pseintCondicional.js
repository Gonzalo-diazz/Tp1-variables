const edad = parseInt(prompt("ingresa tu edad"))
console.log(edad)


if (edad > 0 && edad <= 110){
    if (edad >= 18){
        alert("sos mayor de edad")
    }
    else {
        ("sos menor de edad")
    }
}
else {
    alert("valor erroneo")
}