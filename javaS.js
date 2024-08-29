// Array de frases motivadoras
const frases = [
  "Optimización de contenidos con inteligencia artificial para mejorar el ranking en motores de búsqueda.",
  "Detección de palabras clave y oportunidades de mejora en tu estrategia de SEO.",
  "Análisis de grandes cantidades de datos para identificar patrones y tendencias.",
  "Mejora de la velocidad y rendimiento de tu sitio web para mejorar la experiencia del usuario.",
  "Creación de contenido de alta calidad y relevante para atraer tráfico orgánico.",
];

// Función para mostrar una frase aleatoria
function mostrarFrase() {
  // Genera un índice aleatorio basado en la longitud del array
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  // Actualiza el contenido del párrafo con la frase seleccionada
  document.getElementById("frase").innerText = frases[indiceAleatorio];
}

setInterval(mostrarFrase, 2000);
