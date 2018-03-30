## Build Performance

### Stay up to Date

Use the latest webpack version always.

### Loaders

Apply loaders to the minimal number of modules necessary. Instead of:

```javascript
{
	test: /\.js$/,
	loader: 'babel-loader'
}
```
Use `include` field to only apply the loader modules that actually need to be transformed by it:

```javascript
{
	test: /\.js$/,
	include: path.resolve(__dirname, 'src'),
	loader: 'babel-loader'
}
```

### Bootstrap

Each additional loader/plugin has a bootup time. Try to use as few different tools as possible.

### Resoving

The following steps can increase the speed of resolving:

- Minimize the number of items in `resolve.modules`, `resolve.extensions`, `resolve.manifest`, `resolve.descriptionFiles` as they increase the number of filesystem calls
- Set `resolve.symlinks: false` if you dont use symlinks.
- Set `resolve.cacheWithContext: false` if you use cunstom resolving plugins, that are not context spefic.

### Dlls

Use the `DllPlugin` to move code that is changed less often into a seperate compilation. This will improve the application's compilation speed, although it does increase complexity of the build process.

### Smaller = Faster

Decrease the total size of the compilation to increase to increase build performance. Try to keep chunks small.

- Use fewer/smaller libraries.
- use the `CommonChunksPlugin` in Muti-Page Application
- Use the `CommonChunksPlugin` in `async` mode in MPA
- Remove unused code
- Only compile the part of the code you are currently developing on.

### Worker Pool

The `thread-loader` can be used to offload expensive loaders to a worker pool.

### Persistent cache

Enable persistent caching with the `cache-loader`. Clear cache directly 'postinstall' in 'package.json'.

### [More](https://webpack.js.org/guides/build-performance/)


