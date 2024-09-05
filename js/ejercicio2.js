// Crear un array de 10 productos
const productos = [
    { id: 1, nombre: "Televisor", categoria: "Electrónica", precio: 150 },
    { id: 2, nombre: "Cama", categoria: "Hogar", precio: 200 },
    { id: 3, nombre: "Legos", categoria: "Juguetes", precio: 15 },
    { id: 4, nombre: "Vestido", categoria: "Ropa", precio: 25 },
    { id: 5, nombre: "Pelota Basquet", categoria: "Deportes", precio: 30 },
    { id: 6, nombre: "DVD", categoria: "Electrónica", precio: 75 },
    { id: 7, nombre: "Ropero", categoria: "Hogar", precio: 100 },
    { id: 8, nombre: "Barbies", categoria: "Juguetes", precio: 20 },
    { id: 9, nombre: "Camiseta", categoria: "Ropa", precio: 27 },
    { id: 10, nombre: "Raqueta de tennis", categoria: "Deportes", precio: 25 }
];

// Función para imprimir los productos en la tabla
function imprimirProductos() {
    const tabla = document.getElementById('productosTabla').getElementsByTagName('tbody')[0];

    productos.forEach(producto => {
        const fila = tabla.insertRow();
        fila.insertCell().textContent = producto.id;
        fila.insertCell().textContent = producto.nombre;
        fila.insertCell().textContent = producto.categoria;
        fila.insertCell().textContent = `$${producto.precio}`;
    });
}

// Llamar a la función para imprimir los productos al cargar la página
window.onload = imprimirProductos;

