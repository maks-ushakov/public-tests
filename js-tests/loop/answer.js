function appendChildren() {
  var allDivs = document.getElementsByTagName("div");

  // let cache initial array size
  for (var i = 0, size = allDivs.length; i < size; i++) {
	var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Mock of decorateDiv function for testing purposes
function decorateDiv(div) {}
