(function () {
  var newMathJax = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.3.0/MathJax.js';
  var oldMathJax = 'cdn.mathjax.org/mathjax/2.3-latest/unpacked/MathJax.js';
  var n = oldMathJax.length;

  var replaceScript = function (script, rawSrc) {
    var newScript = document.createElement('script');
    newScript.src = newMathJax + rawSrc.substr(n);
    script.parentNode.replaceChild(newScript, script);
    console.warn('WARNING: cdn.mathjax.org has been retired. Check https://www.mathjax.org/cdn-shutting-down/ for migration tips.')
  }
  if (document.currentScript) {
    var script = document.currentScript;
    replaceScript(script, script.src.replace(/^(https?:)?\/\//i, ''));
  } else {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      var src = script.src || '//';
      var rawSrc = src.split('//')[1];
      if (rawSrc.substr(0, n) === oldMathJax) {
        replaceScript(script, rawSrc);
        break;
      }
    }
  }
})();