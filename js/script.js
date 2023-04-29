const textarea = document.getElementById('text');
const words = document.getElementById('words');
const characters = document.getElementById('characters');
const symbols = document.getElementById('symbols');

textarea.addEventListener('input', () => {
    characters.innerHTML = textarea.value.length;

    words.innerHTML = textarea.value.trim().split(" ").length;

    if (textarea.value.length === 0) {
        words.innerHTML = '0';
    }

    symbols.textContent = textarea.value.split(/[!@#$%^&*+=(){}:;'"<>.,?/-]/).length - 1;
})