module.exports = ->
  div '.well', ->
    h3 (new Date()).toString()
  for row in @rows
    div '.post', style: 'padding: 20px;', ->
      div style: 'float: right;margin-right: 10px;', ->
        text row.doc.submitted?.toString() || 'Not Specified'
      h2 row.doc.title
      p row.doc.contents
      for tag in row.doc.tags
        span '.label.label-info', style: 'margin-right: 4px;', tag
      hr '.comments'
      h5 'Comments'
      p 'Coming Soon...'
      # form method: 'POST', action: '/comments', ->
      #   input type: 'hidden', value: row.key
      #   textArea 'comment', rows: "4", style: 'width: 90%'
      #   p ->
      #     button '.btn.btn-primary', 'Comment'