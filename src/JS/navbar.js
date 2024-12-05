const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');



menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  
  // Alterna o ícone
  menuToggle.textContent = sidebar.classList.contains('active') ? '✖' : '☰';
});
