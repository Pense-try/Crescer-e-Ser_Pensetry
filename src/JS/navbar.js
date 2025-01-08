function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./src/Img/menu-icon.png";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./src/Img/excluir-icon.png";
  }
}