console.log("asdasda")

const burgerBtn = document.getElementById("burger-btn");
const burgerMenu = document.getElementById("burger-menu");
const burgerCloseBtn = document.getElementById("burger-close-btn");


  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu-active');
  })

  burgerCloseBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu-active');
  })
