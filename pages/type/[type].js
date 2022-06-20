import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from '@material-ui/core';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';

import data from '../../utils/data';
import useStyles from '../../utils/style';
import NextLink from 'next/link';

export default function ProductsByType() {
  const classes = useStyles();
  const router = useRouter();
  const { type } = router.query;
  const product = data.products.find((a) => a.type === type);
  console.log(product);
  if (!product) {
    return <div>type Not found</div>;
  }
  return (
    <Layout>
      <div className={classes.container}>
        <NextLink href={'/'} passHref>
          <Link>Go back to the Products list</Link>
        </NextLink>
        <h1>All the {product.type} :</h1>
        <Grid container spacing={3}>
          {data.products
            .filter((x) => x.type == `${product.type}`)
            .map((product) => (
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
