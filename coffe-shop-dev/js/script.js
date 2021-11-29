function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support === true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const burger = document.querySelector('.burger'),
    menuList = document.querySelector('.menu__list'),
    btn = document.querySelector('.burger span'),
    menuLinks = document.querySelectorAll('.menu__link');

  burger.addEventListener('click', () => {
    menuList.classList.toggle('active');
    btn.classList.toggle('active');
  });


  menuLinks.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target === item && !menuList.classList.contains('active')) {
        e.preventDefault();
      }
    });
  });

});