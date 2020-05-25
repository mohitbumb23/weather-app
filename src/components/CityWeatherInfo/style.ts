import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  avatar: {
    height: '100px',
    width: '100px',
  },
  description: {
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  textCenter: {
    textAlign: 'center',
  },
}));

export default useStyles;
