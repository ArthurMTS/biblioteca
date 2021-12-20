import { Box, TextField, Button } from '@material-ui/core';
import { FiSearch } from 'react-icons/fi'

import { useStyles } from './FilterBar.styles';

export const FilterBar = () => {
  const styles = useStyles();

  return (
    <Box className={styles.filterBar}>
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