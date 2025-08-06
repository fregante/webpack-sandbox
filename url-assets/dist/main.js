(() => {
  var t = {
      8: (t, r, e) => {
        "use strict";
        t.exports = e.p + "791f9027b5019734389e.txt";
      },
      740: (t, r, e) => {
        "use strict";
        t.exports = e.p + "017b8d924163be07c12d.txt";
      },
    },
    r = {};
  function e(o) {
    var c = r[o];
    if (void 0 !== c) return c.exports;
    var n = (r[o] = { exports: {} });
    return (t[o](n, n.exports, e), n.exports);
  }
  ((e.m = t),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (() => {
      var t;
      e.g.importScripts && (t = e.g.location + "");
      var r = e.g.document;
      if (
        !t &&
        r &&
        (r.currentScript &&
          "SCRIPT" === r.currentScript.tagName.toUpperCase() &&
          (t = r.currentScript.src),
        !t)
      ) {
        var o = r.getElementsByTagName("script");
        if (o.length)
          for (var c = o.length - 1; c > -1 && (!t || !/^http(s?):/.test(t)); )
            t = o[c--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((t = t
        .replace(/^blob:/, "")
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = t));
    })(),
    (e.b = document.baseURI || self.location.href),
    console.log(new URL(e(8), e.b).href, new URL(e(740), e.b).href));
})();
