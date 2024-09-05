// Definir un array de 5 contactos
const contactos = [
    { nombre: "Juan", telefono: "555-1234" },
    { nombre: "Maria", telefono: "555-5678" },
    { nombre: "Luis", telefono: "555-3456" }
];

// Funci�n para imprimir los contactos en la tabla
function imprimirContactos() {
    // Obtener el cuerpo de la tabla
    const tableBody = document.querySelector("#contact-table tbody");

    // Iterar sobre el array de contactos y a�adirlos a la tabla
    contactos.forEach(contacto => {
        const fila = document.createElement("tr");

        // Crear celdas para el nombre y el tel�fono
        const nombreCelda = document.createElement("td");
        nombreCelda.textContent = contacto.nombre;
        const telefonoCelda = document.createElement("td");
        telefonoCelda.textContent = contacto.telefono;

        // A�adir las celdas a la fila
        fila.appendChild(nombreCelda);
        fila.appendChild(telefonoCelda);

        // A�adir la fila al cuerpo de la tabla
        tableBody.appendChild(fila);
    });
}

// Llamar a la funci�n para imprimir los contactos al cargar la p�gina
document.addEventListener('DOMContentLoaded', (event) => {
    imprimirContactos();
});
