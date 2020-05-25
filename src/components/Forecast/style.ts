import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  avatar: {
    margin: 'auto',
    height: '60px',
    width: '60px',
    textAlign: 'center',
  },
  description: {
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
}));

export default useStyles;
