
(function () {
  var newMathJax = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.1.0/MathJax.js';
  var oldMathJax = 'https://cdn.mathjax.org/mathjax/2.1-latest/unpacked/MathJax.js';
  var n = oldMathJax.length;

  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    var src = script.getAttribute('src') || '';
    if (src.substr(0, n) === oldMathJax) {
      var newScript = document.createElement('script');
      newScript.src = newMathJax + src.substr(n);
      script.parentNode.replaceChild(newScript, script);
      console.warn('WARNING: cdn.mathjax.org has been retired. Check https://www.mathjax.org/cdn-shutting-down/ for migration tips.')
      break;
    }
  }
})();