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
////////
const modal = document.getElementById("imageModal");
const modalImg = document.querySelector(".modal-image");
const closeBtn = document.querySelector(".close");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = thumb.getAttribute("data-full");
    modalImg.alt = thumb.alt;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target.classList.contains("modal-content")) {
    modal.style.display = "none";
  }
};

////
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  let currentIndex = 0;

  function showItem(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => showItem(currentIndex - 1));
  nextButton.addEventListener("click", () => showItem(currentIndex + 1));

  // Modal functionality
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  items.forEach((item) => {
    const img = item.querySelector("img");
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
