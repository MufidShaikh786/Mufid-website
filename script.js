
document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Dream big. Start small. Act now.",
        "Stay curious. Code something today.",
        "A little progress each day adds up to big results.",
        "Your only limit is your mind."
    ];
    const quoteBox = document.getElementById("quote-box");
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.innerHTML = `<blockquote>${randomQuote}</blockquote>`;
});
