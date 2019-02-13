'use strict'
const { gcd, highestFirst, formatAspectRatio } = require('./utils')

module.exports = (height, width, seperator = ':') => {
  const [h, w] = highestFirst(height, width)
  const divisor = gcd(h, w)
  return formatAspectRatio(h, w, divisor, seperator)
}
