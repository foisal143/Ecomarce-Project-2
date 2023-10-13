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
