// Fade-in on scroll using Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Observe all elements with .animate
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Contact form fake handler
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});
const scriptURL = "https://script.google.com/macros/s/AKfycbwMqFqbFjs79_OFOSJBMWGx7PBZr1NDz6L5W6TMd2hV7fmpG-kh6216oZ7TTsNtYcOU/exec";

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch(scriptURL, { method: "POST", body: formData })
    .then(response => {
      document.getElementById("response-message").textContent = "✅ Thank you! Your message was sent.";
      form.reset();
    })
    .catch(error => {
      document.getElementById("response-message").textContent = "❌ There was an error sending your message.";
      console.error("Error!", error.message);
    });
});
