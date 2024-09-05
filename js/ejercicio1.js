// JavaScript source code
function calcularPromedio() {
    // Obtener los valores de las notas
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    // Verificar que las notas sean números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor ingrese tres números válidos.");
        return;
    }

    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Mostrar el promedio en el campo de resultado
    document.getElementById('promedio').value = promedio.toFixed(2);
}

