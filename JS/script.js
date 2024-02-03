const stickyNav = document.getElementById('navScroll');
const mplistnav = document.getElementById('heroNav');
const mplist = document.getElementById('heroText');
const mplisthme = document.getElementById('home');
const mplistabt = document.getElementById('abtme');

const initialHeight = stickyNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > initialHeight) {
    stickyNav.classList.add('shrink');
    mplist.classList.add('heroExpand');
    mplisthme.style.display = 'inline';
    mplistnav.style.width = '0vw';
    mplistabt.style.display = 'none';
  } else {
    stickyNav.classList.remove('shrink');
    mplist.classList.remove('heroExpand');
    // mplistabt.style.display = 'inline';
    mplisthme.style.display = 'none';
    mplistnav.style.width = '45vw'; // Add class for animation
  }
});
// ====================
