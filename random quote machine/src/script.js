const { useState, useEffect } = React;

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
        document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(data.content)}" - ${encodeURIComponent(data.author)}`;
      });
  };

  return (
    <div id="quote-box" className="card p-4 shadow-lg">
      <div id="text" className="card-body text-center">{quote}</div>
      <div id="author" className="card-footer text-muted text-center">- {author}</div>
      <div className="text-center mt-3">
        <button id="new-quote" className="btn btn-primary" onClick={fetchNewQuote}>New Quote</button>
        <a id="tweet-quote" className="btn btn-info ml-2" href="" target="_blank" rel="noopener noreferrer">Tweet</a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
