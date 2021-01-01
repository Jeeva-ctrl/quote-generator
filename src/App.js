import React, { useState, useEffect } from 'react';
import { Loading } from './Components/Loading';
import { Quote } from './Components/Quote';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const getRandomQuotes = () => {
    if (quotes.length > 1) {
      const randomNumber = Math.floor(Math.random() * quotes.length);
      return quotes[randomNumber];
      //  return text;
    }
  };
  const handleNewQuoteClick = () => {
    setQuote(getRandomQuotes());
  };

  useEffect(() => {
    setLoading(true);
    axios.get('https://type.fit/api/quotes').then((res) => {
      setQuotes(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setQuote(getRandomQuotes());
  }, [quotes]);

  return (
    <Container>
      {loading && <Loading />}
      {quote && <Quote getNewQuote={handleNewQuoteClick} quote={quote} />}
    </Container>
  );
}

const Container = styled.div``;
export default App;
