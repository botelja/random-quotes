const getQuote = document.getElementById('get-quote');

getQuote.addEventListener('click', () => {
  fetch(
    'https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const quote = data[Math.floor(Math.random() * data.length)];
      document.getElementById('quote').textContent = quote.quoteText;
      document.getElementById('author').textContent = quote.quoteAuthor;
    })
    .catch((error) => console.error(error));
});
