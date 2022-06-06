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

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card className={classes.card}>
                <CardActionArea className={classes.media}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.price}>
                  <Typography>Price : ${product.price}</Typography>
                  <Typography>
                    {product.shipping == 0 ? '' : 'Shipping cost :'}

                    {product.shipping == 0 ? 'Free shipping' : product.shipping}
                  </Typography>
                </CardActions>
                <CardActions className={classes.addtocart}>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
