const inputRef = document.querySelector('input#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length === 0
    ? (nameOutputRef.textContent = 'незнакомец')
    : (nameOutputRef.textContent = event.currentTarget.value);
}