var app, creamer, ecstatic, flatiron;

flatiron = require('flatiron');

ecstatic = require('ecstatic');

creamer = require('creamer');

app = flatiron.app;

app.use(flatiron.plugins.http);

app.use(creamer, {
  views: __dirname + '/views',
  controllers: __dirname + '/controllers',
  layout: require(__dirname + '/views/layout')
});

app.http.before = [
  ecstatic(__dirname + '/../public', {
    autoIndex: false,
    cache: true
  })
];

app.router.get('/about', function() {
  return this.res.html(app.bind('about', {
    about: '.active'
  }));
});

app.start(process.env.VMC_APP_PORT || 3000, function() {
  return console.log('running....');
});
