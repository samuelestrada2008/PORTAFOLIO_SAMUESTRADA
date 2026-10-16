// Cambia TU_USUARIO por tu usuario real de Instagram, sin @.
const INSTAGRAM_USERNAME = "2008_samu_";
const instagramLink = document.querySelector("#instagram-link");
if (instagramLink) {
  if (INSTAGRAM_USERNAME !== "TU_USUARIO" && INSTAGRAM_USERNAME.trim()) {
    instagramLink.href = `https://www.instagram.com/${INSTAGRAM_USERNAME.replace(/^@/, "")}/`;
  } else {
    instagramLink.addEventListener("click", event => {
      event.preventDefault();
      alert("Abre script.js y reemplaza TU_USUARIO por tu usuario de Instagram.");
    });
  }
}
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
  }));
}
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => item.classList.toggle("active", item === button));
  const category = button.dataset.filter;
  projects.forEach(project => { project.hidden = category !== "todos" && project.dataset.category !== category; });
}));
document.querySelectorAll(".media video").forEach(video => {
  const media = video.closest(".media");
  const preview = media.querySelector(".placeholder");

  // Detect the source video's dimensions and set the card to its native orientation.
  video.addEventListener("loadedmetadata", () => {
    media.classList.add("has-video");
    const ratio = video.videoWidth / video.videoHeight;
    media.classList.remove("is-vertical", "is-horizontal", "is-square");
    if (ratio < 0.85) {
      media.classList.add("is-vertical");
      media.querySelector(".ratio").textContent = "9:16 · VERTICAL";
    } else if (ratio > 1.15) {
      media.classList.add("is-horizontal");
      media.querySelector(".ratio").textContent = "16:9 · HORIZONTAL";
    } else {
      media.classList.add("is-square");
      media.querySelector(".ratio").textContent = "1:1 · CUADRADO";
    }
  });

  const playVideo = async () => {
    const source = video.querySelector("source");
    if (!source || !source.getAttribute("src")) return;
    try {
      video.controls = true;
      media.classList.add("is-playing");
      await video.play();
    } catch (error) {
      media.classList.remove("is-playing");
      video.controls = false;
      alert("No se pudo reproducir el video. Comprueba que el MP4 exista en assets/videos/ y que el nombre coincida.");
    }
  };

  if (preview) {
    preview.addEventListener("click", playVideo);
    preview.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        playVideo();
      }
    });
  }
  video.addEventListener("play", () => media.classList.add("is-playing"));
  video.addEventListener("error", () => {
    media.classList.remove("has-video", "is-playing");
    video.controls = false;
  });
});
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add("visible"));
document.querySelector("#year").textContent = new Date().getFullYear();
