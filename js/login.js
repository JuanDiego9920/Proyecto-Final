document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, complete todos los campos.'); // Muestra una alerta si algún campo está vacío
    } else {
        window.location.href = 'list.html'; // Redirige a otra página si los campos están completos
    }
});
document.getElementById('employeeForm')?.addEventListener('submit', async function (event) {
    event.preventDefault();

    const employeeId = document.getElementById('employeeId').value.trim();

    // Validación de campo vacío
    if (!employeeId) {
        alert('Por favor, ingrese el ID del empleado.');
        return; // Evita que continúe si el campo está vacío
    }

    const response = await fetch(`http://localhost:4000/employees/${employeeId}`);
    const data = await response.json();
    
    if (response.ok) {
        document.getElementById('result').innerText = `Horas Extras: ${data.overtimeHours}`;
    } else {
        alert('Empleado no encontrado.');
    }
});