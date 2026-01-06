function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 72,
    behavior: "smooth",
  });
}

function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const name = data.get("name");

  alert(
    `Thanks${name ? `, ${name}` : ""}! This demo form doesn't send yet, but you can wire it up to an email service or backend.`
  );

  form.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});


