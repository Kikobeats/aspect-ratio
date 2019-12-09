'use strict'

const aspectRatio = require('..')
const should = require('should')

describe('aspect ratio', () => {
  it('1024x768', () => should(aspectRatio(1024, 768)).equal('4:3'))
  it('1920x1080', () => should(aspectRatio(1920, 1080)).equal('16:9'))
  it('1280x1024', () => should(aspectRatio(1280, 1024)).equal('5:4'))
  it('specifying output separator', () =>
    should(aspectRatio(1920, 1080, '/')).equal('16/9'))

  describe('invalid input', () => {
    ;[
      [1920, null, '/'],
      [null, 1080, '/'],
      [null, null],
      [undefined, undefined],
      ['1920', '1080']
    ].forEach(input => {
      it(JSON.stringify(input), () => {
        try {
          aspectRatio(...input)
        } catch ({ message }) {
          should(message.includes('Invalid')).be.true()
        }
      })
    })
  })
})
