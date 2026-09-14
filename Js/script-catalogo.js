const buscarInput = document.getElementById("buscarLibro");
const btnBuscar = document.getElementById("btnBuscar");
const selectCategorias = document.getElementById("categorias");
const libros = document.querySelectorAll(".libro");

// Buscar por texto
btnBuscar.addEventListener("click", () => {
    const texto = buscarInput.value.toLowerCase();
    libros.forEach(libro => {
        const titulo = libro.querySelector("p").textContent.toLowerCase();
        libro.style.display = titulo.includes(texto) ? "block" : "none";
    });
});

// Filtrar por categoría
selectCategorias.addEventListener("change", () => {
    const categoria = selectCategorias.value;
    libros.forEach(libro => {
        if (categoria === "todos" || libro.dataset.categoria === categoria) {
            libro.style.display = "block";
        } else {
            libro.style.display = "none";
        }
    });
});
