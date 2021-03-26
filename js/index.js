// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

const price = product.querySelector('.price span').innerHTML;

const quantity = product.querySelector('.quantity input').value;

const priceTotal= (price * quantity)
product.querySelector('.subtotal span').innerHTML=priceTotal;

}


function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
function subtotalUpdate(prod){
  
}

  // document.querySelector('##calculate').onclick = function() {
  //   console.log('calculating')
  }

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
