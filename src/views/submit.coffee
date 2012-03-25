module.exports = ->
  div '.well', ->
    h3 'Submit a Review'
  form '.well', method: 'POST', action: '/posts', ->
    textField 'title', input: { style: 'width: 90%', placeholder: 'Enter Title ...' }
    textArea 'contents', { style: 'width: 90%', rows: "10", placeholder: 'Markdown Supported...' }
    textField 'tags', input: { style: 'width: 90%', placeholder: 'comma separated list of categories...'}
    p ->
      button '.btn.btn-primary.btn-large', 'Submit'
  