//obtener referencias a los elementos del formulario
const formulario = document.getElementById('login')
const correoinput = document.getElementById('correo')
const contraseñainput = document.getElementById('contraseña')
const botonInicioSesion = document.getElementById('boton')

//agregar un evento de escucha al boton de inicio de sesion

botonInicioSesion.addEventListener('click', function (event) {
    event.preventDefault(); //evita que se envie el formulario automaticamente 

    //realizar las validaciones
    if (!validarCorreo(correoinput.value)) {
        mostrarError(correoinput, 'por favor ingrese un correo valido')
    } else if (contraseñainput.value === '') {
        mostrarError(contraseñainput, 'por favor ingrese contraseña valida')

    } else {
        //si todas las validaciones spn exitosas puede continuar con el envio de datos
        formulario.submit();
    }
});

//funcion para validar el formato de correo electronico

function validarCorreo(correo) {
    //utilizar una expresion regular para verificar si el correo tiene un formato valido
    const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i
    return regexCorreo.test(correo)
}

//funcion para mostrar error

function mostrarError(input, mensaje) {
    const errorMensaje = document.createElement('p') //nos crea un p donde nos va almacenar en caso de error
    errorMensaje.className = 'error-mensaje';
    errorMensaje.textContent = mensaje;

    const contenedorInput = input.parentElement;
    contenedorInput.appendChild(errorMensaje)

    //agregar una clase de estilo para resaltar el campo con error
    contenedorInput.classList.add('error');
}

//limpiar los mensajes de error al escribir en los campos

correoinput.addEventListener('input', limpiarError)
contraseñainput.addEventListener('input', limpiarError)

function limpiarError() {
    const contenedorInput = this.parentElement;
    const errorMensaje = contenedorInput.querySelector('.error-mensaje');

    if (errorMensaje) {
        contenedorInput.removechild(errorMensaje);
        contenedorInput.classList.remove('error');
    }
}



