const toggleButton = document.getElementById('toggleDarkMode')
const body = document.body

// Verificar si el usuario ya activó el modo oscuro antes
// eslint-disable-next-line no-undef
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode')
}

// Función para cambiar el modo oscuro
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode')

  // Guardar en localStorage
  if (body.classList.contains('dark-mode')) {
    // eslint-disable-next-line no-undef
    localStorage.setItem('darkMode', 'enabled')
  } else {
    // eslint-disable-next-line no-undef
    localStorage.setItem('darkMode', 'disabled')
  }
})
