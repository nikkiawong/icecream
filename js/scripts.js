$(document).ready(function() {
  var flavors = ['vanilla', 'chocolate', 'strawberry', 'greentea'];


  flavors.forEach(function(flavor) {
    $("." + flavor).text(flavors);
  })
})
