import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    backgroundColor: '#759EBB',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
  },
  line: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0',
  },
  text: {
    fontSize: '18px',
    width: '100%',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  icon: {
    fontSize: '20px',
  },
});