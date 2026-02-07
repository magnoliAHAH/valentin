const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const message = document.getElementById('message');

const phrases = [
  "Серьёзно? 😏",
  "Попробуй снова 😅",
  "Не сдавайся 💪",
  "Ха-ха, почти! 😂",
  "Ты не устоишь 😘"
];

// Логика кнопки "Да"
yesBtn.addEventListener('click', () => {
  message.textContent = "💖 Ура! Ты выбрал Да! 💖";
});

// Логика кнопки "Нет"
noBtn.addEventListener('click', () => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  noBtn.textContent = phrase;

  const bodyWidth = document.body.clientWidth - noBtn.offsetWidth;
  const bodyHeight = document.body.clientHeight - noBtn.offsetHeight;

  const x = Math.floor(Math.random() * bodyWidth);
  const y = Math.floor(Math.random() * bodyHeight);

  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});