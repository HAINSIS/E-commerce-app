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
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={650}
            height={650}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem className={classes.categoriesbox}>
              <div>Categories :</div>
              <div className={classes.categories}>
                {product.category.map((x) => (
                  <button>{x.name}</button>
                ))}
              </div>
            </ListItem>
            <ListItem>
              Manufacturer :
              <NextLink href={'/'} passHref>
                <Link>{product.manufacturer}</Link>
              </NextLink>
            </ListItem>
            <ListItem>Type : {product.type}</ListItem>
            <ListItem>Stock : {product.countInStock}</ListItem>
            <ListItem>
              A Tottal of {product.numReviews} Rated : {product.rating}
            </ListItem>
            <ListItem>{product.description}</ListItem>
            <ListItem>Happy shopping</ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}
