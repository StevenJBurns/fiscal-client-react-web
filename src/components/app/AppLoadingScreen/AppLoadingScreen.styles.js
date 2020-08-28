import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    },
    '& > main': {
      flex: '1 0 auto',
    },
  }
));
