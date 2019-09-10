'use strict'

const aspectRatio = require('..')
const should = require('should')

describe('aspect ratio', () => {
  it('1024x768', () => {
    should(aspectRatio(1024, 768)).equal('4:3')
  })

  it('1920x1080', () => {
    should(aspectRatio(1920, 1080)).equal('16:9')
  })

  it('1280x1024', () => {
    should(aspectRatio(1280, 1024)).equal('5:4')
  })

  it('using other separator', () => {
    should(aspectRatio(1920, 1080, '/')).equal('16/9')
  })

  it('invalid width', () => {
    let error = ''
    try {
      should(aspectRatio(1920, null, '/')).equal('16/9')
    } catch (e) {
      error = e.message
    }
    should(error).equal('Invalid width: null')
  })

  it('invalid height', () => {
    let error = ''
    try {
      should(aspectRatio(null, 1080, '/')).equal('16/9')
    } catch (e) {
      error = e.message
    }
    should(error).equal('Invalid height: null')
  })

  it('invalid width & height', () => {
    let error = ''
    try {
      should(aspectRatio(null, null)).equal('16/9')
    } catch (e) {
      error = e.message
    }
    should(error).equal('Invalid height: null')
  })
})
