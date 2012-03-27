flatiron = require 'flatiron'
ecstatic = require 'ecstatic'
creamer = require 'creamer'
layout = require __dirname + '/views/layout'
helpers = require 'coffeecup-helpers'
nano = require('nano')('http://admin:panthers63@bnode.iriscouch.com')
ghm = require("github-flavored-markdown")
db = nano.use 'bnode'

view = (name) -> "#{__dirname}/views/#{name}"
index = require view("index")
submit = require view("submit")
about = require view("about")
thanks = require view("thanks")

app = flatiron.app
app.use flatiron.plugins.http

helpers.layout = layout
app.use creamer, helpers

app.http.before = [
  ecstatic __dirname + '/../public', autoIndex: off, cache: on
]

app.router.get '/', -> 
  db.list include_docs: true, descending: true, (e, b, h) =>
    app.render(@res, index, home: '.active', rows: b.rows )
app.router.get '/submit', -> app.render(@res, submit, submit: '.active')
app.router.post '/posts', ->
  # validate body
  @req.body.contents = ghm.parse @req.body.contents
  @req.body.tags = if @req.body.tags.length > 0 then @req.body.tags.split(',') else []
  @req.body.submitted = new Date()
  db.insert @req.body, (e, b, h) => app.render(@res, thanks)
  
app.router.get '/about', -> app.render(@res, about, about: '.active')


app.start process.env.VMC_APP_PORT or 3000
