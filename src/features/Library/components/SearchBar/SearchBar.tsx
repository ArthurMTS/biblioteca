import { Box, TextField, Button } from '@material-ui/core';
import { FiSearch } from 'react-icons/fi'

import { useStyles } from './SearchBar.styles';

export const SearchBar = () => {
  const styles = useStyles();

  return (
    <Box className={styles.searchBar}>
      <TextField
        className={styles.input}
        variant='outlined'
      />
      <Button className={styles.button}>
        <FiSearch />
      </Button>
    </Box>
  );
}