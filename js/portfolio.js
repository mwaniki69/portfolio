const stickyNav = document.getElementById('navScroll');
// const mplistnav = document.getElementById('triall');
const mplist = document.getElementById('trials2');
const mplisthme = document.getElementById('homes');
const mplistabt = document.getElementById('abtme');

const initialHeight = stickyNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > initialHeight) {
    stickyNav.classList.add('shrink');
    mplist.classList.add('trials32');
    mplisthme.style.display = 'inline';
    mplistnav.style.width = '0vw';
    mplistabt.style.display = 'none';
  } else {
    stickyNav.classList.remove('shrink');
    mplist.classList.remove('trials32');
    mplistabt.style.display = 'inline';
    mplisthme.style.display = 'none';
    mplistnav.style.width = '45vw'; // Add class for animation
  }
});
