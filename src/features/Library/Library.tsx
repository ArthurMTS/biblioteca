import { Box } from '@material-ui/core';

import { FilterBar } from './components/FilterBar';

export const Library = () => (
  <Box>
    <h1>{process.env.REACT_APP_APP_NAME}</h1>

    <FilterBar />
  </Box>
);