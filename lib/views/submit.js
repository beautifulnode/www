
module.exports = function() {
  div('.well', function() {
    return h3('Submit a Review');
  });
  return form('.well', {
    method: 'POST',
    action: '/posts'
  }, function() {
    textField('title', {
      input: {
        style: 'width: 90%',
        placeholder: 'Enter Title ...'
      }
    });
    textArea('contents', {
      style: 'width: 90%',
      rows: "10",
      placeholder: 'Markdown Supported...'
    });
    textField('tags', {
      input: {
        style: 'width: 90%',
        placeholder: 'comma separated list of categories...'
      }
    });
    return p(function() {
      return button('.btn.btn-primary.btn-large', 'Submit');
    });
  });
};
