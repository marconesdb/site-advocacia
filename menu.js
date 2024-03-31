document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');

  menuToggle.addEventListener('click', () => {
      // Alternar visibilidade do menu
      if (menu.style.display === 'none' || menu.style.display === '') {
          menu.style.display = 'block';
          overlay.style.display = 'block';
          menuToggle.classList.add('open'); // Adiciona a classe 'open' para animar o ícone do menu
          menu.style.backgroundColor = '#3498db'; // Define a cor de fundo quando o menu é exibido
      } else {
          menu.style.display = 'none';
          overlay.style.display = 'none';
          menuToggle.classList.remove('open'); // Remove a classe 'open' para animar o ícone do menu
      }
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
