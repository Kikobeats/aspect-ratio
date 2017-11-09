#!/usr/bin/env node
'use strict'
const ratio = require('..')
const cli = require('meow')({
  pkg: '../package.json',
  help: [
    'Usage',
    '  $ aspect-ratio <width><height>[options]',
    '\n  options:',
    "\t -s\t     specified a separator. (by default is ':').",
    '\t --version   output the current version.',
    '\n  examples:',
    '\t aspect-ratio 1920 1080',
    '\t aspect-ratio 800 600 -s /'
  ].join('\n')
})

const width = cli.input[0]
const height = cli.input[1]
const separator = cli.flags.s || ':'

if (!height) cli.showHelp()
else console.log(ratio(width, height, separator))
