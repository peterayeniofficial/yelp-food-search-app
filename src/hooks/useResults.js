import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term,
          limit: 20,
          location: 'San Francisco',
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [results, errorMessage, searchApi];
};
