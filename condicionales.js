var nombreUsuario = prompt("Ingrese un nombre de usuario");
var contrasena = prompt ("Ingrese una contraseña: ");
var edad = parseInt(prompt("Ingrese su edad: "));


if (nombreUsuario == "" || contrasena == "" || edad == "") {
    alert("No ingresaste los datos suficientes");
}
else if (edad < 18) {
    alert("Es necesario ser mayor de edad para registrarse")
}
else {
    alert("Gracias por registrarte " + nombreUsuario);
}

