import products from './products.json';
import {fetchQuantityFromCartLS} from './fetchQuantityFromCartLS.js';
import {getCartProductFromLS} from './getCartProducts.js';
import {incrementDecrement} from './incrementDecrement.js';
import {removeProductionFromCart} from './removeProductionFromCart.js';
import {updateCartProductTotal} from './updateCartProductTotal.js';
let cartProducts = getCartProductFromLS();
let filterProducts = products.filter((currentProduct) => {
     return cartProducts.some((currentElement) => currentElement.id === currentProduct.id);
});
const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemplate');
const showCartProduct = () => {
     filterProducts.forEach((currentProduct) => {
          const {category,id,image,name,stock,price} = currentProduct;
          let productClone = document.importNode(templateContainer.content,true);
          const lSActualData = fetchQuantityFromCartLS(id,price);
          productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);
          productClone.querySelector('.category').textContent = category;
          productClone.querySelector('.productName').textContent = name;
          productClone.querySelector('.productImage').src = image;
          productClone.querySelector('.productQuantity').textContent = lSActualData.quantity;
          productClone.querySelector('.productPrice').textContent = lSActualData.price;
          productClone.querySelector('.stockElement').addEventListener('click',(event) => {
               incrementDecrement(event,id,stock,price);
          });
          productClone.querySelector('.remove-to-cart-button').addEventListener('click',() => removeProductionFromCart(id));
          cartElement.appendChild(productClone);
     });
};
showCartProduct();
updateCartProductTotal();