window.onscroll = function () {
  document
    .querySelector('.mega-menu')
    ?.classList.toggle('scrolled', window.scrollY > 0);
};
