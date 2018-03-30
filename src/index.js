import './polyfills.js';

function component() {
  var el = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Clicked to Load print.js';
  el.innerHTML = _.join(['Hello', 'Lazy'], ' ');
  el.appendChild(br);
  el.appendChild(button);

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then( module => {
    var print = module.default;
    print();
  });

  return el;
}

document.body.appendChild(component());
