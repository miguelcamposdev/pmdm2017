
let nombreUsuario = document.getElementById("nombre");
let btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener('click', function(e) {
  alert(`Hola ${nombreUsuario.value}`);
});
