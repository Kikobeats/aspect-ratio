'use strict'

const { gcd, highestFirst, formatAspectRatio } = require('./util')

module.exports = (width, height, seperator = ':') => {
  if (typeof height !== 'number') {
    throw new Error(
      `Invalid height: expected a \`number\`, received \`${height}\``
    )
  }

  if (typeof width !== 'number') {
    throw new Error(
      `Invalid width: expected a \`number\`, received \`${width}\``
    )
  }

  const [h, w] = highestFirst(height, width)
  const divisor = gcd(h, w)
  return formatAspectRatio(width, height, divisor, seperator)
}
