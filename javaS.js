document.addEventListener("DOMContentLoaded", function () {
  const textEntries = document.querySelectorAll(".text-entry");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  textEntries.forEach((entry) => {
    observer.observe(entry);
  });
});

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
///////
///img
document.getElementById("parallax").style.backgroundImage =
  "url('img2/corto2.png')";

window.addEventListener("scroll", function () {
  let parallax = document.getElementById("parallax");
  let scrolPosition = window.scrollY;

  parallax.style.backgroundPositionY = scrolPosition * 0.7 + "px";
});
//////////////////escojer
document
  .getElementById("servicioForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const servicio = document.getElementById("servicio").value;
    const resultadoDiv = document.getElementById("resultado");
    let mensaje = "";

    switch (servicio) {
      case "ia":
        mensaje =
          "Has seleccionado nuestros servicios de Inteligencia Artificial. Optimizaremos tus procesos con tecnología de vanguardia.";
        break;
      case "seo":
        mensaje =
          "Has elegido nuestros servicios de SEO. Mejoraremos tu visibilidad en los motores de búsqueda.";
        break;
      case "ppc":
        mensaje =
          "Has optado por nuestro Marketing PPC. Crearemos campañas efectivas para aumentar tus conversiones.";
        break;
      case "contenido":
        mensaje =
          "Has seleccionado Marketing de Contenidos. Desarrollaremos estrategias para atraer y retener a tu audiencia.";
        break;
      default:
        mensaje = "Por favor, selecciona un servicio.";
    }

    resultadoDiv.textContent = mensaje;
    resultadoDiv.style.display = "block";
  });
const carouselItems = document.querySelectorAll(".carousel-item");
carouselItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const imgSrc = e.target.src;
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    modal.style.display = "block";
    modalContent.src = imgSrc;
  });
});
////////
