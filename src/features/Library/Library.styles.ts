import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  library: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    width: '80vw',
    margin: '0 auto',
    '@media(min-width: 800px)': {
      width: '70vw',
    },
    '@media(min-width: 1100px)': {
      width: '50vw',
    },
  },
  title: {
    marginTop: '20px',
  },
  bookList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
  },
});