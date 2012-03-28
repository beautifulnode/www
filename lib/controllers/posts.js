var db, ghm, index, nano, submit, thanks, view;

nano = require('nano')('http://admin:panthers63@bnode.iriscouch.com');

ghm = require("github-flavored-markdown");

db = nano.use('bnode');

view = function(name) {
  return "" + __dirname + "/../views/" + name;
};

index = require(view("posts/index"));

submit = require(view("posts/submit"));

thanks = require(view("posts/thanks"));

module.exports = {
  '/': {
    get: function() {
      var _this = this;
      return db.list({
        include_docs: true,
        descending: true
      }, function(e, b, h) {
        return _this.res.html(_this.bind(index, {
          home: '.active',
          rows: b.rows
        }));
      });
    }
  },
  '/submit': {
    get: function() {
      return this.res.html(this.bind(submit, {
        submit: '.active'
      }));
    }
  },
  '/posts': {
    post: function() {
      var _this = this;
      this.req.body.contents = ghm.parse(this.req.body.contents);
      this.req.body.tags = this.req.body.tags.length > 0 ? this.req.body.tags.split(',') : [];
      this.req.body.submitted = new Date();
      return db.insert(this.req.body, function(e, b, h) {
        return _this.res.html(_this.bind(thanks, {
          layout: layout
        }));
      });
    }
  }
};
