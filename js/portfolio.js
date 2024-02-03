const stickyNav = document.getElementById('navScroll');
// const mplistnav = document.getElementById('triall');
const mplist = document.getElementById('trials2');
const wplistTop = document.getElementById('top');
// const mplistabt = document.getElementById('abtme');

const initialHeight = stickyNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > initialHeight) {
    stickyNav.classList.add('navShrink');
    mplist.classList.add('trials32');
    wplistTop.style.display = 'inline';
    // mplistnav.style.width = '0vw';
    // mplistabt.style.display = 'none';
  } else {
    stickyNav.classList.remove('navShrink');
    mplist.classList.remove('trials32');
    // mplistabt.style.display = 'inline';
    wplistTop.style.display = 'none';
    // mplistnav.style.width = '45vw'; // Add class for animation
  }
});
// ===================

const navlinksEls = document.querySelectorAll('.wpList a');
const sectionsEls = document.querySelectorAll('.section');

let currentSection = 'home';

window.addEventListener('scroll', () => {
  // let activeSectionId; // Store the ID of the active section

  sectionsEls.forEach(sectionsEl => {
    if (window.scrollY >= sectionsEl.offsetTop - 200) {
      currentSection = sectionsEl.id; // Access the ID of the current section
      // Exit the loop as soon as the active section is found
    }
  });

  // currentSection = activeSectionId; // Assign the found ID to currentSection
  console.log(currentSection);

  navlinksEls.forEach(navlinksEl => {
    if (navlinksEl.href && navlinksEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      navlinksEl.classList.add('active');
    }
    console.log(navlinksEl);
  });
});
