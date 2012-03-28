var Post, ghm, resourceful;

ghm = require("github-flavored-markdown");

resourceful = require('resourceful');

Post = resourceful.define('post');

Post.use('couchdb', {
  database: 'bnode'
});
