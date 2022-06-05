import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <h1>Bleu Horizon</h1>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Bleu Horizon</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>all right reserved. Blu Horizon</footer>
    </div>
  );
}
