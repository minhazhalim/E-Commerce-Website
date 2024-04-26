import {getCartProductFromLS} from './getCartProducts.js';
export const updateCartProductTotal = () => {
     let productSubTotal = document.querySelector('.productSubTotal');
     let productFinalTotal = document.querySelector('.productFinalTotal');
     let localCartProducts = getCartProductFromLS();
     let totalProductPrice = localCartProducts.reduce((accumulator,current) => {
          let productPrice = parseInt(current.price) || 0;
          return accumulator + productPrice;
     },0);
     productSubTotal.textContent = `${totalProductPrice}`;
     productFinalTotal.textContent = `${totalProductPrice + 50}`;
};