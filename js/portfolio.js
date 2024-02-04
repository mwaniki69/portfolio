const stickyNav = document.getElementById('navScroll');
// const mplistnav = document.getElementById('triall');
const mplist = document.getElementById('trials2');
// const wplistTop = document.getElementById('top');
// const mplistabt = document.getElementById('abtme');

const initialHeight = stickyNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > initialHeight) {
    stickyNav.classList.add('navShrink');
    mplist.classList.add('trials32');
    // wplistTop.style.display = 'inline';
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
  // console.log(currentSection);

  navlinksEls.forEach(navlinksEl => {
    if (navlinksEl.href && navlinksEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      navlinksEl.classList.add('active');
    }
    // console.log(navlinksEl);
  });
});

// ================================================
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//////////////MODAL//////////
// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
// .=========
function openModal(event) {
  // Prevent default link behavior
  event.preventDefault();

  // Get the clicked link and its target modal ID
  const clickedLink = event.target;
  const modalId = clickedLink.getAttribute('href').substring(1); // Remove # from href

  // Find the modal element with the matching ID
  const modal = document.getElementById(modalId);

  // Check if modal exists
  if (modal) {
    const closeButton = modal.querySelector('.btn--close-modal');
    const overlay = document.querySelector('.overlay');
    // Open the modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // close modal by button and overlay
    const closeModal = function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    };
    closeButton.addEventListener('click', () => closeModal(modal));
    overlay.addEventListener('click', () => closeModal(modal));
  } else {
    console.error(`Modal with ID '${modalId}' not found!`);
  }
}

// Add click event listener to all links with a specific class (e.g., "modal-link")
const modalLinks = document.querySelectorAll('.modal-link');
modalLinks.forEach(link => link.addEventListener('click', openModal));
