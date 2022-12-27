import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');


let loadInterval;

const loader = (el) => {
  el.textContent = '';

  loadInterval = setInterval(() => {
    el.textContent += '.';
    if (el.textContent === '....') {
      el.textContent = '.';
    }
  }, 300)

  function typeText(el, text) {
    let index = 0;
    let interval = setInterval(() => {
      if (index < text.length) {
        el.innerHtml += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    },20)
  }
}

const generateUniqueID = () => {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

const chatStripe = (isAI, value, uniqueID) => {
  return (
    `
    <div class="wrapper ${isAi && 'ai'}">
        <div class=""chat>
        <div className="profile">
          <img 
            src="${isAi ? bot : user}"
            alt="$${isAi?'bot':'user'}"
          />
          </div>
        </div>
    </div>
      `
    )

}