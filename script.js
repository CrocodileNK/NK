const hoverBtn = document.getElementById('hoverBtn');
const changeBtn = document.getElementById('changeBtn');
const mediaBox = document.getElementById('media-box');
const headline = document.getElementById('headline-text');

// HAYIR butonu için hareket fonksiyonu
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

// HAYIR butonu eventleri (desktop ve mobil için)
hoverBtn.addEventListener('mouseenter', moveButtonRandomly); // desktop hover
hoverBtn.addEventListener('click', moveButtonRandomly);      // desktop click
hoverBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();  // dokunma davranışını engelle (scroll vs)
  moveButtonRandomly();
}, { passive: false });

// EVET butonuna tıklanınca video ve mesaj göster
function showLoveVideo() {
  headline.innerHTML = '<h1>Ben de seni çok seviyorum Hatunum ❤️</h1>';

  mediaBox.innerHTML = `
    <video id="video-love" autoplay muted loop playsinline>
      <source src="NK11.mp4" type="video/mp4" />
      Tarayıcınız video etiketini desteklemiyor.
    </video>
  `;

  // Arka plan ve başlık rengini değiştir (opsiyonel)
  document.body.style.backgroundColor = '#ffe4e1';
  headline.querySelector('h1').style.color = '#000';

  startHeartRainInBox();
}

changeBtn.addEventListener('click', showLoveVideo);
changeBtn.addEventListener('touchend', (e) => {
  e.preventDefault();
  showLoveVideo();
}, { passive: false });

// Kalp animasyonu sadece video kutusunda
function createHeartInBox() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const boxWidth = mediaBox.clientWidth;
  heart.style.left = Math.random() * boxWidth + 'px';

  const size = Math.random() * 20 + 10;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  mediaBox.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function startHeartRainInBox() {
  const interval = setInterval(createHeartInBox, 150);
  setTimeout(() => clearInterval(interval), 5000);
}
