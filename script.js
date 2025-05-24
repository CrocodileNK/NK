const hoverBtn = document.getElementById('hoverBtn');

function moveButtonRandomly() {
  const parent = hoverBtn.parentElement;
  const parentWidth = parent.offsetWidth;
  const parentHeight = parent.offsetHeight;

  const btnWidth = hoverBtn.offsetWidth;
  const btnHeight = hoverBtn.offsetHeight;

  // Yeni pozisyonlar, ebeveyn sınırları içinde
  const maxX = parentWidth - btnWidth;
  const maxY = parentHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  hoverBtn.style.position = 'absolute';
  hoverBtn.style.left = randomX + 'px';
  hoverBtn.style.top = randomY + 'px';
}

// Mobil dokunma için hareket ettir
hoverBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Dokunma olayının gereksiz tetiklenmesini engelle
  moveButtonRandomly();
});

// Masaüstü için fare üstüne gelince hareket ettir
hoverBtn.addEventListener('mouseenter', moveButtonRandomly);
