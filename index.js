const form = document.getElementById('love-calculator-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const loveScore = calculateLoveScore(name1, name2);
    result.innerHTML = `<p>The love score between ${name1} and ${name2} is ${loveScore}%.</p>`;
});

function calculateLoveScore(name1, name2) {
    const name1Length = name1.length;
    const name2Length = name2.length;
    const totalLength = name1Length + name2Length;
    const loveScore = Math.floor((name1Length * name2Length) / totalLength * 100);
    return loveScore;
}