const { highestFirst, gcd, formatAspectRatio } = require('../utils')
const should = require('should')

describe('highestFirst', () => {
  it('5, 7', () => {
    should(highestFirst(5, 7)).containDeepOrdered([7, 5])
  })
  it('1, 2', () => {
    should(highestFirst(1, 2)).containDeepOrdered([2, 1])
  })

  it('0, 0', () => {
    should(highestFirst(0, 0)).containDeepOrdered([0, 0])
  })

  it('-Infinity,Infinity', () => {
    should(highestFirst(-Infinity, Infinity)).containDeepOrdered([Infinity, -Infinity])
  })
})

describe('gcd', () => {
  it('1, 1', () => {
    should(gcd(1, 1)).equal(1)
  })

  it('5, 10', () => {
    should(gcd(10, 5)).equal(5)
  })

  it('401, 235', () => {
    should(gcd(401, 235)).equal(1)
  })

  it('400, 200', () => {
    should(gcd(400, 200)).equal(200)
  })

  it('150, 250', () => {
    should(gcd(150, 250)).equal(50)
  })
})

describe('formatAspectRatio', () => {
  it('100x100', () => {
    should(formatAspectRatio(100, 100, 100, ':')).equal('1:1')
  })

  it('150x250', () => {
    should(formatAspectRatio(150, 250, 50, ':')).equal('3:5')
  })

  it('250x150', () => {
    should(formatAspectRatio(250, 150, 50, ':')).equal('5:3')
  })

  it('250x150 with / seperator', () => {
    should(formatAspectRatio(250, 150, 50, '/')).equal('5/3')
  })

  it('0 divisor', () => {
    should(formatAspectRatio(250, 150, 0, '/')).equal('Infinity/Infinity')
  })
})
