import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  createMuiTheme,
  Switch,
  Badge,
} from '@material-ui/core';
import Head from 'next/head';
import React, { useContext } from 'react';
import useStyles from '../utils/style';
import NextLink from 'next/link';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',

      primary: {
        main: '#2A94E4',
      },
      secondary: {
        main: '#C26219',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const cookiesDarkMode = !darkMode;
    Cookies.set('darkMode', cookiesDarkMode ? 'ON' : 'OFF');
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Bleu Horizon` : `Bleu Horizon`}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navebar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link style={{ textDecoration: 'none' }}>
                <Typography className={classes.brand}>Bleu Horizon</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
                title="Dark Mode"
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link style={{ textDecoration: 'none' }}>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link style={{ textDecoration: 'none' }}>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          all right reserved. Blue Horizon
        </footer>
      </ThemeProvider>
    </div>
  );
}
