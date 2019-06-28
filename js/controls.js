$(window).resize(function() {
  positionCircle();
  width = playground.width();
  height = playground.height();
  stage = new Konva.Stage({
    container: ".playground",
    width: width,
    height: height
  });
});

$(window).scroll(function(e) {
  e.preventDefault();
});


$(document).ready(function() {
  positionCircle();
  $("#clearPanel").prop("disbaled", true);
});

$("#drawVector").click(function(event) {
  event.preventDefault();
  $("#showAllVectors").is(":checked")
    ? (drawAllVectors = true)
    : (drawAllVectors = false);
  drawFinalVector();
});

$("body").keypress(function(e) {
  if (e.key == "d") {
    toggleDarkLight();
  }
});

$("#clearPanel").click(function() {
  recreate();
});

playground.click(function(e) {
    var parentOffset = $(this)
      .parent()
      .offset();
    var x = e.pageX - parentOffset.left + 15;
    var y = e.pageY - parentOffset.top + 15;
    addArrow(x, y);
  });
