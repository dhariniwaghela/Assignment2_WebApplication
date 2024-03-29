import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import "../styles/QuoteApp.css"; // Import custom styles

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

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <header class="text-center pb-5">
              <h1 class="h2">Generate a personal quotes daily</h1>
              <p>Learn new quotes by clicking Get New quote button</p>
            </header>
          </div>
        </div>


        <div class="row">
          <div class="col-lg-6 mx-auto">
            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
              <p class="mb-0 mt-2 font-italic">"{quote}"</p>
              <footer class="blockquote-footer pt-4 mt-4 border-top">
                <Button variant="primary" onClick={handleNewQuote}>
                  Get New Quote
                </Button>
              </footer>
            </blockquote>

          </div>
        </div>
      </div>
    </section>

  );
}

export default QuoteApp;
