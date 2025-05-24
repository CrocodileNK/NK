const hoverBtn = document.getElementById('hoverBtn');

function moveButtonRandomly() {
  const parent = hoverBtn.parentElement;
  const parentWidth = parent.offsetWidth;
  const parentHeight = parent.offsetHeight;

  const btnWidth = hoverBtn.offsetWidth;
  const btnHeight = hoverBtn.offsetHeight;

  const maxX = parentWidth - btnWidth;
  const maxY = parentHeight - btnHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  hoverBtn.style.position = 'absolute';
  hoverBtn.style.left = randomX + 'px';
  hoverBtn.style.top = randomY + 'px';
}

// Dokunma veya tıklama ile her seferinde hareket etsin
hoverBtn.addEventListener('touchend', (e) => {
  e.preventDefault();
  moveButtonRandomly();
});

hoverBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveButtonRandomly();
});

// Masaüstü için hover ile de hareket ettirebilirsin (opsiyonel)
hoverBtn.addEventListener('mouseenter', moveButtonRandomly);

