/* Get the menu element */
const headerMenu = document.querySelector('.header__nav');

/* Set initial scroll position */
let prevScrollPos = window.pageYOffset;

/* Scroll detection function */
function detectScrollDirection() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    /* Scrolling up */
    headerMenu.classList.remove('hidden_nav');
  } else {
    /* Scrolling down */
    headerMenu.classList.add('hidden_nav');
  }

  /* Update previous scroll position */
  prevScrollPos = currentScrollPos;
}

/* Add event listener to window object for scroll detection */
window.addEventListener('scroll', detectScrollDirection);

/* Adding the current year to footer */
const currentYear = new Date().getFullYear();
document.querySelector('.year').innerHTML = currentYear;