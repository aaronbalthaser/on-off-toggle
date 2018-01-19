export default (function() {

  var qs = function(selector, scope) {
    return (scope || document).querySelector(selector);
  };

  var id = function(id) {
    return document.getElementById(id);
  };

  var on = function(target, type, callback, capture) {
    return target.addEventListener(type, callback, !!capture);
  };

  var dom = function(name, options) {
    var element = document.createElement(name);

    if (options.parent) {
      options.parent.appendChild(element);
    }

    if (options.text) {
      element.innerHTML = options.text
    }

    if (options.className) {
      element.className = options.className
    }

    return element;
  };

  return {
    qs: qs,
    id: id,
    on: on,
    dom: dom
  };
}());
