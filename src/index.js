import printMe from './print.js';
import './style.css';
import {cube} from './math.js';

if(process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  let el = document.createElement('pre');

  el.innerHTML = ['Tree Sharking', cube(5)].join('\n');
  return el;

}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
