import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navebar: {
    backgroundColor: '#1979C2',
    '& a': '#FFFFF4',
    marginLeft: 10,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
