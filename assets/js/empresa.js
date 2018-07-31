let formulario = document.getElementById('formulario');
// console.log(formulario);
// manejar algo quiere decir que controlar lo que contiene
// el evento es un momento
function manejarSubmit(evento) {
    // preventDefault() detiene el evento, en este caso el envio no ocurre.
    evento.preventDefault();
    const correo = document.getElementById('correoElectronico').value;
    const contrasena = document.getElementById('contrasena').value;
    if(correo.length != 0 && contrasena.length != 0) {
        firebase.auth().signInWithEmailAndPassword(correo, contrasena)
        .then(response => {
          location.href ="../scl-2018-01-ProyectoFinalCore/inicio.html";
        })
        .catch(function(error) {
            let errorCode = error.code;
            alert(errorCode);
        });
    };
}
// se ejecuta la funcion
formulario.addEventListener('submit', manejarSubmit);

