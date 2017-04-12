
(function () {
  var newMathJax = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js';
  var oldMathJax = 'rawgit.com/mathjax/cdn-redirect/master/test/MathJax.js';
  var n = oldMathJax.length;

  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    var src = script.getAttribute('src') || '//';
    var rawSrc = src.split('//')[1];
    if (rawSrc.substr(0, n) === oldMathJax) {
      var newScript = document.createElement('script');
      newScript.src = newMathJax + rawSrc.substr(n);
      script.parentNode.replaceChild(newScript, script);
      console.warn('WARNING: cdn.mathjax.org has been retired. Check https://www.mathjax.org/cdn-shutting-down/ for migration tips.')
      break;
    }
  }
})();