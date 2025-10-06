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