'use strict'

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
const isUndefined = value => typeof value === 'undefined'

module.exports = (numerator, denominator, separator = ':') => {
  let temp

  if (numerator === denominator) return `1${separator}1`

  if (numerator < denominator) {
    temp = numerator
    numerator = denominator
    denominator = temp
  }

  const divisor = gcd(numerator, denominator)

  return isUndefined(temp)
    ? `${numerator / divisor}${separator}${denominator / divisor}`
    : `${denominator / divisor}${separator}${numerator / divisor}`
}
