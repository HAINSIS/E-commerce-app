import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import data from '../utils/data';
import useStyles from '../utils/style';
import NextLink from 'next/link';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card key={product.name} className={classes.card}>
                <NextLink href={`/product/${product.ref}`} passHref>
                  <CardActionArea textAlign="center" flexDirection="column">
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={product.image}
                      alt={product.name}
                      title={product.name}
                      objectFit="contain"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <CardActions className={classes.price}>
                          <Typography
                            display="flex"
                            className={classes.cardprice}
                          >
                            <a1 color="#e06b1f">${product.price}</a1>
                            <a>
                              {product.shipping == 0
                                ? 'Free shipping'
                                : ` + $${product.shipping} - Shipping & Import Fees `}
                            </a>
                          </Typography>
                        </CardActions>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
