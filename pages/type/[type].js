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
import Layout from '../../components/Layout';
import useStyles from '../../utils/style';
import NextLink from 'next/link';
import db from '../../utils/db';
import Product from '../../models/Product';

export default function ProductsByType(props) {
  const { products } = props;
  const { type } = props;
  const classes = useStyles();
  const product = products.find((a) => a.type === type);
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
          {products
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { type } = params;
  await db.connect();
  const products = await Product.find({}).lean();

  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObject),
      type: type,
    },
  };
}
