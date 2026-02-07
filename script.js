const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const message = document.getElementById('message');

const phrases = [
  "Ахуела?",
  "Может подумаешь?",
  "Не попала",
  "Анлак",
  "Ты уверена?",
  "Вот прям точно?",
  "Не-не так не пойдёт",
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

// Логика кнопки "Да"
yesBtn.addEventListener('click', () => {
  // создаём гифку
  const gif = document.createElement('img');
  gif.src = 'assets/fly_hearts.gif'; // путь к гифке
  gif.className = 'fly-gif';

  // берём координаты кнопки "Да"
  const rect = yesBtn.getBoundingClientRect();

  gif.style.left = rect.left + rect.width / 2 + 'px';
  gif.style.top = rect.top + rect.height / 2 + 'px';

  document.body.appendChild(gif);


  // удаляем гифку после анимации
  setTimeout(() => {
    gif.remove();
  }, 1000);
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