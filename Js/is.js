const usuariosSection = document.getElementById("usuariosSection");
const prestamosSection = document.getElementById("prestamosSection");
const devolucionesSection = document.getElementById("devolucionesSection");

document.getElementById("btnUsuarios").addEventListener("click", () => {
  ocultarSecciones();
  usuariosSection.classList.remove("hidden");
});

document.getElementById("btnPrestamos").addEventListener("click", () => {
  ocultarSecciones();
  prestamosSection.classList.remove("hidden");
});

document.getElementById("btnDevoluciones").addEventListener("click", () => {
  ocultarSecciones();
  devolucionesSection.classList.remove("hidden");
});

function ocultarSecciones() {
  usuariosSection.classList.add("hidden");
  prestamosSection.classList.add("hidden");
  devolucionesSection.classList.add("hidden");
}

// Manejo de devoluciones
const devolucionForm = document.getElementById("devolucionForm");
const mensajeDevolucion = document.getElementById("mensajeDevolucion");

devolucionForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const fecha = document.getElementById("fecha").value;
  const estado = document.getElementById("estado").value;

  if (!fecha) {
    mensajeDevolucion.textContent = "Debe seleccionar una fecha.";
    mensajeDevolucion.style.color = "red";
    return;
  }

  mensajeDevolucion.textContent = `Devolución registrada: ${fecha}, estado: ${estado}`;
  mensajeDevolucion.style.color = "green";
});
