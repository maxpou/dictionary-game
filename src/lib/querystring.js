// @see http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters

exports.queryString = function (name, url) {
  if (!url) {
    url = window.location.href
  }
  name = name.replace(/[[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  var results = regex.exec(url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

