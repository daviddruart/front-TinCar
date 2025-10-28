onsole.log("TinCar listo 🚗");

// Detectar cuando se abre el modal de inicio de sesión
const loginModal = document.getElementById('loginModal');

if (loginModal) {
  loginModal.addEventListener('shown.bs.modal', function () {
    const emailInput = loginModal.querySelector('input[type="email"]');
    if (emailInput) {
      emailInput.focus();
    }
  });
}
