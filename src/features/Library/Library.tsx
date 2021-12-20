import { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import { FilterBar } from './components/FilterBar';
import { Card } from './components/Card';

import { api } from '../../_config/api';

import { Book } from './types';

export const Library = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const handleRequest = async () => {
      const result = await api.get('search');

      const { hits } = result.data;

      setBooks(hits);
    }

    handleRequest();
  }, []);

  return (
    <Box>
      <h1>{process.env.REACT_APP_APP_NAME}</h1>

      <FilterBar />

      <Box>
        {
          books.map(book => 
            <Card 
              key={book.created_at}
              author={book.author}
              title={book.title}
              url={book.url}
            />
          )
        }
      </Box>
    </Box>
  );
};