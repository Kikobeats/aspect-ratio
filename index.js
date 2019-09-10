'use strict'
const { gcd, highestFirst, formatAspectRatio } = require('./utils')

module.exports = (height, width, seperator = ':') => {
  if (isNaN(Number(height))) {
    throw new Error(`Invalid height: ${height}`)
  }

  if (isNaN(Number(width))) {
    throw new Error(`Invalid width: ${width}`)
  }
  const [h, w] = highestFirst(height, width)
  const divisor = gcd(h, w)
  return formatAspectRatio(h, w, divisor, seperator)
}
