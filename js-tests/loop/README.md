# Loop

## Description

Function _appendChildren_ should add a new child **div** to each existing div. New divs should be decorated by calling _decorateDiv_.

For example, after _appendChildren_ is executed, the following divs:

```HTML
  <div id="a">
    <div id="b">
    </div>
  </div>
```

should take the following form (assuming _decorateDiv_ does nothing):

```HTML
  <div id="a">
    <div id="b">
      <div></div>
    </div>
    <div></div>
  </div>
```
The code below should do the job, but for some reason it goes into an infinite loop. Fix the bugs.

```Javascript
function appendChildren() {
  var allDivs = document.getElementsByTagName("div");

  for (var i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Mock of decorateDiv function for testing purposes
function decorateDiv(div) {}
```

## Source
https://www.testdome.com/for-developers/solve-question/7404