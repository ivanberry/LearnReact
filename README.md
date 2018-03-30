### Shimming

The webpack compiler can understand modules written as ES2015 modules,
CommonJS or AMD. However, some third party libraries may expect global
dependencies(eg. jQuery). The libraries might also create globals which
need to be exported. These 'broken modules' are one instance where
*shimming* comes into play.

Another instance where *shimming* can be useful is when you want to
polyfill browser functionality to support more users. In this case, you
may only want to deliver those polyfills to the browsers that need
patching.

Remember that `lodash` package we were using? For demostration
purposes,let's say we wanted to instead provide this as a global
throughout our application. To do this, we can use the `ProvidePlugin`.

The `ProvidePlugin` makes a package available as a variable in every
module compiled through webpack. If webpack sees that variable used, it
will include the given package in the final module.

#### Granular Shimming

Some legacy modules rely on `this` being the `window` object. Let's
update our `index.js`.

```javascript
...
this.alert('Hmm, this gonna be window');
...
```
This becomes a problem when the module is executed in a CommonJs context
when `this` is equal to `module.exports`. In this case you can override
`this` using the `imports-loader`.

But in webpack v4, it is handle truly by webpack. and below version,
config update as below:

```javascript
...
module: {
  rules: [
    {
      test: require.resolve('index.js'),
      use: 'imports-loader?this=>window
    }
  ]
}
...
```
### Global Exports

Let's say a library creates a global that it expects consumers to use.

```javascript
...
module: {
  rules: [
    {
      test: require.resolve('global.js'),
      use: 'exports-loader?file,parse=helpers.parse'
    }
  ]
}
...
```
