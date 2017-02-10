# Closures

##Description

Fix the bugs in the registerHandlers function. An alert should display anchor's zero-based index within a document instead of following the link.

For example, in the document below, the alert should display "2" when Google anchor is clicked since it is the third anchor element in the document and its zero-based index is 2.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test page</title>
  </head>
  <body>
    In my life, I used the following web search engines:<br/>
    <a href="//www.yahoo.com">Yahoo!</a><br/>
    <a href="//www.altavista.com">AltaVista</a><br/>
    <a href="//www.google.com">Google</a><br/>
  </body>
</html>
```

Wrong JavaScript code:

```Javascript
function registerHandlers() {
  var as = document.getElementsByTagName('a');
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = function() {
      alert(i);
      return false;
    }
  }
}
```


## Source
https://www.testdome.com/for-developers/solve-question/7289