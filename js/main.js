const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const modal = document.getElementById("projectModal");
const closeBtn = modal.querySelector(".close");

menuToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

const projectData = {
  voice: {
    title: "Real-Time Voice Changer Using AI",
    description: "AI-based real-time voice transformation.",
    features: ["Live audio processing", "Low latency", "AI filters"],
    tech: "Python, Streamlit, FFmpeg",
    link: "#"
  },
  weather: {
    title: "Weather Application",
    description: "Fetches real-time weather data using APIs.",
    features: ["City search", "Live data", "Responsive UI"],
    tech: "HTML, CSS, JavaScript",
    link: "#"
  }
};

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const data = projectData[card.dataset.project];
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDescription").textContent = data.description;
    document.getElementById("modalTech").textContent = data.tech;

    const ul = document.getElementById("modalFeatures");
    ul.innerHTML = "";
    data.features.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      ul.appendChild(li);
    });

    document.getElementById("modalLink").href = data.link;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  });
});

closeBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}
