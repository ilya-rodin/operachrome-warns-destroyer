function applyCssCurrentPanelOnly() {
  const devtools_custom_css = `.console-view > div[class^="console-warning-" i] { display : none !important ; }`

  chrome.devtools.panels.applyStyleSheet(devtools_custom_css)
}

applyCssCurrentPanelOnly()

chrome.devtools.panels.elements.onSelectionChanged.addListener(
  applyCssCurrentPanelOnly
)
