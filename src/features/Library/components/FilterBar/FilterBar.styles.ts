import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '35px',
  },
  input: {
    width: '50ch',
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