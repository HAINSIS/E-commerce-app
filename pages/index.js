import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

import Layout from '../components/Layout';

//import data from '../utils/data';
import useStyles from '../utils/style';
import NextLink from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';

export default function Home(props) {
  const { products } = props;
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.name}>
              <Card key={product.name} className={classes.card}>
                <NextLink href={`/product/${product.ref}`} passHref>
                  <CardActionArea
                    textAlign="center"
                    flexDirection="column"
                    title={product.name}
                  >
                    <CardMedia
                      className={classes.media}
                      component="img"
                      image={product.image}
                      alt={product.name}
                      title={product.name}
                      objectFit="contain"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={classes.cardName}
                        title={product.name}
                      >
                        {product.name.length > 50
                          ? `${product.name.substring(0, 50)}...`
                          : product.name}
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
                                ? '  Free shipping'
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

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObject),
    },
  };
}
