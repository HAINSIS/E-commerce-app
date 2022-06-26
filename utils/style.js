import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  //page: {
  //  backgroundColor: 'beige',
  //},
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
    marginTop: 20,
    textAlign: 'center',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  card: {
    width: 200,
    height: 400,
    padding: 10,
    margin: 5,
    display: 'flex',
    '& image': {
      objectFit: 'contain',
    },
    objectFit: 'contain',
  },
  cardName: {
    fontSize: '1rem',
  },
  media: {
    display: 'flex',
    height: '50%',
    Width: '90%',
    objectFit: 'contain',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
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
    textDecoration: 'none',
    '& Link': {
      textDecoration: 'none',
    },
  },
  categoriesbox: {
    display: 'flex',
    width: '100%',
    '& h4': {
      flexBasis: '30%',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    '& h3': {
      alignSelf: 'start',
    },
  },
  otherdetails: {
    display: 'flex',
    flexDirection: 'column',
    '& div': {
      display: 'flex',
      width: '100%',
      alignItems: 'baseline',
      '& h4': {
        flexBasis: '30%',
      },
    },
  },
  pricebox: {
    display: 'flex',
    alignItems: 'center',
    '& h4': {
      flexBasis: '30%',
      alignSelf: 'center',
    },
    '& h5': {
      color: '#e06b1f',
      fontSize: 20,
    },
  },
  cardprice: {
    '& a1': {
      color: '#e06b1f',
      fontSize: 20,
    },
    '& a': {
      color: 'grey',
      fontSize: 15,
    },
  },
  stockempty: {
    color: '#fa2505',
    fontSize: 20,
  },
  stockfull: {
    color: '#12ed70',
    fontSize: 20,
  },
  form: {
    maxWidth: 800,
    margin: '0 auto',
  },
});

export default useStyles;
