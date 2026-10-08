/* Content OS demo — style switcher.
   Applies html[data-style], persists choice, supports #hash links,
   keeps aria-pressed in sync. */
(function () {
  "use strict";

  var STYLES = ["art-nouveau", "bauhaus", "de-stijl", "constructivism", "art-deco"];
  var DEFAULT_STYLE = "art-deco";
  var STORAGE_KEY = "cos-demo-style";
  var root = document.documentElement;
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-set-style]"));

  function isValid(s) { return STYLES.indexOf(s) !== -1; }

  function apply(style, updateHash) {
    if (!isValid(style)) style = DEFAULT_STYLE;
    root.setAttribute("data-style", style);
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-style") === style ? "true" : "false");
    });
    try { localStorage.setItem(STORAGE_KEY, style); } catch (e) { /* storage unavailable */ }
    if (updateHash && window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState(null, "", "#" + style);
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-set-style"), true);
    });
  });

  window.addEventListener("hashchange", function () {
    var s = window.location.hash.replace("#", "");
    if (isValid(s)) apply(s, false);
  });

  // initial: hash > saved > default
  var initial = window.location.hash.replace("#", "");
  if (!isValid(initial)) {
    try { initial = localStorage.getItem(STORAGE_KEY) || ""; } catch (e) { initial = ""; }
  }
  apply(initial || DEFAULT_STYLE, false);
})();
