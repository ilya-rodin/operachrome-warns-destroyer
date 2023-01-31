if (
  /^(?:chrome-|opera-)?devtools:$/gi.test(window.location.protocol) === true
) {
  const devtoolsCustomCss = `.console-view > div[class^="console-warning-" i] { display : none !important ; }`

  const addCssRules = cssRules => {
    ;(document.head || document.documentElement).appendChild(
      document.createElement('style')
    ).innerHTML = cssRules
  }

  addCssRules(devtoolsCustomCss)
}
