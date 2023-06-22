import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState ('grey')

  const colors = ['gold', 'green', 'brown', 'red', 'blue']
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
  const Color = () => {
const randomColors = colors [Math.floor(Math.random() * colors.length)]
setColor(randomColors)
  }

const newQuoteColor = () => {
  handleNewQuote();
  Color()
}

  const handleTweetQuote = () => {
    // Open Twitter with the current quote
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${quote} - ${author}`
    )}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div style={{backgroundColor : color}} className='centered-container' >
    <div id="quote-box">
      <div id="text" style={{color: color}}>{quote}</div>
      <div className='author-container'>
           <div 
           id="author" 
           style={{marginRight: 'auto', color: color} }>--{author}</div>
      </div>
   
      <div id ="newQ-tweet"> <a href="#" id="tweet-quote" onClick={handleTweetQuote}>
        <FontAwesomeIcon style = {{fontSize: 25, color: color}}icon={faTwitter} />
      </a>
      <button id="new-quote" onClick={newQuoteColor} 
      style={{backgroundColor:color}}>
        New Quote
      </button>
      </div>
        
   
    </div>
    </div>
  );
};

export default App;
