const toggleButton = document.getElementById('toggleDarkMode')
const body = document.body

// Verificar si el usuario ya activó el modo oscuro antes
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode')
}

// Función para cambiar el modo oscuro
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode')

  // Guardar en localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled')
  } else {
    localStorage.setItem('darkMode', 'disabled')
  }
})
