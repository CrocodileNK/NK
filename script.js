const changeBtn = document.getElementById('changeBtn');
const hoverBtn = document.getElementById('hoverBtn');
const mediaBox = document.getElementById('media-box');
const headlineText = document.getElementById('headline-text');
const body = document.body;

let isFirstPage = true;

changeBtn.addEventListener('click', () => {
  if (isFirstPage) {
    // İlk sayfadan ikinci sayfaya geçiş
    mediaBox.innerHTML = `
      <video width="640" height="360" controls autoplay>
        <source src="NK11.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    `;
    body.style.backgroundColor = '#888'; // gri arka plan
    headlineText.querySelector('h1').style.color = '#222'; // koyu yazı
    headlineText.querySelector('h1').textContent = 'Biliyordum karıcım teşekkür ederim MMUUUUAHHHHH (En büyük BJK (şaka))';
    isFirstPage = false;
  } else {
    // İkinci sayfadan ilk sayfaya dönüş
    mediaBox.innerHTML = `
      <img src="NK05.jpeg" alt="Başlangıç Görseli" width="640" height="360" />
    `;
    body.style.backgroundColor = '#000'; // siyah arka plan
    headlineText.querySelector('h1').style.color = '#ccc'; // gri yazı
    headlineText.querySelector('h1').textContent = "Beni Affadermisin Hatunum?";
    isFirstPage = true;
  }
});

// İmleç hover olayında buton hareketi
hoverBtn.addEventListener('mouseenter', () => {
  moveButtonRandomly();
});

function moveButtonRandomly() {
  const container = document.querySelector('.button-group');
  const btnWidth = hoverBtn.offsetWidth;
  const btnHeight = hoverBtn.offsetHeight;

  const containerRect = container.getBoundingClientRect();

  // Yeni pozisyon hesapla (container sınırları içinde)
  const maxX = containerRect.width - btnWidth;
  const maxY = containerRect.height - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  hoverBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Tıklamayı engelle (buton tıklanmasın)
hoverBtn.addEventListener('click', (e) => {
  e.preventDefault();
});
