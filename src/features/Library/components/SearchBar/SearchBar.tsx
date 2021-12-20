import { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button } from '@material-ui/core';
import { FiSearch } from 'react-icons/fi'

import { useStyles } from './SearchBar.styles';

import { SearchBarProps } from './types';

export const SearchBar = ({ handler }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const styles = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    handler(searchTerm);
  }

  return (
    <form
      className={styles.searchBar}
      onSubmit={handleSubmit}
    >
      <TextField
        className={styles.input}
        variant='outlined'
        onChange={handleChange}
      />
      <Button
        className={styles.button}
        type='submit'
      >
        <FiSearch />
      </Button>
    </form>
  );
}