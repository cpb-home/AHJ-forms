window.addEventListener("DOMContentLoaded", function() {
  createAllEls();
  addListeners();
  
  
  //console.log(createSomeText(105));
}, false);

function createAllEls() {
  const root = document.querySelector('#root');

  const someBox = document.createElement('div');
  someBox.classList.add('container');

  for (let i = 0; i < 25; i++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('button');
    button.textContent = 'Показать';
    button.dataset.id = i;
    someBox.append(button);
  }

  root.append(someBox);
}

function createSomeText(wordsCount) {
  const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio error at consequuntur laudantium esse cumque sapiente ab consectetur voluptas corporis placeat ex aspernatur eaque perspiciatis sit autem dolor Amet aspernatur incidunt iusto iste deserunt placeat sint optio dignissimos sunt laboriosam eius eaque magni tenetur pariatur ratione odit nulla hic perspiciatis Enim nihil pariatur ea facilis optio minus magni ipsa ex amet cupiditate obcaecati quos eligendi cumque maiores alias ut tenetur Culpa cum ipsam repellendus maiores itaque dolores quo debitis perspiciatis aspernatur commodi Maiores iste quidem obcaecati facere deserunt temporibus corrupti tenetur optio distinctio officia nihil debitis Doloribus nostrum dolores corporis`;

  const wordsArray = words.split(' ');

  let newText = '';
  for (let i = 0; i < wordsCount; i++) {
    const word = Math.floor(Math.random()*(wordsArray.length+1));
    newText += wordsArray[word] + ' ';
  }

  return newText;
}

function addListeners() {
  const elsForListener = document.querySelectorAll('.button');

  if (elsForListener.length > 0) {
    elsForListener.forEach(e => {
      e.addEventListener('click', el => {
        const tips = document.querySelectorAll('.tip');
        if (tips.length > 0) {
          tips.forEach(elem => elem.remove());
        }
        addTip(el);
      })
    })
  }
}

function addTip(el) {
  const tip = document.createElement('div');
  tip.classList.add('tip');

  const tipHeader = document.createElement('h5');
  tipHeader.textContent = createSomeText(4);

  const tipBody = document.createElement('p');
  tipBody.textContent = createSomeText(10);

  tip.append(tipHeader);
  tip.append(tipBody);

  tip.style.top = el.target.offsetTop - 5 - 180 + 'px';
  tip.style.left = el.target.offsetLeft + 100/2 - 200/2 + 'px';

  document.body.append(tip);

  setTimeout(() => {
    tip.remove();
  }, 3000)
}