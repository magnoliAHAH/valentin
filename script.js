const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const message = document.getElementById('message');
const correctCode = "000";

const digits = document.querySelectorAll('.digit');
const unlockBtn = document.getElementById('unlock');
const lockScreen = document.getElementById('lock-screen');
const mainContent = document.getElementById('main-content');
const lockMsg = document.getElementById('lock-msg');

const PARTICLE_SRC = 'assets/bg_heart.png';
const SPAWN_INTERVAL = 300; // мс
const MAX_HEIGHT_PERCENT = 0.75; // до 75% высоты экрана

const phrases = [
  "Ахуела?",
  "Может подумаешь?",
  "Не попала",
  "Анлак",
  "Ты уверена?",
  "Вот прям точно?",
  "Не правильно",
  "Ебанутая?",
  "Ёбнулась?",
  "Хуй соси",
  "Ты чо?",
  "Нееет",
  "Не надо",
  "Не нажимай блин",
  "Не-а",
  "Не то",
  "Хватит",
  "Не придуривайся",
  "С ума сошла?",
  "А я тя лю",
  "Хуйню нажала",
];


// Логика кнопки "Нет"
noBtn.addEventListener('click', () => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  noBtn.textContent = phrase;

  const bodyWidth = window.innerWidth - noBtn.offsetWidth;
  const bodyHeight = window.innerHeight - noBtn.offsetHeight;


  const x = Math.floor(Math.random() * bodyWidth);
  const y = Math.floor(Math.random() * bodyHeight);

  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

digits.forEach(digit => {
  const span = digit.querySelector('span');
  digit.querySelector('.up').onclick = () => {
    span.textContent = (parseInt(span.textContent) + 1) % 10;
  };
  digit.querySelector('.down').onclick = () => {
    span.textContent = (parseInt(span.textContent) + 9) % 10;
  };
});

// проверка кода
unlockBtn.addEventListener('click', () => {
  let entered = '';
  digits.forEach(d => {
    entered += d.querySelector('span').textContent;
  });

  if (entered === correctCode) {
    lockScreen.style.display = 'none';
    mainContent.style.display = 'block';
  } else {
    lockMsg.textContent = 'Неверный код 😈';
  }
});

function spawnParticle() {
  const img = document.createElement('img');
  img.src = PARTICLE_SRC;
  img.className = 'particle';

  const size = 12 + Math.random() * 20;
  const x = Math.random() * window.innerWidth;
  const duration = 3000 + Math.random() * 2000;

  const maxHeight = -window.innerHeight * MAX_HEIGHT_PERCENT;

  img.style.left = `${x}px`;
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;
  img.style.animationDuration = `${duration}ms`;

  img.style.setProperty('--rot', `${Math.random() * 360}deg`);
  img.style.setProperty('--height', `${maxHeight}px`);

  document.body.appendChild(img);

  setTimeout(() => img.remove(), duration);
}

// запуск
setInterval(spawnParticle, SPAWN_INTERVAL);