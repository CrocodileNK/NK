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
      <source src="NK11.mp4" type="video/mp4">

