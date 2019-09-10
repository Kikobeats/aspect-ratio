# aspect-ratio

[![Build Status](http://img.shields.io/travis/Kikobeats/aspect-ratio/master.svg?style=flat)](https://travis-ci.org/Kikobeats/aspect-ratio)
[![Dependency status](http://img.shields.io/david/Kikobeats/aspect-ratio.svg?style=flat)](https://david-dm.org/Kikobeats/aspect-ratio)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/aspect-ratio.svg?style=flat)](https://david-dm.org/Kikobeats/aspect-ratio#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/aspect-ratio.svg?style=flat)](https://www.npmjs.org/package/aspect-ratio)

> Get the aspect ratio of a device.

## Install

```bash
npm install aspect-ratio --save
```

## Usage

### with Node.js

```js
const ratio = require('aspect-ratio')
console.log(ratio(1920, 1080)) // => 16:9
console.log(ratio(1920, 1080, '/')) // => 16/9
```

### with CLI

```bash
$ aspect-ratio

  Get the screen aspect ratio of a device

  Usage
    $ aspect-ratio <width><height>[options]

    options:
  	 -s	     specified a separator. (by default is ':').
  	 --version   output the current version.

    examples:
  	 aspect-ratio 1920 1080
  	 aspect-ratio 800 600 -s /
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
