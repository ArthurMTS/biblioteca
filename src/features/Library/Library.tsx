import { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import { SearchBar } from './components/SearchBar';
import { Card } from './components/Card';

import { api } from '../../_config/api';

import { useStyles } from './Library.styles';

import { Book } from './types';

export const Library = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const styles = useStyles();

  const handleRequest = async (searchTerm: string = '') => {
    const result = await api.get('search', {
      params: {
        query: searchTerm
      }
    });

    const { hits } = result.data;

    const filteredHits = hits?.filter(({ title, author, url }: Book) => title && author && url);

    setBooks(filteredHits);
  }

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <Box className={styles.library}>
      <h1 className={styles.title}>{process.env.REACT_APP_APP_NAME}</h1>

      <SearchBar handler={handleRequest} />

      <Box className={styles.bookList}>
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