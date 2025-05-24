// HAYIR butonu davranışı
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

hoverBtn.addEventListener('touchstart', moveButtonRandomly);
hoverBtn.addEventListener('click', moveButtonRandomly);
hoverBtn.addEventListener('mouseenter', moveButtonRandomly);

// EVET butonuna tıklama
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {
  const headline = document.getElementById('headline-text');
  headline.innerHTML = '<h1>Ben de seni çok seviyorum Hatunum ❤️</h1>';

  const mediaBox = document.getElementById('media-box');
  mediaBox.innerHTML = `
    <video id="video-love" autoplay muted loop playsinline>
      <source src="NK11.mp4" type="video/mp4" />
      Tarayıcınız video etiketini desteklemiyor.
    </video>
  `;

  // Kalp animasyonu
  createHearts();
});

function createHearts() {
  let heartsCount = 20;

  for(let i = 0; i < heartsCount; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');

      // Rastgele X konumu (viewport genişliği içinde)
      heart.style.left = Math.random() * window.innerWidth + 'px';

      // Rastgele büyüklük ve hız
      const size = Math.random() * 20 + 10; // 10px - 30px
      heart.style.width = size + 'px';
      heart.style.height = size + 'px';

      // Animasyon süresi ve gecikmesi
      const duration = Math.random() * 3 + 3; // 3-6 saniye
      heart.style.animationDuration = duration + 's';
      heart.style.animationDelay = Math.random() * 2 + 's';

      document.body.appendChild(heart);

      // 4 saniye sonra kalbi kaldır (animasyon süresi + biraz ekstra)
      setTimeout(() => {
        heart.remove();
      }, (duration + 0.5) * 1000);
    }, i * 150);
  }
}
