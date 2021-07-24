window.console = window.console || function(t) {};
  var consoleWarn = window.console.warn;
  function warn(){ consoleWarn.apply(console, arguments); }
  window.open = function(){ warn("window.open is disabled."); };
  window.print   = function(){ warn("window.print is disabled."); };
  window.alert   = function(){ warn("window.alert is disabled."); };
  window.confirm = function(){ warn("window.confirm is disabled."); };
  window.prompt  = function(){ warn("window.prompt is disabled."); };
  window.Notification = function() { warn("HTML5 notifications are disabled."); };
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }

  