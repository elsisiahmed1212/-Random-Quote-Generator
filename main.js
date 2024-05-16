var bt = document.getElementById('bt');
const arrayOfQuotes = [
    {'author': 'Oscar Wilde', 'quote': '“Be yourself; everyone else is already taken.”'},
    {'author': 'Frank Zappa', 'quote': '“So many books, so little time.”'},
    {'author': 'Marcus Tullius Cicero', 'quote': '“A room without books is like a body without a soul.”'},
    {'author': 'Mae West', 'quote': '“You only live once, but if you do it right, once is enough.”'},
    {'author': 'Oscar Wilde', 'quote': '“Always forgive your enemies; nothing annoys them so much.”'},
    {'author': 'Mahatma Gandhi', 'quote': '“Live as if you were to die tomorrow. Learn as if you were to live forever.”'},
    {'author': 'Oscar Wilde', 'quote': '“To live is the rarest thing in the world. Most people exist, that is all.”'}
];
let shownQuotesIndices = [];

bt.onclick = function() {
    generateQuote();
}

function generateQuote() {
    let randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (shownQuotesIndices.includes(randomIndex));
        shownQuotesIndices.push(randomIndex);
    
    if (shownQuotesIndices.length === arrayOfQuotes.length) {
        shownQuotesIndices = [];
    }
    
    document.getElementById('quote').innerHTML = `\"${arrayOfQuotes[randomIndex].quote}\"`;
    document.getElementById('author').innerHTML = `-- ${arrayOfQuotes[randomIndex].author}`;
}
