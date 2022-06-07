import React from 'react';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import { Grid, Link, List, ListItem } from '@material-ui/core';
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
            width={450}
            height={450}
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
                : `$${product.shipping} - Shipping & Import Fees `}{' '}
            </ListItem>
            <ListItem>
              <h4>Rating : </h4> {product.rating} <h4>Reviews : </h4>
              {product.numReviews}
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
                <NextLink href={'/'} passHref>
                  <Link>{product.manufacturer}</Link>
                </NextLink>
              </div>
              <div>
                <h4>Type :</h4>
                <NextLink href={'/'} passHref>
                  <Link>{product.type}</Link>
                </NextLink>
              </div>
              <div>
                <h4>Stock :</h4> {product.countInStock}
              </div>
            </ListItem>
            <ListItem className={classes.description}>
              <h3>About this item</h3>
              <p>{product.description}</p>
            </ListItem>
            <ListItem>Happy shopping</ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}
