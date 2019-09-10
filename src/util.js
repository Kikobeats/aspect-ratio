const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
const highestFirst = (a, b) => (a < b ? [b, a] : [a, b])
const formatAspectRatio = (h, w, divisor, seperator) =>
  `${h / divisor}${seperator}${w / divisor}`

module.exports = {
  gcd,
  highestFirst,
  formatAspectRatio
}
