
module.exports = function() {
  var row, _i, _len, _ref, _results;
  div('.well', function() {
    return h3((new Date()).toString());
  });
  _ref = this.rows;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    row = _ref[_i];
    _results.push(div('.post', {
      style: 'padding: 20px;'
    }, function() {
      var tag, _j, _len2, _ref2;
      div({
        style: 'float: right;margin-right: 10px;'
      }, function() {
        var _ref2;
        return text(((_ref2 = row.doc.submitted) != null ? _ref2.toString() : void 0) || 'Not Specified');
      });
      h2(row.doc.title);
      p(row.doc.contents);
      _ref2 = row.doc.tags;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        tag = _ref2[_j];
        span('.label.label-info', {
          style: 'margin-right: 4px;'
        }, tag);
      }
      hr('.comments');
      h5('Comments');
      return p('Coming Soon...');
    }));
  }
  return _results;
};
