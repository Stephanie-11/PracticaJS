// Definir un array de 5 contactos
const contactos = [
    { nombre: "Juan", telefono: "555-1234" },
    { nombre: "Maria", telefono: "555-5678" },
    { nombre: "Luis", telefono: "555-3456" }
];

// Función para imprimir los contactos en la tabla
function imprimirContactos() {
    // Obtener el cuerpo de la tabla
    const tableBody = document.querySelector("#contact-table tbody");

    // Iterar sobre el array de contactos y añadirlos a la tabla
    contactos.forEach(contacto => {
        const fila = document.createElement("tr");

        // Crear celdas para el nombre y el teléfono
        const nombreCelda = document.createElement("td");
        nombreCelda.textContent = contacto.nombre;
        const telefonoCelda = document.createElement("td");
        telefonoCelda.textContent = contacto.telefono;

        // Añadir las celdas a la fila
        fila.appendChild(nombreCelda);
        fila.appendChild(telefonoCelda);

        // Añadir la fila al cuerpo de la tabla
        tableBody.appendChild(fila);
    });
}

// Llamar a la función para imprimir los contactos al cargar la página
document.addEventListener('DOMContentLoaded', (event) => {
    imprimirContactos();
});
