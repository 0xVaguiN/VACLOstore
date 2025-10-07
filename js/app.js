const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index = i;
  if (index < 0) index = 2;
  if (index > 2) index = 0;
  carousel.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

setInterval(() => {
  showSlide(index + 1);
}, 5000);

const subscribeForm = document.querySelector(".subscribe-card-button");
const emailInput = document.querySelector(".subscribe-card-input");
const successMessage = document.querySelector(".success-message");

subscribeForm.addEventListener("click", function() {
   emailInput.value = "";
   successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000);
});


const cartMenu = document.getElementById('cart-menu');
const closeCart = document.getElementById('close-cart');
const goBack = document.getElementById('go-back');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartIcon = document.querySelectorAll('.cart');

let cart = [];


cartIcon.addEventListener('click', () => {
  cartMenu.classList.add('active');
  overlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
  cartMenu.classList.remove('active');
  overlay.classList.remove('active');
});

goBack.addEventListener('click', () => {
  cartMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  cartMenu.classList.remove('active');
  overlay.classList.remove('active');
});


function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();


  cartMenu.classList.add('active');
  overlay.classList.add('active');
}


function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <span>${item.name}</span>
      <div>
        <button onclick="changeQty('${item.name}', -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.name}', 1)">+</button>
      </div>
      <span>R$ ${(item.price * item.qty).toFixed(2)}</span>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = total.toFixed(2);
}

function changeQty(name, amount) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.qty += amount;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.name !== name);
    }
  }
  updateCart();
}