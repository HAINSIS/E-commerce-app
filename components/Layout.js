import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/style';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Bleu Horizon</title>
      </Head>
      <AppBar position="static" className={classes.navebar}>
        <Toolbar>
          <Typography>Bleu Horizon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        all right reserved. Blue Horizon
      </footer>
    </div>
  );
}
