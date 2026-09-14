const form = document.getElementById("registroForm");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const passwordInput = document.getElementById("password");
const tableBody = document.querySelector("#usersTable tbody");

// Al cargar la página, mostrar usuarios guardados
document.addEventListener("DOMContentLoaded", cargarUsuarios);

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (nombreInput.value.trim() === "" || correoInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Todos los campos son obligatorios");
    return;
  }

  // Crear objeto usuario
  const usuario = {
    nombre: nombreInput.value,
    correo: correoInput.value,
    password: passwordInput.value
  };

  // Guardar en localStorage
  guardarUsuario(usuario);

  // Mostrar en tabla
  agregarFila(usuario);

  // Limpiar formulario
  form.reset();
});

function guardarUsuario(usuario) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function cargarUsuarios() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.forEach(u => agregarFila(u));
}

function agregarFila(usuario) {
  const row = document.createElement("tr");

  const nombreCell = document.createElement("td");
  nombreCell.textContent = usuario.nombre;

  const correoCell = document.createElement("td");
  correoCell.textContent = usuario.correo;

  row.appendChild(nombreCell);
  row.appendChild(correoCell);
  tableBody.appendChild(row);
}

