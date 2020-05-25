import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    width: '100%',
  },
  input: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default useStyles;
