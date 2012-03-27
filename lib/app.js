var about, app, creamer, db, ecstatic, flatiron, ghm, helpers, index, layout, nano, submit, thanks, view;

flatiron = require('flatiron');

ecstatic = require('ecstatic');

creamer = require('creamer');

layout = require(__dirname + '/views/layout');

helpers = require('coffeecup-helpers');

nano = require('nano')('http://admin:panthers63@bnode.iriscouch.com');

ghm = require("github-flavored-markdown");

db = nano.use('bnode');

view = function(name) {
  return "" + __dirname + "/views/" + name;
};

index = require(view("index"));

submit = require(view("submit"));

about = require(view("about"));

thanks = require(view("thanks"));

app = flatiron.app;

app.use(flatiron.plugins.http);

helpers.layout = layout;

app.use(creamer, helpers);

app.http.before = [
  ecstatic(__dirname + '/../public', {
    autoIndex: false,
    cache: true
  })
];

app.router.get('/', function() {
  var _this = this;
  return db.list({
    include_docs: true,
    descending: true
  }, function(e, b, h) {
    return app.render(_this.res, index, {
      home: '.active',
      rows: b.rows
    });
  });
});

app.router.get('/submit', function() {
  return app.render(this.res, submit, {
    submit: '.active'
  });
});

app.router.post('/posts', function() {
  var _this = this;
  this.req.body.contents = ghm.parse(this.req.body.contents);
  this.req.body.tags = this.req.body.tags.length > 0 ? this.req.body.tags.split(',') : [];
  this.req.body.submitted = new Date();
  return db.insert(this.req.body, function(e, b, h) {
    return app.render(_this.res, thanks);
  });
});

app.router.get('/about', function() {
  return app.render(this.res, about, {
    about: '.active'
  });
});

app.start(process.env.VMC_APP_PORT || 3000);
