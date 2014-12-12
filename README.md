# aspect-ratio

[![Build Status](http://img.shields.io/travis/Kikobeats/aspect-ratio/master.svg?style=flat)](https://travis-ci.org/Kikobeats/aspect-ratio)
[![Dependency status](http://img.shields.io/david/Kikobeats/aspect-ratio.svg?style=flat)](https://david-dm.org/Kikobeats/aspect-ratio)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/aspect-ratio.svg?style=flat)](https://david-dm.org/Kikobeats/aspect-ratio#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/aspect-ratio.svg?style=flat)](https://www.npmjs.org/package/aspect-ratio)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Get the aspect ratio of a device.

## Install

```bash
npm install aspect-ratio --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install aspect-ratio --save
```

and later link in your HTML:

```html
<script src="bower_components/aspect-ratio/dist/aspect-ratio.js"></script>
```

## Usage

```js
var ratio = require('aspect-ratio');

console.log(ratio(1920,1080))
// => 16:9
console.log(ratio(1920,1080, "/"));
// => 16/9
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
