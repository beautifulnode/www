
module.exports = function() {
  div('.well', function() {
    return h2('About BeautifulNode.com');
  });
  div('.row', function() {
    div('.span1', function() {
      return img({
        src: 'http://nodejs-logo.jpg.to',
        style: 'width: 100%; height: 60px;'
      });
    });
    return div('.span7', function() {
      return h3("BeautifulNode.com is a nodejs community blog site focused at\nserving the community with detailed information about nodejs modules\nand opinionated reviews.");
    });
  });
  br();
  return div('.row', function() {
    div('.span4', function() {
      h3('Promote Module');
      return p("Have a new module to promote, post a review here, let community \nmembers comment and review.  ");
    });
    return div('.span4', function() {
      h3('Review Module');
      return p("Have a new review or new information\nabout nodejs or any nodejs modules?  Post a quick article here \ngiving detailed information.");
    });
  });
};
