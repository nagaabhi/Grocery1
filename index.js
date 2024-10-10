const displaySearchBar = document.querySelector('.display-search-bar');

const searchIcon = document.querySelector('.js-search-icon');
searchIcon.addEventListener('click', () => {
  displaySearchBar.classList.add("js-display-search-bar");
})

const removeSearchBar = document.querySelector('.js-remove-search-bar');
removeSearchBar.addEventListener('click', () => {
  displaySearchBar.classList.remove("js-display-search-bar");
})

const displayContactDetails = document.querySelector('.display-contact-details');

const loginIcon = document.querySelector('.js-login-icon');
loginIcon.addEventListener('click', () => {
  displayContactDetails.classList.add("js-display-login-details")

})

const removeLoginButton = document.querySelector('.js-remove-containers');
removeLoginButton.addEventListener('click', () => {
  displayContactDetails.classList.remove("js-display-login-details");
})

const displayFeaturesData = document.querySelector('.js-display-deatures-container');

const ourFeaturesData = [{
  image : "https://img.freepik.com/premium-photo/variety-fresh-fruits-vegetables-herbs-spices-including-red-peppers-red-cabbage-broccoli-lemons-oranges-arranged-white-background_1352884-14677.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  dataName : "Freash And Organic",
  data : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, illum, dicta dolor !"

},{
  image : "https://img.freepik.com/premium-vector/delivery-man-delivering-parcel-scooter-with-parcel-speedy-vector-illustration-urban-delivery-service_1167562-15723.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  dataName : "Free Deliery",
  data : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, illum, dicta dolor !"
},{
  image : "https://img.freepik.com/free-vector/mobile-payments-concept-illustration_114360-1243.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  dataName : "Easy Payments",
  data : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, illum, dicta dolor !"
},];

let renderFeaturesData = '';
ourFeaturesData.forEach((dataItem) => {
  renderFeaturesData += `

    <div class="container-one">
        <img src="${dataItem.image}" alt="">
        <p class="heading">${dataItem.dataName}</p>
        <p>${dataItem.data}</p>
        <button>Read More</button>
        

      </div>

      
  `;
})

displayFeaturesData.innerHTML = renderFeaturesData;

let displayProductsContainer = document.querySelector('.products-container');
const displayProductsData = [{
  productImage : "https://img.freepik.com/premium-photo/raw-beef-cuts-with-marbling-herb-garnish_942243-16370.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Meat",
  startPrice : "5.99",
  endPrice : "6.90"
},{
  productImage :"https://img.freepik.com/premium-photo/red-cut-onion-white-wall_29402-1057.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Onions",
  startPrice : "3.00",
  endPrice :"4.00"

},{
  productImage : "https://img.freepik.com/premium-photo/fresh-green-cabbage-white-background_21085-72601.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Cabbage",
  startPrice : "5.88",
  endPrice : "6.77"
 
},{
  productImage : "https://img.freepik.com/free-photo/raw-cross-ingredient-studio-citrus_1172-204.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Orange",
  startPrice : "2.99",
  endPrice : "3.90"

},{
  productImage : "https://img.freepik.com/free-photo/bananas_1339-1191.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Banana",
  startPrice : "4.66",
  endPrice : "5.66"
},{
  productImage :"https://img.freepik.com/premium-photo/image-ripe-papaya-showing-its-vibrant-orange-flesh-fresh-texture_1151123-61701.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Papaya",
  startPrice : "6.77",
  endPrice : "9.66"
}
,{
  productImage : "https://img.freepik.com/premium-photo/apples-high-resolution-photography-generative-ai_1114068-40903.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Apples",
  startPrice : "5.66",
  endPrice : "7.66"
},{
  productImage : "https://img.freepik.com/premium-psd/pineapple-with-green-leaf-top-it_1046120-336.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Pine Apple",
  startPrice : "3.55",
  endPrice : "7.88"
},{
  productImage : "https://img.freepik.com/premium-photo/single-carrot-with-green-tops-white-background_1286611-14964.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Carrot",
  startPrice : "4.99",
  endPrice : "5.90"
},{
  productImage :"https://img.freepik.com/free-photo/lime-isolated_93675-131268.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Lemon",
  startPrice : "5.00",
  endPrice :"6.00"

},{
  productImage : "https://img.freepik.com/free-photo/potato-table_144627-14822.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Potato",
  startPrice : "4.88",
  endPrice : "6.77"
 
},{
  productImage : "https://img.freepik.com/premium-photo/photograph-fresh-avocados_1004780-4917.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Avacado",
  startPrice : "4.99",
  endPrice : "6.90"

},{
  productImage : "https://img.freepik.com/free-photo/bananas_1339-1191.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Banana",
  startPrice : "4.66",
  endPrice : "5.66"
},{
  productImage :"https://img.freepik.com/premium-photo/image-ripe-papaya-showing-its-vibrant-orange-flesh-fresh-texture_1151123-61701.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Papaya",
  startPrice : "6.77",
  endPrice : "9.66"
}
,{
  productImage : "https://img.freepik.com/premium-photo/apples-high-resolution-photography-generative-ai_1114068-40903.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Apples",
  startPrice : "5.66",
  endPrice : "7.66"
},{
  productImage : "https://img.freepik.com/premium-psd/pineapple-with-green-leaf-top-it_1046120-336.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  itemName : "Fresh Pine Apple",
  startPrice : "3.55",
  endPrice : "7.88"
}
];
let renderProductsData = '';
displayProductsData.forEach((data) => {
  renderProductsData += `

     <div class="products-container-one">
      <img src="${data.productImage}" alt="">
      <p class="heading">${data.itemName}</p>
      <p>&dollar;${data.startPrice} - &dollar;${data.endPrice} </p>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      <br>
      <button class="js-add-to-cart-button" data-image="${data.productImage}" data-name="${data.itemName}" data-price="${data.startPrice}">Add To Cart</button>
    </div>
   
      
  
  `;
})

