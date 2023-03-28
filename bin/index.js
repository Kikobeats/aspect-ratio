#!/usr/bin/env node
'use strict'

const mri = require('mri')

const ratio = require('..')

const help = [
  'Usage',
  '  $ aspect-ratio <width> <height> [options]',
  '\n  options:',
  "\t -s\t     specified a separator. (by default is ':').",
  '\t --version   output the current version.',
  '\n  examples:',
  '\t aspect-ratio 1920 1080',
  '\t aspect-ratio 800 600 -s /'
].join('\n')

const argv = mri(process.argv.slice(2), {
  alias: {
    separator: 's'
  },
  default: {
    separator: ':'
  }
})

const width = Number(argv._[0])
const height = Number(argv._[1])

if (Number.isNaN(width) || Number.isNaN(height)) {
  console.log(help)
  process.exit(1)
}

console.log(ratio(width, height, argv.separator))
