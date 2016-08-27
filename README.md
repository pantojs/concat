# panto-transformer-concat
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Concat transformer for panto.

```js
panto.loadTransformer('concat');

panto.$('**/*.js').concat({
    bundle: 'bundle.js'
});
```

## options
 - bundle: String|Function
 - sortBy: Function

[npm-url]: https://npmjs.org/package/panto-transformer-concat
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-concat.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-concat.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-concat
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-concat.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-concat
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-concat.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-concat#type=dev
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-concat/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-concat/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-concat?branch=master
