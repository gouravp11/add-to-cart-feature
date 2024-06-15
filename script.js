// Products Array 
var products = [
  {
    img: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "moisturizer",
    price: 1,
    id: 0
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "nike shoes",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "sunglasses",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "mayonaise",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "face cream",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "perfume",
    price: 1
  },
];

// Utility Functions
function capitalizer(str) {
  var capitalizedArr = str.split(" ").map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  var capitalizedStr = capitalizedArr.join(" ");
  return capitalizedStr;
}
function productFinder(array, targetIndex) {
  return array.find(item => item.index === targetIndex);
}
// Main Functions
function createProductElements() {
  var clutter = "";
  products.forEach(function (product, i) {
    clutter += `<div class="product">
                      <img src="${product.img}" alt="img not loaded">
                      <h5 class="product-name">${capitalizer(product.name)}</h5>
                      <h6 class="price">$${product.price}</h6>
                      <button data-index= ${i} id= "add-${i}" class="add-to-cart btn">Add to cart</button>
                    </div>`;
  });
  document.querySelector("#products").innerHTML = clutter;
}
function cartToggler() {
  var flag = 0;
  document.querySelector('#cart-btn').addEventListener('click', function () {
    if (flag == 0) {
      document.querySelector('#cart-table').style.right = '0%';
      flag = 1;
    }
    else {
      document.querySelector('#cart-table').style.right = '-100%';
      flag = 0;
    }
  })
}
createProductElements();
cartToggler();

function updateCartValue(arr) {
  let total = 0;
  for (k = 0; k < arr.length; k++) {
    total += (arr[k].price) * (arr[k].quantity);
  }
  // console.log(total)
  document.querySelector("#total").innerHTML = total;
}
function updateProductCount(count) {
  document.querySelector("#product-count").innerHTML = count;
}
var cartProducts = [];
var i, quantity;
var productCount = 0;
var cartContent = document.querySelector(".cart-content");
function cartModifier() {
  console.log("hei")
}
var flag= false;
var decrease;
function addToCart() {
  var keyExists;
  var objIdx;
  document.querySelector('#products').addEventListener('click', function (dets) {
    if (dets.target.classList.contains('add-to-cart')) {
      flag= true;
      i = Number(dets.target.dataset.index);
      for (let j = 0; j < cartProducts.length; j++) {
        if (cartProducts[j].index == i) {
          keyExists = true
          objIdx = j;
          break;
        }
        else {
          keyExists = false
        }
      }
      if (keyExists) {
        if (cartProducts[objIdx].quantity < 10) {
          let q = ++cartProducts[objIdx].quantity;
          document.querySelector(`#quan-${i}`).innerHTML = q;
          // console.log(cartProducts)
          updateCartValue(cartProducts)
          document.querySelector(`#price-${i}`).innerHTML = `$${q * cartProducts[objIdx].price}`;
        }
        else {
          alert("Quantity cannot exceed 10!");
        }
      }
      else {
        cartContent.innerHTML += `<div id="pro-${i}" class="added-product">
        <div class="product-info">
            <img src="${products[i].img}"
                alt="img not loaded">
            <h4>${capitalizer(products[i].name)}</h4>
        </div>
        <div class="product-price">
            <h4 id="price-${i}">$${products[i].price}</h4>
        </div>
        <div class="quantity">
            <i id="dec-${i}" class="ri-subtract-line"></i><span id="quan-${i}">1</span><i id="inc-${i}"class="ri-add-line"></i>
        </div>
        </div>`;
        quantity = Number(document.querySelector(`#quan-${i}`).textContent);
        productCount++;
        updateProductCount(productCount);
        cartProducts.push({ 'index': i, 'price': products[i].price, 'quantity': quantity });
        // console.log(cartProducts);
      }
    }
  })
}
addToCart();