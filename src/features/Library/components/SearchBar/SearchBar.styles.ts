import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '35px',
    width: '100%',
  },
  input: {
    width: '100%',
  },
  button: {
    fontSize: '5ch',
    backgroundColor: '#75B5FD',
    borderRadius: '50%',
    color: '#FFF',
    opacity: '0.8',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: '#75B5FD',
      opacity: '1',
    },
  },
});