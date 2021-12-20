import { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import { SearchBar } from './components/SearchBar';
import { CardList } from './components/CardList';

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

      <CardList elements={books} />
    </Box>
  );
};