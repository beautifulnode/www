app = require '../lib/app'
request = require 'request'
Browser = require('zombie')

describe 'index', ->
  describe 'GET /', ->
    it 'should return 200', (done) ->
      request 'http://localhost:3000', (e, r, b) ->
       b.match(/class="post"/).should.be.ok
       done()