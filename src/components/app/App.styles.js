import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: '0 auto',
    backgroundColor: 'springgreen',
    '& > header': {
      minHeight: '4rem',
      backgroundColor: 'aquamarine',
    },
    '& > main': {
      flex: '1 0 auto',
    },
  },
}));