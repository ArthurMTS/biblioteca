import { Box, TextField, Button } from '@material-ui/core';

export const FilterBar = () => {
  return (
    <Box>
      <TextField variant='outlined' />
      <Button>Buscar</Button>
    </Box>
  );
}