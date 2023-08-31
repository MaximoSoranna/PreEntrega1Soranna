/*Tengo pensado hacer una pagina de compra de juegos, con un carrito de compras y en el cual te puedas loguear con un gmail.*/ 

let edad = prompt("Ingrese su edad:");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Usar ciclos

for (let i = 1; i <= 10; i++) {
    console.log(i);
}   

// Usar funciones
function Saludar(name) {
    console.log("¡Hola, " + name + "!");
}
let nombre = prompt("Ingrese su nombre:")
Saludar(nombre);

// Armar un simulador interactivo

let saldo = 0;
while(true){
let opcion = prompt ("Que deseas hacer? (Crear una cuenta/depositar/retirar/desvincular cuenta/salir)");
if (opcion == "Crear una cuenta"){
    let nombre_apellido = prompt("Ingrese nombre y apellido")
    let gmail = prompt("Ingrese su gmail")
    let contraseña = prompt("Ingrese una contraseña")
    
    console.log("Bienvenido " + nombre_apellido + "!");
}
else if (opcion == "depositar") {
    let total = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    saldo += total;
    console.log("Nuevo saldo: " + saldo);
} else if (opcion == "retirar") {
    let total = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    if (total <= saldo) {
        saldo -= total;
        console.log("Nuevo saldo: " + saldo);
    } else {
        console.log("Saldo insuficiente.");
    }
    }
    else if (opcion == "desvincular cuenta"){
        console.log("Su cuenta se desvinculo correctamente.")   
    }
 else if (opcion == "salir") {
    console.log("Saliendo del simulador.");
    break;
} 
else {
    console.log("Opción no válida. Intente nuevamente.");
}
}