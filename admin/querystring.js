// @see http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters

var QueryString = (function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var queryString = {}
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
        // If first entry with this name
    if (typeof queryString[pair[0]] === 'undefined') {
      queryString[pair[0]] = decodeURIComponent(pair[1])
        // If second entry with this name
    } else if (typeof queryString[pair[0]] === 'string') {
      var arr = [queryString[pair[0]], decodeURIComponent(pair[1])]
      queryString[pair[0]] = arr
        // If third or later entry with this name
    } else {
      queryString[pair[0]].push(decodeURIComponent(pair[1]))
    }
  }
  return queryString
}())
