nano = require('nano')('http://admin:panthers63@bnode.iriscouch.com')
ghm = require("github-flavored-markdown")
db = nano.use 'bnode'

module.exports = 
  '/':
    get: ->
      # refactor to model
      db.list include_docs: true, descending: true, (e, b, h) =>
        #@res.text = 'foo'
        @res.html @bind('posts/index', { home: '.active', rows: b.rows } )
  '/submit':
    get: ->
      @res.html @bind('posts/submit', { submit: '.active' })
  '/posts':
    post: ->
      # refactor to model
      @req.body.contents = ghm.parse @req.body.contents
      @req.body.tags = if @req.body.tags.length > 0 then @req.body.tags.split(',') else []
      @req.body.submitted = new Date()
      db.insert @req.body, (e, b, h) => 
        @res.html @bind('posts/thanks', { layout })
