const { useState, useEffect } = React;

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = () => {
    fetch('https://api.quotable.io/random').
    then(response => response.json()).
    then(data => {
      setQuote(data.content);
      setAuthor(data.author);
      document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(data.content)}" - ${encodeURIComponent(data.author)}`;
    });
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box", className: "card p-4 shadow-lg" }, /*#__PURE__*/
    React.createElement("div", { id: "text", className: "card-body text-center" }, quote), /*#__PURE__*/
    React.createElement("div", { id: "author", className: "card-footer text-muted text-center" }, "- ", author), /*#__PURE__*/
    React.createElement("div", { className: "text-center mt-3" }, /*#__PURE__*/
    React.createElement("button", { id: "new-quote", className: "btn btn-primary", onClick: fetchNewQuote }, "New Quote"), /*#__PURE__*/
    React.createElement("a", { id: "tweet-quote", className: "btn btn-info ml-2", href: "", target: "_blank", rel: "noopener noreferrer" }, "Tweet"))));



}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));