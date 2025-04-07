document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the form from submitting the usual way

  alert("Thank you for your message! I'll get back to you soon.");
});
