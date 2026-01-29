// MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// CONTACT FORM
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  successMsg.textContent = `Rahmat, ${name}! Xabaringiz yuborildi ✅`;

  form.reset();

  setTimeout(() => {
    successMsg.textContent = "";
  }, 4000);
});
