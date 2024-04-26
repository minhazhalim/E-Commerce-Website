import {getCartProductFromLS} from './getCartProducts.js';
import {showToast} from './showToast.js';
import {updateCartValue} from './updateCartValue.js';
getCartProductFromLS();
export const addToCart = (event,id,stock) => {
     let arrayLocalStorageProduct = getCartProductFromLS();
     const currentProductElement = document.querySelector(`#card${id}`);
     let quantity = currentProductElement.querySelector('.productQuantity').innerText;
     let price = currentProductElement.querySelector('.productPrice').innerText;
     price = price.replace('₹',"");
     let existingProduct = arrayLocalStorageProduct.find((currentProduct) => currentProduct.id === id);
     if(existingProduct && quantity > 1){
          quantity = Number(existingProduct.quantity) + Number(quantity);
          price = Number(price * quantity);
          let updatedCart = {id,quantity,price};
          updatedCart = arrayLocalStorageProduct.map((currentProduct) => {
               return currentProduct.id === id ? updatedCart : currentProduct;
          });
          localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
          showToast('add',id);
     }
     if(existingProduct) return false;
     price = Number(price * quantity);
     quantity = Number(quantity);
     arrayLocalStorageProduct.push({id,quantity,price});
     localStorage.setItem('cartProductLS',JSON.stringify(arrayLocalStorageProduct));
     updateCartValue(arrayLocalStorageProduct);
     showToast('add',id);
};