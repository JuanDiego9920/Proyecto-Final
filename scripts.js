document.getElementById('loginForm')?.addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validación de campos vacíos
    if (!username || !password) {
        alert('Por favor, complete todos los campos.');
        return; // Evita que continúe si algún campo está vacío
    }
    
    const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    
    if (response.ok) {
        window.location.href = 'employees.html';
    } else {
        alert('Credenciales incorrectas.');
    }
});


const saveButton = document.getElementById('btnAgregar');
const updateButton = document.getElementById('btnEditar');
const deleteButton = document.getElementById('btnEliminar');

btnAgregar.addEventListener('click', () => {
  // Aquí puedes escribir el código para guardar la información en una base de datos o en un array
});

btnEditar.addEventListener('click', () => {
  // Aquí puedes escribir el código para actualizar la información almacenada previamente
});

btnEliminar.addEventListener('click', () => {
  // Aquí puedes escribir el código para eliminar la información almacenada
});