const stickyNav = document.getElementById('navScroll');
const mplistnav = document.getElementById('trials');
const mplist = document.getElementById('trials2');
const mplisthme = document.getElementById('hme');
const mplistabt = document.getElementById('abtme');

const initialHeight = stickyNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > initialHeight) {
    stickyNav.classList.add('shrink');
    mplist.classList.add('trial');
    mplisthme.style.display = 'inline';
    mplistnav.style.width = '0vw';
    mplistabt.style.display = 'none';
  } else {
    stickyNav.classList.remove('shrink');
    mplist.classList.remove('trial');
    mplistabt.style.display = 'inline';
    mplisthme.style.display = 'none';
    mplistnav.style.width = '45vw'; // Add class for animation
  }
});
