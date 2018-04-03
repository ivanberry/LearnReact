##客户端路由

### 基于hash及hashchange事件

```javascript

function Router() {
    this.routes = {};
  this.currentUrl = '';
}

Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function () {};
}

Router.prototype.refresh = function() {
    this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl]();
}

Router.prototype.init = function () {
    window.addEventListener('loader', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
}

var router = new Router();
router.init();

function changeTitle(title) {
  document.getElementById('title').innerText = title;
}

router.route('/', function() {
    changeTitle('Index');
});

router.route('/about', function() {
    changeTitle('About');
});

router.route('/contact', function() {
    changeBgColor('Contact');
})

```

(简单基于hash的路由demo)[https://jsfiddle.net/ivan_web/q25tmy5u/19/]

#### HTML5 history API

#### 参考文章
[浅谈前端路由](https://github.com/kaola-fed/blog/issues/137)
[前端路由实现与 react-router 源码分析](http://web.jobbole.com/86407/)

