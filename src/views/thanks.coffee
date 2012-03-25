module.exports = ->
  div '.hero-unit', ->
    h1 'Thank You'
    
  h3 """Thank you for submitting your review/article on Beautiful Node, 
    we have sent a tweet to let all of our followers know about your 
    post.
    """
  center ->
    a '.btn.btn-primary.btn-large', href: '/', 'Goto Home'