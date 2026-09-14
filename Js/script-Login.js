const form = document.getElementById("loginForm");
const correoInput = document.getElementById("correo");
const passwordInput = document.getElementById("password");
const mensajeDiv = document.getElementById("mensaje");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const correo = correoInput.value.trim();
  const password = passwordInput.value.trim();

  if (correo === "" || password === "") {
    mostrarMensaje("Debe ingresar correo y contraseña", "error");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioEncontrado = usuarios.find(u => u.correo === correo && u.password === password);

  if (usuarioEncontrado) {
    mostrarMensaje(`Bienvenido, ${usuarioEncontrado.nombre}`, "success");

    // Esperar un momento y redirigir
    setTimeout(() => {
      window.location.href = "../pages/is.html"; 
    }, 1500); // 1.5 segundos para que se vea el mensaje
  } else {
    mostrarMensaje("Usuario no registrado o contraseña incorrecta", "error");
  }

  form.reset();
});

function mostrarMensaje(texto, tipo) {
  mensajeDiv.textContent = texto;
  mensajeDiv.style.color = tipo === "success" ? "green" : "red";
  mensajeDiv.style.fontWeight = "bold";
}
