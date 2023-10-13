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

// search section btn
document.getElementById('searchBtn').addEventListener('click', () => {
  const dHidden = document.getElementById('searchContainer');

  dHidden.style.display = 'flex';
});
