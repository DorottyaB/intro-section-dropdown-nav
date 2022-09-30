const navLink1 = document.getElementById('features');
const navLink2 = document.getElementById('company');
const dropdown1 = document.getElementById('dropdown-1');
const dropdown2 = document.getElementById('dropdown-2');
const path1 = document.getElementById('path-1');
const path2 = document.getElementById('path-2');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function changeSvgPath() {
  if (!dropdown1.classList.contains('hidden')) {
    path1.setAttribute('d', 'm1 5 4-4 4 4');
  } else if (!dropdown2.classList.contains('hidden')) {
    path2.setAttribute('d', 'm1 5 4-4 4 4');
  } else {
    path1.setAttribute('d', 'm1 1 4 4 4-4');
    path2.setAttribute('d', 'm1 1 4 4 4-4');
  }
}

hamburger.addEventListener('click', mobileMenu);

navLink1.addEventListener('click', () => {
  if (!navMenu.classList.contains('active')) {
    dropdown2.classList.add('hidden');
  }
  dropdown1.classList.toggle('hidden');
  changeSvgPath();
});

navLink2.addEventListener('click', () => {
  if (!navMenu.classList.contains('active')) {
    dropdown1.classList.add('hidden');
  }
  dropdown2.classList.toggle('hidden');
  changeSvgPath();
});

document.body.addEventListener('click', e => {
  if (
    e.target !== navLink1 &&
    e.target !== navLink2 &&
    e.target !== dropdown1 &&
    e.target !== dropdown2
  ) {
    if (!dropdown1.classList.contains('hidden') || !dropdown2.classList.contains('hidden')) {
      dropdown1.classList.add('hidden');
      dropdown2.classList.add('hidden');
      changeSvgPath();
    }
  }
});

document.querySelectorAll('.dropdown-link-1').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();
  });
});

document.querySelectorAll('.dropdown-link-2').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation();
  });
});
