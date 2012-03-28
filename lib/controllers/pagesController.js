
module.exports = {
  about: function(app, req, res) {
    return app.render(this.res, about, {
      about: '.active'
    });
  }
};
