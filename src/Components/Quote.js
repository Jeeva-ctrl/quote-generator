import React from 'react';
import styled from 'styled-components';

export const Quote = (props) => {
  const { quote, getNewQuote } = props;
  return (
    <Wrapper>
      <QuoteText>{quote.text}</QuoteText>
      <Author>by {quote.author ? quote.author : 'Jack ryan'}</Author>

      <Button onClick={getNewQuote}>New Quote</Button>
    </Wrapper>
  );
};
const Button = styled.button`
  color: #f5f7f3;
  float: right;
  opacity: 1;
  border-radius: 3px;
  cursor: pointer;
  border-width: 0px;
  font-size: 0.85em;
  padding: 0.3em;
  height: 40px;
  background-color: #ed6a5a;
`;
const QuoteText = styled.div`
  font-family: 'Merienda One', cursive;
  font-size: 20px;
`;

const Author = styled.div`
  text-align: right;
  padding-bottom: 20px;
  color: #ed6a5a;
`;
const Wrapper = styled.div`
  border-radius: 3px;
  height: 250px;
  max-width: 700px;
  margin: 15% auto auto auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  padding: 20px;
  background-color: #f5f7f3;
  overflow: auto;
`;