displayProductsContainer.innerHTML = renderProductsData;

const scrollContainer = document.getElementById('products-container');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

// Scroll to the right
scrollRightBtn.addEventListener('click', () => {
  displayProductsContainer.scrollBy({
    left: 500, // Adjust the amount to scroll
    behavior: 'smooth' // Smooth scrolling
  });
});

// Scroll to the left
scrollLeftBtn.addEventListener('click', () => {
  displayProductsContainer.scrollBy({
    left: -500, // Scroll to the left
    behavior: 'smooth'
  });
});


const displayCatagaries = document.querySelector('.js-display-categaries');

const categaiesContainer = [{
  image : "https://img.freepik.com/premium-photo/fresh-fruits-against-white-background_1048944-27670812.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  name : "Fresh Fruits",
  offer : "50%"
},{
  image : "https://img.freepik.com/premium-photo/bottle-milk-bottle-milk-cow_1267893-12134.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  name : "Dairy Products",
  offer : "30%"
},{
  image : "https://img.freepik.com/free-photo/raw-meat_144627-33838.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  name : "Fresh Meat",
  offer : "20%"
},{
  image : "https://img.freepik.com/premium-photo/wooden-plate-with-spices-herbs-it_659788-7004.jpg?ga=GA1.1.960132432.1720892562&semt=ais_hybrid",
  name : "Masala Items",
  offer : "30%"
}];

let renderCategaries = '';
categaiesContainer.forEach((cat) => {
  renderCategaries += `

    <div class="cat-container-one">

  
      <img src="${cat.image}" alt="">
      <h1>${cat.name}</h1>
      <p>Upto <span>${cat.offer}</span>off</p>
      <button>Read More</button>
    </div>
     
  `;
})

displayCatagaries.innerHTML = renderCategaries;


const displayCartOnclick = document.querySelector('.overall-cart');

const cartIcon = document.querySelector('.js-cart-icon');
cartIcon.addEventListener('click', () => {

  displayCartOnclick.classList.add("js-display-cart");
  removeSearchBar.addEventListener('click', () => {
    displaySearchBar.classList.remove("js-display-search-bar");
})
})

const removeCartOnclick = document.querySelector('.js-remove-cart');
removeCartOnclick.addEventListener('click', () => {
  displayCartOnclick.classList.remove("js-display-cart");

})


const scrollToClass = ['header-part-image', 'our-features-container', 'Our-Porducts-container', 'our-categaries-container'];

let anchorTags = document.querySelectorAll('a');


anchorTags.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    if(anchor.innerHTML === 'Home'){
      document.querySelector(`.${scrollToClass[0]}`).scrollIntoView(
        {
          behavior : 'smooth'
        }
      )
    }else if(anchor.innerHTML === 'Features'){
      document.querySelector(`.${scrollToClass[1]}`).scrollIntoView({
        behavior : 'smooth'
      })
    }else if(anchor.innerHTML === 'Products'){
      document.querySelector(`.${scrollToClass[2]}`).scrollIntoView({
        behavior : 'smooth'
      })
    }else if(anchor.innerHTML === 'Categaries'){
      document.querySelector(`.${scrollToClass[3]}`).scrollIntoView({
        behavior : 'smooth'
      })
    }
  })
})


const showCart = document.querySelector('.cart-container');

function moveToCartOnclick(){
  displayCartOnclick.scrollIntoView({
    behavior : 'smooth'
  })
  displayCartOnclick.classList.add("js-display-cart");

} 

let imageIcon = '';
let productName = '';
let productPrice = '';




function fetchProductDetails(button){

  imageIcon = button.dataset.image;
  productName = button.dataset.name;
  productPrice = button.dataset.price;
  console.log(imageIcon, productName, productPrice)

}
let updateCart = '';
function displayItemInCart(){

  
  updateCart += `

    <div class="product-image">
      <img src="${imageIcon}" alt="">


    </div>
    <div class="product-name-and-price">
      <p class="js-display-product-name">${productName}</p>
      <p>&dollar;<span class="js-display-product-price">${productPrice}</span></p>

    </div>
    <div class="delete-button">
      <button><img src="https://cdn-icons-png.flaticon.com/128/565/565491.png" alt=""></button>

    </div>
      
  `;

  showCart.innerHTML = updateCart;



  


}

function removeItemFromCart(){
  showCart.innerHTML = "none";
}

const deleteItem = document.querySelector('.js-delete-button');
deleteItem.addEventListener('click', () => {
  removeItemFromCart();
})



const addToCartButton = document.querySelectorAll('.js-add-to-cart-button');
addToCartButton.forEach((button) => {
  button.addEventListener('click', () => {

    moveToCartOnclick();
    fetchProductDetails(button);
    displayItemInCart();

    
  })
})


const shopNowButton = document.querySelector('.js-shop-now-button');
shopNowButton.addEventListener('click', () => {
  document.querySelector(`.${scrollToClass[2]}`).scrollIntoView({
    behavior : 'smooth'
  })
})

const scrollHeader = document.querySelector('.header-part-image');

setTimeout(() => {
  scrollHeader.scollRight({
    behavior : 'smooth'
  })
  
}, 1000);




let editNavbar = document.querySelector('.navbar');
editNavbar.innerHTML = 'hello';






