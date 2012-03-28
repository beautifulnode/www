nano = require('nano')('http://admin:panthers63@bnode.iriscouch.com')
ghm = require("github-flavored-markdown")
db = nano.use 'bnode'

view = (name) -> "#{__dirname}/../views/#{name}"
#layout = require view("layout")
index = require view("posts/index")
submit = require view("posts/submit")
thanks = require view("posts/thanks")

module.exports = 
  '/':
    get: ->
      # refactor to model
      db.list include_docs: true, descending: true, (e, b, h) =>
        @res.html @bind(index, { home: '.active', rows: b.rows } )
  '/submit':
    get: ->
      @res.html @bind(submit, { submit: '.active' })
  '/posts':
    post: ->
      # refactor to model
      @req.body.contents = ghm.parse @req.body.contents
      @req.body.tags = if @req.body.tags.length > 0 then @req.body.tags.split(',') else []
      @req.body.submitted = new Date()
      db.insert @req.body, (e, b, h) => 
        @res.html @bind(thanks, { layout })
