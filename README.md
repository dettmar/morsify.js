# morsify.js

A Javascript function that translates all textnodes of a inside the `<body>` tag into morse code.  

Unfortunately you can't create a Javascript link with markdown, but create a new bookmark with
the following snippet as url, and you can morsify any site.  

```javascript
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://raw.github.com/dettmar/morsify.js/master/morsify.js';})();
```

Works in IE9+ and the other good guys.