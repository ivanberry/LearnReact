### Caching

So we're using webpack to bundle our modular application which yields a
deployable `/dist` directory. Once the contents of `/dist` have been
deployed to a server, clients will hit that server a grab the site and
its assets. The last step can be time consuming, which is why browsers
use a technique called Caching. This allow sites to load faster with
less unncecessary network tranffice, however it can also cause headaches
when you need new code to picked up.

#### Output Filenames

A simple way to ensure the browser picks up changed files is by using
`output.filename` substitutions. however it's even better to use the
`[chunkhash]` substitution which includes a chunk-specific hash in the
filename.

```javascript
...
output: {
  filename: '[name].[chunkhash].js',
  path: path.resolve(__dirname, 'dist')
}
...
```
In webpack below 4.0, if we run another build without making any
changes, we'd expect that filename to stay the same. However, we will
find that it's not the case. but in 4.0, this has been fixed. So we just
step out.
