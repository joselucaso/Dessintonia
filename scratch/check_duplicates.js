
const fs = require('fs');
const cards = JSON.parse(fs.readFileSync('c:\\Users\\lucas.oliveira\\OneDrive - Febasp Associação Civil\\Área de Trabalho\\Dessintonia\\data\\cards.json', 'utf8'));
const counts = {};
cards.forEach(c => {
    const key = `${c.left} vs ${c.right}`;
    counts[key] = (counts[key] || 0) + 1;
});
const duplicates = Object.entries(counts).filter(([k, v]) => v > 1);
console.log(JSON.stringify(duplicates, null, 2));
