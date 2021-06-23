import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
   {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://5.imimg.com/data5/KF/QF/TG/ANDROID-94833360/product-jpeg-500x500.jpeg'},
   {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://www.techadvisor.com/cmsdata/features/3802413/new-apple-macbook-air-2021-release-date-price-spec-rumours-main_thumb800.png'},
]

const Products = () => {
   const classes = useStyles();

   return (
      <main className={classes.content}>
         <div className={classes.toolbar} />
         <Grid container justify="center" spacing={4}>
            {products.map((product) => (
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
               </Grid>
            ))}
         </Grid>
      </main>
   )
}

export default Products;