import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

function QuoteApp() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <blockquote className="blockquote text-center">
            <p className="mb-0">{quote}</p>
          </blockquote>
          <Button variant="primary" onClick={handleNewQuote}>
            Get New Quote
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default QuoteApp;
