document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const employeeId = document.getElementById('employeeId').value;

    if (employeeId === '') {
        alert('Por favor, complete todos los campos.'); // Muestra una alerta si algún campo está vacío
    } else {
        window.location.href = 'id.html'; // Redirige a otra página si los campos están completos
    }
});