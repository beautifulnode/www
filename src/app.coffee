flatiron = require 'flatiron'
ecstatic = require 'ecstatic'
creamer = require 'creamer'

app = flatiron.app
# add plugins
app.use flatiron.plugins.http
app.use creamer, 
  views: __dirname + '/views'
  controllers: __dirname + '/controllers'
  layout: require(__dirname + '/views/layout')

# mount middleware
app.http.before = [
  ecstatic __dirname + '/../public', autoIndex: off, cache: on
]

app.router.get '/about', -> 
  @res.html app.bind('about', { about: '.active' })

# start server
app.start process.env.VMC_APP_PORT or 3000, ->
  console.log 'running....'
