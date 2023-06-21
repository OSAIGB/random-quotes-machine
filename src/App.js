import React, { useState, useEffect } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    // Fetch random quotes from an API
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
      })
      .catch(error => console.error(error));
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweetQuote = () => {
    // Open Twitter with the current quote
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${quote} - ${author}`
    )}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">{author}</div>
      <button id="new-quote" onClick={handleNewQuote}>
        New Quote
      </button>
      <a href="#" id="tweet-quote" onClick={handleTweetQuote}>
        Tweet Quote
      </a>
    </div>
  );
};

export default App;
