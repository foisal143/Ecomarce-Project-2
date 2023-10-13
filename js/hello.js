// navbar btn section
const navBtn = document.getElementById('toggleBtn');
const navCross = document.getElementById('crosBtn');
const navContainer = document.getElementById('toggleCont');
const dropDown = document.getElementById('dropdown-menu');
navBtn.addEventListener('click', () => {
  dropDown.style.left = '0px';
  navBtn.style.display = 'none';
  navCross.style.display = 'block';
});
navCross.addEventListener('click', () => {
  dropDown.style.left = '-100vw';
  navCross.style.display = 'none';
  navBtn.style.display = 'block';
});
// profile section
document.getElementById('profileBtn').addEventListener('click', () => {
  const profeleMenu = document.getElementById('profileMenu');
  if (profeleMenu.classList == 'profileMenu') {
    profeleMenu.classList.add('ne');
  } else {
    profeleMenu.classList.remove('ne');
  }
});
document.getElementById('profileBtn2').addEventListener('click', () => {
  const profeleMenu = document.getElementById('profileMenu');
  if (profeleMenu.classList == 'profileMenu') {
    profeleMenu.classList.add('ne');
  } else {
    profeleMenu.classList.remove('ne');
  }
});
// search section btn
const dHidden = document.getElementById('searchContainer');
document.getElementById('searchBtn').addEventListener('click', () => {
  dHidden.style.display = 'block';
});
document.getElementById('crossSearch').addEventListener('click', () => {
  dHidden.style.display = 'none';
});
// looder section
window.addEventListener('load', () => {
  const loder = document.getElementById('loder');
  loder.style.display = 'none';
});

// cart section
document.getElementById('cartBtn').addEventListener('click', () => {
  const profeleMenu = document.getElementById('cartSection');
  if (profeleMenu.classList == 'cartSection') {
    profeleMenu.classList.add('showCart');
  } else {
    profeleMenu.classList.remove('showCart');
  }
});
// add to cart section
let count = 0;
const addCart = document.getElementsByClassName('addCart');
for (const cartBtn of addCart) {
  cartBtn.addEventListener('click', e => {
    count += 1;
    const element = e.target.parentNode.parentNode;
    const innerCart = document.getElementById('cartMenu');
    innerCart.innerHTML = `${element}
    <div class="block">
          <p class="font-monot text-2xl my-5">Quantity: <i class="fa-solid fa-minus ms-20 me-5 cursor-pointer"></i>
            <span id="quantity">1</span> <i class="fa-solid fa-plus mx-5 cursor-pointer"></i>
          </p>
          <button class="px-8 py-2 bg-allColor text-white hover:bg-black rounded">Buy Now</button>
        </div>
    `;
    document.getElementById('notify').style.backgroundColor = 'red';
    document.getElementById('notify').innerText = count;
  });
}
