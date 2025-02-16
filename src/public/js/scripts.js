function ajustarColumnas () {
  const containers = document.querySelectorAll('.section-cards') // Selecciona todos los contenedores
  const width = window.innerWidth
  let columnas = 4
  if (width < 1400) columnas = 3
  if (width < 1150) columnas = 2
  if (width < 850) columnas = 1

  // Aplica el estilo a cada contenedor
  containers.forEach(container => {
    container.style.display = 'grid'
    container.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`
  })
}

// Llamar a la función al cargar y al redimensionar la ventana
window.addEventListener('load', ajustarColumnas)
window.addEventListener('resize', ajustarColumnas)
