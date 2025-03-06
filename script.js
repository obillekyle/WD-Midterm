window.onscroll = function (e) {
  document
    .querySelector('.mega-menu')
    ?.classList.toggle('scrolled', window.scrollY > 0);
};
