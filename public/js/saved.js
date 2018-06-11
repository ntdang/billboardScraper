$.getJSON("/saved", function (data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    if (saved) {
      // Display the apropos information on the page
      $("#saved").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
      $("#saved").append("<button data-id='" + data[i]._id + "' id='savearticle' class='btn-outline-primary btn-squared'>Unsave This Article</button>");
    }
  }
});