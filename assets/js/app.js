/*----------------- EJERCICIO 1 -----------------*/

/*-------------- FUNCTION --------------*/
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); /* el formulario no se enviara si no se cumplen los requisitos acontinuacion */

    /*-------------- VARIABLES --------------*/

    var nombreInput = document.getElementById("nombre");
    var asuntoInput = document.getElementById("asunto");
    var mensajeInput = document.getElementById("mensaje");

    var errorNombre = document.querySelector(".errorNombre");
    var errorAsunto = document.querySelector(".errorAsunto");
    var errorMensaje = document.querySelector(".errorMensaje");   /* variables por si el valor ingresado no es correcto */

    var nombrePattern = /^[a-zá-ýÁ-ÝA-Z\s]+$/;
    var asuntoPattern = /^[a-zá-ýÁ-ÝA-Z\s]+$/;
    var mensajePattern = /^[a-zá-ýÁ-ÝA-Z\s]+$/;  /* pattern para obligar al usuario a usar ( letras mayusculas y minusculas y todas con tildes petmiridos) */

    var isValid = true;

    /*-------------- IF / ELSE --------------*/

    if (!nombrePattern.test(nombreInput.value)) {    /* compara el valor ingresado con el patron asignado */
        errorNombre.textContent = " * Por favor, ingrese un nombre válido (sólo letras y espacios)";
        nombreInput.focus();
        isValid = false;
    } else {
        errorNombre.textContent = ""; /* mostrar mensaje de error en caso de no cumplir el requisito */
    };

    if (!asuntoPattern.test(asuntoInput.value)) {
        errorAsunto.textContent = " * Por favor, ingrese un asunto válido (sólo letras y espacios)";
        asuntoInput.focus();
        isValid = false;
    } else {
        errorAsunto.textContent = "";
    };

    if (!mensajePattern.test(mensajeInput.value)) {
        errorMensaje.textContent = " * Por favor, ingrese un asunto válido (sólo letras y espacios)";
        mensajeInput.focus();
        isValid = false;
    } else {
        errorMensaje.textContent = "";
    };

    if (isValid) {
        /* si no se cumple ninguno de los errores AuthenticatorAssertionResponse, mostrar el mensaje de enviar exitosamente el formulario  */
        document.querySelector(".resultado").textContent = "Mensaje enviado exitosamente";

    };
});


/*----------------- EJERCICIO 2 -----------------*/


function changeColor(button) {    /* FUNCION PARA CAMBIAR DE COLOR ALGO */
    var color = button.style.backgroundColor;  /* SELECCIONAR EL BACKGROUND POARA CAMBIAR EL COLOR */
    document.getElementById('caja').style.backgroundColor = color;  
};


/*----------------- EJERCICIO 2 -----------------*/


function sumar() {
    var valor1 = parseFloat(document.getElementById('valor1').value);  /* SELECCIONAR LA VARIABLE INGRESADA POR EL USUARIO */
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultado = valor1 + valor2;                                   /* FORMULA DE LOS VALORES */
    document.getElementById('resultado').innerText = resultado;         /* MOSTRAR EN #RESULTADO EN HTML */
};

function restar() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultado = valor1 - valor2;
    document.getElementById('resultado').innerText = resultado;
};