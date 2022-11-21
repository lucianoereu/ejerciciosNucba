const cookies = document.getElementById('cookies');
const ampliarSesion = document.getElementById('ampliarSesion');
const btnX = document.getElementsByClassName('btnX');
const alertCookies = document.getElementsByClassName('alertCookies');
const alertAmpliarSesion = document.getElementsByClassName('alertAmpliarSesion');


// Función para mostrar la alerta de cookies
function mostrarAlertCookies() {
    cookies.style.display = 'flex';
}

// Función para mostrar la alerta de ampliar sesión
function mostrarAlertAmpliarSesion() {
    ampliarSesion.style.display = 'flex';
}

alertCookies[0].addEventListener('click', mostrarAlertCookies);
alertAmpliarSesion[0].addEventListener('click', mostrarAlertAmpliarSesion);

// Función para cerrar la alerta de cookies 
function cerrarAlertCookies() {
    cookies.style.display = 'none';
}

// Función para cerrar la alerta de ampliar sesión
function cerrarAlertAmpliarSesion() {
    ampliarSesion.style.display = 'none';
}

btnX[0].addEventListener('click', cerrarAlertCookies);
btnX[1].addEventListener('click', cerrarAlertAmpliarSesion);

