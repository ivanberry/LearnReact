import printMe from './print.js';

function component() {
  let el = document.createElement('div');
  let button = document.createElement('button');

  el.innerHTML = ['Hello webpack', '5 cubed reuslt is' ].join('\n');

  button.innerText = 'Ahah';
  button.onclick = printMe;
  el.appendChild(button);
  return el;
}

document.body.appendChild(component());
