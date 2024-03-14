// script.js
const inputText = document.getElementById('inputText');
const decodeButton = document.getElementById('decodeButton');
const decodedText = document.getElementById('decodedText');

decodeButton.addEventListener('click', () => {
    const originalText = inputText.value;
    const decoded = reverseText(originalText);
    decodedText.textContent = `Texto decodificado: ${decoded}`;
});

function reverseText(text) {
    return text.split('').reverse().join('');
}
