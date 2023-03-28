# aspect-ratio

![Last version](https://img.shields.io/github/tag/Kikobeats/aspect-ratio.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/aspect-ratio.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/aspect-ratio.)
[![NPM Status](https://img.shields.io/npm/dm/aspect-ratio.svg?style=flat-square)](https://www.npmjs.org/package/aspect-ratio.)

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
     -s          specified a separator. (by default is ':').
     --version   output the current version.

    examples:
     aspect-ratio 1920 1080
     aspect-ratio 800 600 -s /
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
