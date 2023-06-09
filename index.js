import { copyToClipboard, insertCss, insertFirstLines, insertNewLines, preventRemoveCss, scrollTextAndNumbers, setLimitLine, showCodeOutput, tabShortcut } from "./listenersFunctions.js";

const htmlCodeInput = document.getElementById('html-code-input');
const cssCodeInput = document.getElementById('css-code-input');
const htmlLineNumbers = document.querySelector('.html-line-numbers');
const cssLineNumbers = document.querySelector('.css-line-numbers');
const cssCopyButton = document.getElementById('css-copy');
const htmlCopyButton = document.getElementById('html-copy');

cssCopyButton.addEventListener('click', () => { copyToClipboard(cssCodeInput) })
htmlCopyButton.addEventListener('click', () => { copyToClipboard(htmlCodeInput) })

htmlCodeInput.addEventListener('input', () => {
    insertNewLines(htmlCodeInput, htmlLineNumbers)
    showCodeOutput()
    insertCss()
});

cssCodeInput.addEventListener('input', () => {
    setLimitLine()
    insertNewLines(cssCodeInput, cssLineNumbers)
    insertCss()
    preventRemoveCss()
});

htmlCodeInput.addEventListener('scroll', () => scrollTextAndNumbers(htmlCodeInput, htmlLineNumbers));
cssCodeInput.addEventListener('scroll', () => scrollTextAndNumbers(cssCodeInput, cssLineNumbers));

cssCodeInput.addEventListener('keydown', (e) => {
    tabShortcut(e, cssCodeInput)
});

htmlCodeInput.addEventListener('keydown', (e) => {
    tabShortcut(e, htmlCodeInput)
});

insertFirstLines()