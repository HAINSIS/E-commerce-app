import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navebar: {
    backgroundColor: '#1979C2',
    '& a': {
      color: '#FFFFF4',
      margin: 4,
    },
    marginLeft: 10,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
  card: {
    display: 'block',
    width: 400,
    height: 650,
  },
  media: {
    display: 'flex',
    height: 500,
    Width: '100%',
    objectFit: 'contain',
    justifyContent: 'center',
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addtocart: {
    justifyContent: 'center',
  },
});

export default useStyles;
