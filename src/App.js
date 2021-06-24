import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

const App = () => {
   const [products, setProducts] = useState([]);


   const fetchProducts = async () => {
      const { data } = await commerce.products.list();

      setProducts(data);
   }

 

   const handleAddToCart = async (productId, quantity) => {
      // const response = await commerce.cart.add(productId, quantity);
      const item = await commerce.cart.add(productId, quantity);

   }

   useEffect(() => {
      fetchProducts();
   },[]);


   return (
      <div>
         <Navbar />
         <Products products={products} onAddToCart={handleAddToCart} />

      </div>
   )
}

export default App;