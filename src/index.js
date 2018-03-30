function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var el = document.createElement('div');
    el.innerHTML = _.default.join(['Hello', 'World'], ' ');
    return el;
  }).catch(e => 'A error happens on dynamic load module');
}

getComponent().then(component => {
  document.body.appendChild(component);
}).catch(e => console.log(e));

