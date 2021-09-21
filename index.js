menuIcon = document.querySelector('.hamburger')
mainNav = document.querySelector('#menucontainer')

menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('is-active');
      mainNav.classList.toggle('open');
})
 