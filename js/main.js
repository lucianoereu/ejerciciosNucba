const cookies = document.getElementById('cookies');
const ampliarSesion = document.getElementById('ampliarSesion');
const btnX = document.getElementsByClassName('btnX');
const alertCookies = document.getElementsByClassName('alertCookies');
const alertAmpliarSesion = document.getElementsByClassName('alertAmpliarSesion');
const btnFeedBack = document.getElementsByClassName('alertFeedBack');
const feedBack= document.getElementById('feedBack');
const btnFeedBacX= document.getElementsByClassName('feedBack-x');
const btnEnviar = document.getElementsByClassName('btnEnviar');
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

// Función para mostrar el feedback
function mostrarFeedBack() {
    feedBack.style.display = 'flex';
}

btnFeedBack[0].addEventListener('click', mostrarFeedBack);

// Función para cerrar el feedback
function cerrarFeedBack() {
    feedBack.style.display = 'none';
}

btnFeedBacX[0].addEventListener('click', cerrarFeedBack);

// Función para enviar el feedback
function enviarFeedBack() {
    feedBack.style.display = 'none';
}

btnEnviar[0].addEventListener('click', enviarFeedBack);

