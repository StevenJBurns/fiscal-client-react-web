import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: '0 auto',
    '& > main': {
      flex: '1 0 auto',
    },
    '& a': {
      margin: '0.5rem',
    }
  },
  tabs: {
    indicator: {
      backgroundColor: 'darkgreen',
    },
  },
}));