 // JavaScript para controlar a exibição do menu
 document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
      overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
      menuToggle.classList.toggle('open'); // Adiciona ou remove a classe 'open' para animar o ícone do menu
    });

    overlay.addEventListener('click', () => {
      menu.style.display = 'none';
      overlay.style.display = 'none';
      menuToggle.classList.remove('open'); // Remove a classe 'open' para animar o ícone do menu
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.style.display = 'none';
        overlay.style.display = 'none';
        menuToggle.classList.remove('open'); // Remove a classe 'open' para animar o ícone do menu
      }
    });
  });