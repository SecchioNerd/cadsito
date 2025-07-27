function associazione() {
    let messaggio = 'Sei sicuro di voler entrare a far parte della nostra associazione? Non puoi tornare indietro.';
    if (confirm(messaggio)) alert('Sei entrato con successo nella nostra associazione! Sono 72€ per l\'entrata.');
    else alert('Ci dispiace che tu non ci voglia vendere la tua anima.');
}

const themeToggleButton = document.getElementById('themeToggleButton');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) themeToggleButton.textContent = '☀️ Modalità chiara';
    else themeToggleButton.textContent = '🌙 Modalità scura';
});