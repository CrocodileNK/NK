const hoverBtn = document.getElementById('hoverBtn');

function moveButtonRandomly() {
  const parent = hoverBtn.parentElement;
  const parentWidth = parent.clientWidth;
  const parentHeight = parent.clientHeight;

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

// Dokunma başladığında hareket ettir (touchstart daha duyarlı)
hoverBtn.addEventListener('touchstart', (e) => {
  // e.preventDefault(); // Bunu kaldırıyoruz deneyelim
  moveButtonRandomly();
});

// Tıklama için (mouse ve bazı mobil cihazlar)
hoverBtn.addEventListener('click', (e) => {
  // e.preventDefault(); // Gerek yoksa kaldır
  moveButtonRandomly();
});

// Opsiyonel: Masaüstünde hover hareketi
hoverBtn.addEventListener('mouseenter', moveButtonRandomly);
