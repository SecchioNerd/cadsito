function associazione() {
    let messaggio = 'Sei sicuro di voler entrare a far parte della nostra associazione? Non puoi tornare indietro.';
    if (confirm(messaggio)) alert('Sei entrato con successo nella nostra associazione! Sono 72€ per l\'entrata.');
    else alert('Ci dispiace che tu non ci voglia vendere la tua anima.');
}

const themeToggleButton = document.getElementById('themeToggleButton');

// Apply saved theme (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggleButton.textContent = '☀️ Light mode';
};
// Toggle and save to click
themeToggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleButton.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
});