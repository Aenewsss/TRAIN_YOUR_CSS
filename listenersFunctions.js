const htmlCodeInput = document.getElementById('html-code-input');
const cssCodeInput = document.getElementById('css-code-input');
const htmlLineNumbers = document.querySelector('.html-line-numbers');
const cssLineNumbers = document.querySelector('.css-line-numbers');
const codeOutput = document.getElementById('code-output');

export function insertCss() {
    codeOutput.innerHTML += cssCodeInput.value;
}

export function showCodeOutput() {
    codeOutput.innerHTML = htmlCodeInput.value;
}

export function insertNewLines(codeInput, lineNumbers) {
    const codeLines = codeInput.value.split('\n').length;
    lineNumbers.innerHTML = '';

    for (let i = 1; i <= codeLines; i++) {
        const lineNumber = document.createElement('div');
        lineNumber.innerText = i;
        lineNumbers.appendChild(lineNumber);
    }
}

export function scrollTextAndNumbers(codeInput, lineNumbers) {
    lineNumbers.scrollTop = codeInput.scrollTop;
}

export function insertFirstLines() {
    const htmlLineNumber = document.createElement('div');
    htmlLineNumbers.innerHTML = "";
    htmlLineNumber.innerText = '1';
    htmlLineNumbers.appendChild(htmlLineNumber);

    const cssLineNumber = document.createElement('div');
    cssLineNumbers.innerHTML = "";
    cssLineNumber.innerText = '1';
    cssCodeInput.textContent = '<style>\n\t\n</style>'
    cssLineNumbers.appendChild(cssLineNumber);
}

export function tabShortcut(e, codeInput) {
    if (e.key.toLocaleLowerCase() === 'tab') {
        e.preventDefault();
        const currentPosition = codeInput.selectionStart;
        const value = codeInput.value;

        const lineStartPosition = value.lastIndexOf('\n', currentPosition - 1) + 1;
        const lineEndPosition = value.indexOf('\n', currentPosition);

        const lineText = value.substring(lineStartPosition, lineEndPosition !== -1 ? lineEndPosition : value.length);

        const newLineText = lineText.substring(0, currentPosition - lineStartPosition) + "\t" + lineText.substring(currentPosition - lineStartPosition);
        const newValue = value.substring(0, lineStartPosition) + newLineText + value.substring(lineEndPosition !== -1 ? lineEndPosition : value.length);
        codeInput.value = newValue;
        codeInput.selectionStart = codeInput.selectionEnd = currentPosition + 1;
    }
}

export function setLimitLine() {
    const maxLength = cssCodeInput.value.indexOf("</style>")

    console.log(cssCodeInput.value.length, maxLength)

    if (cssCodeInput.value.length - 8 > maxLength) {
        cssCodeInput.value = cssCodeInput.value.substring(0, cssCodeInput.value.length - 1)
    }

}