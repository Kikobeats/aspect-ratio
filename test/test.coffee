## -- Dependencies -------------------------------------------------------------

ratio  = require('..')
should = require 'should'

## -- Tests --------------------------------------------------------------------

describe 'aspect ratio ::', ->

  it '1024x768', ->
    ratio(1024,768).should.eql '4:3'
  it '1920x1080', ->
    ratio(1920,1080).should.eql '16:9'
  it '1280x1024', ->
    ratio(1280,1024).should.eql '5:4'
  it 'using other separator', ->
    ratio(1920,1080, '/').should.eql '16/9'
