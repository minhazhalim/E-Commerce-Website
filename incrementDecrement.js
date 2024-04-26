import {getCartProductFromLS} from './getCartProducts.js';
import {updateCartProductTotal} from './updateCartProductTotal.js';
export const incrementDecrement = (event,id,stock,price) => {
     const currentCartElement = document.querySelector(`#card${id}`);
     const productQuantity = currentCartElement.querySelector('.productQuantity');
     const ProductPrice = currentCartElement.querySelector('.productPrice');
     let quantity = 1;
     let localStoragePrice = 0;
     let localCartProducts = getCartProductFromLS();
     let existingProduct = localCartProducts.find((currentProduct) => currentProduct.id === id);
     if(existingProduct){
          quantity = existingProduct.quantity;
          localStoragePrice = existingProduct.price;
     }else{
          localStoragePrice = price;
          price = price;
     }
     if(event.target.className === 'cartIncrement'){
          if(quantity < stock){
               quantity += 1;
          }else if(quantity === stock){
               quantity = stock;
               localStoragePrice = price * stock;
          }
     }
     if(event.target.className === 'cartDecrement'){
          if(quantity > 1) quantity -= 1;
     }
     localStoragePrice = price * quantity;
     localStoragePrice = Number(localStoragePrice.toFixed(2));
     let updatedCart = {id,quantity,price: localStoragePrice};
     updatedCart = localCartProducts.map((currentProduct) => {
          return currentProduct.id === id ? updatedCart : currentProduct;
     });
     localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
     productQuantity.innerText = quantity;
     ProductPrice.innerText = localStoragePrice;
     updateCartProductTotal();
};