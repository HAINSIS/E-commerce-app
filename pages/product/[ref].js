import React from 'react';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import {
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import useStyles from '../../utils/style';
import Image from 'next/image';

export default function ProductDetails() {
  const router = useRouter();
  const { ref } = router.query;
  const classes = useStyles();
  const product = data.products.find((a) => a.ref === parseInt(ref, 10));
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.container}>
        <NextLink href={'/'} passHref>
          <Link>Go back to the Products list</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={5} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={350}
            height={350}
            objectFit={'contain'}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={4} xs={12}>
          <List>
            <ListItem>
              <h1>{product.name}</h1>
            </ListItem>
            <ListItem className={classes.pricebox}>
              <h4>Price :</h4>
              <h5>${product.price}</h5>
            </ListItem>
            <ListItem>
              {product.shipping == 0
                ? 'Free shipping'
                : `+ $${product.shipping} - Shipping & Import Fees `}{' '}
            </ListItem>
            <ListItem className={classes.categoriesbox}>
              <h4>Rating : </h4> {product.rating} Stars ({product.numReviews}{' '}
              Reviews)
            </ListItem>
            <ListItem className={classes.categoriesbox}>
              <h4>Categories :</h4>
              <div className={classes.categories}>
                {product.category.map((x) => (
                  <NextLink key={x.name} href={'/'} passHref>
                    <Link>{x.name}</Link>
                  </NextLink>
                ))}
              </div>
            </ListItem>
            <ListItem className={classes.otherdetails}>
              <div>
                <h4>Manufacturer :</h4>
                <NextLink href={`/${product.manufacturer}`} passHref>
                  <Link>{product.manufacturer}</Link>
                </NextLink>
              </div>
              <div>
                <h4>Type :</h4>
                <NextLink href={'/'} passHref>
                  <Link>{product.type}</Link>
                </NextLink>
              </div>
            </ListItem>
            <ListItem className={classes.description}>
              <h3>About this item</h3>
              <p>{product.description}</p>
            </ListItem>
            <ListItem>Happy shopping</ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container className={classes.pricebox}>
                  <Grid item xs={6} alignItems={'center'}>
                    <h4>Price :</h4>
                  </Grid>
                  <Grid item xs={6}>
                    <h5>${product.price}</h5>
                  </Grid>
                  <ListItem>
                    {product.shipping == 0
                      ? 'Free shipping'
                      : `+ $${product.shipping} - Shipping & Import Fees `}{' '}
                  </ListItem>
                  <Grid item xs={6}>
                    <h6
                      className={
                        product.countInStock == 0
                          ? classes.stockempty
                          : classes.stockfull
                      }
                    >
                      {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                    </h6>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add To Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid container spacing={1}>
          <h2>More from {product.manufacturer} : </h2>
        </Grid>
        <Grid container spacing={3} className={classes.cards}>
          {data.products
            .filter((x) => x.manufacturer == `${product.manufacturer}`)
            .map((product) => (
              <Card key={product.name} className={classes.card}>
                <NextLink href={`/product/${product.ref}`} passHref>
                  <CardActionArea textAlign="center" flexDirection="column">
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={product.image}
                      alt={product.name}
                      title={product.name}
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
            ))}
        </Grid>
      </Grid>
    </Layout>
  );
}
