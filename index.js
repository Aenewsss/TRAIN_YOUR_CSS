const htmlCodeInput = document.getElementById('html-code-input');
const cssCodeInput = document.getElementById('css-code-input');
const codeOutput = document.getElementById('code-output');
const htmlLineNumbers = document.querySelector('.html-line-numbers');
const cssLineNumbers = document.querySelector('.css-line-numbers');

htmlCodeInput.addEventListener('input', () => {
    insertNewLines(htmlCodeInput, htmlLineNumbers)
    showCodeOutput()
    insertCss()
});

cssCodeInput.addEventListener('input', () => {
    insertNewLines(cssCodeInput, cssLineNumbers)
    insertCss()
});

htmlCodeInput.addEventListener('scroll', () => scrollTextAndNumbers(htmlCodeInput, htmlLineNumbers));
cssCodeInput.addEventListener('scroll', () => scrollTextAndNumbers(cssCodeInput, cssLineNumbers));

function insertCss() {
    codeOutput.innerHTML += cssCodeInput.value;
}

function showCodeOutput() {
    codeOutput.innerHTML = htmlCodeInput.value;
}

function insertNewLines(codeInput, lineNumbers) {
    const codeLines = codeInput.value.split('\n').length;
    lineNumbers.innerHTML = '';

    for (let i = 1; i <= codeLines; i++) {
        const lineNumber = document.createElement('div');
        lineNumber.innerText = i;
        lineNumbers.appendChild(lineNumber);
    }
}

function scrollTextAndNumbers(codeInput, lineNumbers) {
    lineNumbers.scrollTop = codeInput.scrollTop;
}

const insertFirstLines = () => {
    const htmlLineNumber = document.createElement('div');
    htmlLineNumbers.innerHTML = "";
    htmlLineNumber.innerText = '1';
    htmlLineNumbers.appendChild(htmlLineNumber);
    
    const cssLineNumber = document.createElement('div');
    cssLineNumbers.innerHTML = "";
    cssLineNumber.innerText = '1';
    cssCodeInput.textContent = '<style>\n\n</style>'
    cssLineNumbers.appendChild(cssLineNumber);
}

insertFirstLines()