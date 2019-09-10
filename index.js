'use strict'
const { gcd, highestFirst, formatAspectRatio } = require('./utils')

module.exports = (height, width, seperator = ':') => {
  if (typeof height !== 'number') {
    throw new Error(`Invalid height: ${height}`)
  }

  if (typeof width !== 'number') {
    throw new Error(`Invalid width: ${width}`)
  }
  
  const [h, w] = highestFirst(height, width)
  const divisor = gcd(h, w)
  return formatAspectRatio(h, w, divisor, seperator)
}
