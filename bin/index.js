#!/usr/bin/env node
'use strict';
var ratio = require('..');
var cli = require('meow')({
  pkg: "../package.json",
  help: [
      'Usage',
      '  $ aspectRatio [path][options]',
      '\n  options:',
      '\t -s\t     specified a separator. (by default is \':\').',
      '\t --version   output the current version.',
      '\n  examples:',
      '\t aspectRatio 1920 1080',
      '\t aspectRatio 800 600 -s /',
      '\t aspectRatio -i bin -i client -e yml',
  ].join('\n')
});


var width = cli.input[0]
var height = cli.input[1]
var separator = cli.flags.s || ':';

if (!height) return cli.showHelp();

console.log(ratio(width, height, separator));
