flatiron = require 'flatiron'
ecstatic = require 'ecstatic'
creamer = require 'creamer'

#views
view = (name) -> "#{__dirname}/views/#{name}"
about = require view("about")

# controllers
controller = (name) -> "#{__dirname}/controllers/#{name}"
posts = require controller("posts")

app = flatiron.app
# add plugins
app.use flatiron.plugins.http
app.use creamer, layout: require(__dirname + '/views/layout')

# attach creamer bind to router this.bind
#app.router.attach -> @bind = app.bind

# mount middleware
app.http.before = [
  ecstatic __dirname + '/../public', autoIndex: off, cache: on
]

# mount controllers
app.router.mount posts

app.router.get '/about', -> 
  @res.html @bind(about, { about: '.active' })

# start server
app.start process.env.VMC_APP_PORT or 3000, ->
  console.log 'running....'
