function ValidarTelefono() {
    // vALIDAREMOS QUE EL CAMPO TELEFONO TENGA 10 CARACTERES
    let Telefono, numcar;
    Telefono = document.getElementById("Telefono").value;
    numcar=Telefono.length;

    if(numcar==10)
    {
        alert("Su numero cumple con el estandar");
    }
        else if(numcar<10){
            alert("Faltan numeros al telefono");

        }
        else {
            alert("Su numero tiene mas de 10 caracteres");
        }

}

function normalizarNombre() {
//convertimos el nombre en mayúscula
let nom=document.getElementById("nombre").value;
nom=nom.toUpperCase();
nom=nom.trim();//Eliminar espacios al inicio y al final
nom=nom.replace("camilo","RALPH")
alert(nom);

}