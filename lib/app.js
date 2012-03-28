var about, app, controller, creamer, ecstatic, flatiron, posts, view;

flatiron = require('flatiron');

ecstatic = require('ecstatic');

creamer = require('creamer');

view = function(name) {
  return "" + __dirname + "/views/" + name;
};

about = require(view("about"));

controller = function(name) {
  return "" + __dirname + "/controllers/" + name;
};

posts = require(controller("posts"));

app = flatiron.app;

app.use(flatiron.plugins.http);

app.use(creamer, {
  layout: require(__dirname + '/views/layout')
});

app.http.before = [
  ecstatic(__dirname + '/../public', {
    autoIndex: false,
    cache: true
  })
];

app.router.mount(posts);

app.router.get('/about', function() {
  return this.res.html(this.bind(about, {
    about: '.active'
  }));
});

app.start(process.env.VMC_APP_PORT || 3000, function() {
  return console.log('running....');
});
