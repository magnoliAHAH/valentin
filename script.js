const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const message = document.getElementById('message');
const correctCode = "405";

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

const secondScreen = document.getElementById('second-screen');

yesBtn.addEventListener('click', () => {
  mainContent.style.display = 'none';
  secondScreen.style.display = 'flex';
});
const secondYes = document.getElementById('second-yes');
const secondNo = document.getElementById('second-no');

const alertOverlay = document.getElementById('alert-overlay');
const closeAlert = document.getElementById('close-alert');

// YES → alert с картинкой
secondYes.addEventListener('click', () => {
  alertOverlay.style.display = 'flex';
});

// закрыть alert
closeAlert.addEventListener('click', () => {
  alertOverlay.style.display = 'none';
});

// NO → убегает
secondNo.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - secondNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - secondNo.offsetHeight);

  secondNo.style.position = 'absolute';
  secondNo.style.left = x + 'px';
  secondNo.style.top = y + 'px';
});

const text = "Поздравляю тебя с этим прекрасным днём! Ты для меня очень важна, и я хочу, чтобы ты знала, что я всегда буду рядом, поддерживать тебя и делать всё, чтобы ты была счастлива. Спасибо тебе за то, что ты есть в моей жизни. Я очень сильно люблю тебя, моё солнышко!";
const speed = 70;
const delayTyping = 1500;
let i = 0;
let isTyping = false;


function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById("yes").addEventListener("click", () => {
  if (isTyping) return; // чтобы не запускалось повторно
  isTyping = true;

  i = 0;
  document.getElementById("typing").textContent = "";
  setTimeout(() => {
    typeWriter();
  }, delayTyping);
});

document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById('show-barcode');
  const spoiler = document.getElementById('spoiler');
  const barcode = document.getElementById('barcode');

  showBtn.addEventListener('click', () => {
    spoiler.classList.add('hidden');
    barcode.classList.add('visible');
  });
});

