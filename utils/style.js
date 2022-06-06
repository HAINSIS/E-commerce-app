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
    width: 300,
    height: 550,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  media: {
    display: 'flex',
    height: 400,
    Width: '100%',
    objectFit: 'contain',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 4,
  },
  addtocart: {
    justifyContent: 'center',
  },
  container: {
    margin: 10,
  },
  categories: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  categoriesbox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default useStyles;
