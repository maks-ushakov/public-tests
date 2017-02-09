An image gallery is a set of images with corresponding remove buttons. This is the HTML code for a gallery with two images:
<div class="image">
  <img src="https://goo.gl/2oZU2S" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/tniGAc" alt="Second">
  <button class="remove">X</button>
</div>
Implement the registerClickHandler function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent <div> element should be removed from the gallery.
For example, after the first image has been removed from the gallery above, it's HTML code should look like this:
<div class="image">
  <img src="https://goo.gl/tniGAc" alt="Second">
  <button class="remove">X</button>
</div>
ECMAScript 5.1, jQuery v1.11.0 (available as $)

