
module.exports = function() {
  div('.hero-unit', function() {
    return h1('Thank You');
  });
  h3("Thank you for submitting your review/article on Beautiful Node, \nwe have sent a tweet to let all of our followers know about your \npost.");
  return center(function() {
    return a('.btn.btn-primary.btn-large', {
      href: '/'
    }, 'Goto Home');
  });
};
