const buscarInput = document.getElementById("buscarSoporte");
const btnBuscar = document.getElementById("btnBuscarSoporte");
const respuestaDiv = document.getElementById("respuestaSoporte");
const faqBtns = document.querySelectorAll(".faq-btn");

const respuestas = {
  usuario: "Si olvidaste tu usuario, dirígete a la sección de Registro y verifica tu correo electrónico. El sistema usa tu correo como identificador principal.",
  devoluciones: "Para registrar una devolución, ingresa la fecha y selecciona si fue a tiempo o con retraso. Luego confirma en la sección Devoluciones.",
  prestamos: "Si no puedes registrar un préstamo, asegúrate de que el usuario esté registrado y que el libro esté disponible en el catálogo.",
  catalogo: "Si no encuentras un libro, usa la barra de búsqueda o filtra por categoría. Si aún no aparece, consulta con el administrador de la biblioteca."
};

// Buscar por texto
btnBuscar.addEventListener("click", () => {
  const texto = buscarInput.value.toLowerCase();
  let encontrado = false;

  for (let key in respuestas) {
    if (respuestas[key].toLowerCase().includes(texto)) {
      respuestaDiv.textContent = respuestas[key];
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    respuestaDiv.textContent = "No se encontró información relacionada.";
  }
});

// FAQ botones
faqBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    respuestaDiv.textContent = respuestas[id];
  });
});
