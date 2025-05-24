// HAYIR butonunu kaçırma
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

// EVET butonuna tıklanınca
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {
  const headline = document.getElementById('headline-text');
  headline.innerHTML = '<h1>Ben de seni çok seviyorum Hatunum ❤️</h1>';

  const mediaBox = document.getElementById('media-box');
  mediaBox.innerHTML = '<img src="mutlu.jpeg" alt="Mutlu Görsel" />';

  document.body.style.backgroundColor = '#ffe4e1';
  headline.querySelector('h1').style.color = '#000';

  startHeartRainInBox();
});

// Kalp animasyonu sadece media kutusunda
function createHeartInBox() {
  const mediaBox = document.getElementById('media-box');
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

  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
