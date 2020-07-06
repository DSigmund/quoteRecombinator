/* global $, zitate */
$(document).ready(function () {
  $('button').click(function () {
    loadZitat()
  })
  loadZitat()
})
function loadZitat () {
  var zufallsZitat = zitate[Math.floor(Math.random() * zitate.length)].zitat
  var zufallsAutor = zitate[Math.floor(Math.random() * zitate.length)].autor
  var zufallsWerk = zitate[Math.floor(Math.random() * zitate.length)].werk
  $('blockquote p').text(zufallsZitat)
  $('blockquote footer span').text(zufallsAutor)
  $('blockquote footer cite').text(zufallsWerk)
}
