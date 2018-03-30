### Lazy Loading

Lazy, or 'on demand', loading is a great way to optimize your site or
application. This pratice essentially involves splitting your code at
logical breakpoints it once the user done something that requires, or
will require, a new block of code. This speeds up the initial load of
the application and lightens its overall weight as some block may never
even be loaded.

From **Code Split** we split the code as a seperate chunk,
*lodash.bundle.js*, to be generated and technically 'lazy-loads' it as
soon as the script is run. The trouble is that no user interaction is
required to load the bundle meaning that every time the page is loaded,
the request will fire. This doesn't help us too much and will impact
performance negatively.

What if: after user interaction, and then loading some chunks?

```javascript
button.onclick = e => import(/* webpackChunkName: "print" */
'.print').then(module => {
  var print = module.default;
  print();
});
```
We can discover the lazy process from dev tool network tab. Once load
the page, the browser wont load the `print.js` file. but after clicking
the botton, the file loaded as excepted.

>Note that when using `import()` on ES6 modules you must reference the
>`.default` property as it's actual `module` object that will be returned
>when promise resolved.

Above, it's common to lazy load chunks, and many frameworks and
libraries have their own recommonendations on how this should be
accomplished within their methodologies.

- React: [Code Splitting and Lazy loading](https://reacttraining.com/react-router/web/guides/code-splitting)
- Vue: [Lazy Load in Vue using webpack's code splitting](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)


