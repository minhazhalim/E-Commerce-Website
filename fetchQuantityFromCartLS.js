import {getCartProductFromLS} from './getCartProducts.js';
export const fetchQuantityFromCartLS = (id,price) => {
     let cartProducts = getCartProductFromLS();
     let existingProduct = cartProducts.find((currentProduct) => currentProduct.id === id);
     let quantity = 1;
     if(existingProduct){
          quantity = existingProduct.quantity;
          price = existingProduct.price;
     }
     return {quantity,price};
};