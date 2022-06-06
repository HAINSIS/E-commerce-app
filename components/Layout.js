import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/style';
import NextLink from 'next/link';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Bleu Horizon</title>
      </Head>
      <AppBar position="static" className={classes.navebar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link style={{ textDecoration: 'none' }}>
              <Typography className={classes.brand}>Bleu Horizon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link style={{ textDecoration: 'none' }}>Cart</Link>
            </NextLink>
            <NextLink href="/Login" passHref>
              <Link style={{ textDecoration: 'none' }}>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        all right reserved. Blue Horizon
      </footer>
    </div>
  );
}
