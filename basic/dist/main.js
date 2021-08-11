(() => {
  "use strict";
  const e = (e) => {
    if (null == e) return new DocumentFragment();
    const n = document.createElement("template");
    return (n.innerHTML = e), n.content;
  };
  e.one = (n) => {
    var t;
    return null !== (t = e(n).firstElementChild) && void 0 !== t ? t : void 0;
  };
  const n = e;
  console.log(n);
})();
