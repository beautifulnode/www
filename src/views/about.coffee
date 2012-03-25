module.exports = ->
  div '.well', ->
    h2 'About BeautifulNode.com'
  div '.row', ->
    div '.span1', ->
      img src: 'http://nodejs-logo.jpg.to', style: 'width: 100%; height: 60px;'
    div '.span7', ->
      h3 """
      BeautifulNode.com is a nodejs community blog site focused at
      serving the community with detailed information about nodejs modules
      and opinionated reviews."""
  br()
  div '.row', ->
    div '.span4', ->
      h3 'Promote Module'
      p """
      Have a new module to promote, post a review here, let community 
      members comment and review.  """
    div '.span4', ->
      h3 'Review Module'
      p """
      Have a new review or new information
      about nodejs or any nodejs modules?  Post a quick article here 
      giving detailed information."""