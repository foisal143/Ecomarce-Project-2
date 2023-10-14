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

// search input area for find product
document.getElementById('searchBtn2').addEventListener('click', () => {
  const searchInput = document.getElementById('searchInput').value;

  if (searchInput == 'men fashion') {
    window.location.href = '#menFashion';
    return;
  } else if (searchInput == 'shirt') {
    window.location.href = '#menFashion';
    return;
  } else if (searchInput == 'pants') {
    window.location.href = '#menFashion';
    return;
  } else if (searchInput == 'women fashion') {
    window.location.href = '#womenFashion';
    return;
  } else if (searchInput == 'watch') {
    window.location.href = '#Accessories';
    return;
  } else {
    alert('prduct not found');
  }
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
const addCart = document.getElementsByClassName('card');
for (const cartBtn of addCart) {
  cartBtn.addEventListener('click', e => {
    count += 1;
    const element = e.target.parentNode.parentNode;

    const innerCart = document.getElementById('cartMenu');
    innerCart.innerHTML = `
    <div class="block">
    <p class="font-monot text-2xl my-5">Quantity: <i id="minus" class="fa-solid fa-minus ms-10 me-5 cursor-pointer"></i>
    <span id="quantity">1</span> <i id="plus" class="fa-solid fa-plus mx-5 cursor-pointer"></i>
    </p>
      
    <button class="px-8 py-2 my-3 bg-allColor text-white hover:bg-black rounded">Buy Now</button>
    </div>
    `;

    // all variable here
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const quantityField = document.getElementById('quantity');
    const quantityString = quantityField.innerText;
    let quantity = parseInt(quantityString);

    // increase and decrease the amount of quantity
    minus.addEventListener('click', () => {
      quantity -= 1;
      quantityField.innerText = quantity;
    });
    plus.addEventListener('click', () => {
      quantity += 1;
      quantityField.innerText = quantity;
    });

    const li = document.createElement('li');
    li.append(element);

    innerCart.prepend(li);
    document.getElementById('notify').style.backgroundColor = 'red';
    document.getElementById('notify').innerText = count;
  });
}
