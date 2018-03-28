import printMe from './print.js';
import './style.css';
import {cube} from './math.js';

function component() {
  let el = document.createElement('pre');
  //let button = document.createElement('button');

  //el.innerHTML = ['Hello webpack', '5 cubed reuslt is' ].join('\n');
  el.innerHTML = ['Tree Sharking', cube(5)].join('\n');
  //button.innerText = 'Click!';
  //button.onclick = printMe;
  //el.appendChild(button);
  return el;

}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
