console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener('DOMContentLoaded', ()=>{
  const mainLogo = document.getElementById('main-logo');

  const originalSrc = './images/main-logo.png';
  const easterEggSrc = './images/header-logo.png';

  mainLogo.addEventListener('click', (e) =>{
    e.preventDefault();
    
    mainLogo.src = mainLogo.src.endsWith('main-logo.png') ? easterEggSrc : originalSrc;
  });
});

window.onload = function () {

  document.getElementById('submit').addEventListener('click', e => {
      e.preventDefault();
      const textValue = document.getElementById('comment-content');

      const template = document.querySelector('li');
      if (!template) return;

      const newComment = template.cloneNode(true);

      newComment.querySelector('.comment-content').textContent = textValue.value;
      textValue.value = '';


      const ulTag = document.querySelector('ul');
      ulTag.appendChild(newComment);

      alert("댓글이 등록되었습니다.");

      newComment.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}