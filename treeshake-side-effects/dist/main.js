(() => {
  "use strict";
  new Map(),
    fetch("sideEffectA2"),
    document.body.scrollHeight,
    new Map(),
    fetch("sideEffectB2"),
    document.body.scrollHeight,
    new Map(),
    fetch("sideEffectUnused2"),
    document.body.scrollHeight,
    console.log(
      "In main",
      function () {
        console.log(console);
      },
      function () {
        console.log(console);
      }
    );
})();
