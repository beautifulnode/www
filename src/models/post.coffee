#nano = require('nano')('http://admin:panthers63@bnode.iriscouch.com')
#db = nano.use 'bnode'

ghm = require("github-flavored-markdown")
resourceful = require 'resourceful'

Post = resourceful.define 'post' 

Post.use 'couchdb', database: 'bnode'
