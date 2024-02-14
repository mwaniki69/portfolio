const stickyNav = document.getElementById('navScroll');
const stickyNav2 = document.getElementById('workRight');
const mplist = document.getElementById('whLeft');
const homeIcon = document.getElementById('homes');
const upIcon = document.getElementById('up');

const initialHeight = stickyNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > initialHeight) {
    stickyNav2.classList.add('navShrink');
    stickyNav.classList.add('navscrolinks');
    mplist.classList.add('trials32');
    homeIcon.style.visibility = 'visible';
    upIcon.style.visibility = 'visible';
  } else {
    stickyNav2.classList.remove('navShrink');
    mplist.classList.remove('trials32');
    stickyNav.classList.remove('navscrolinks');

    upIcon.style.visibility = 'hidden';
    homeIcon.style.visibility = 'hidden';
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

// ====================================
// const filterContainer = document.querySelector('.gallery-filter'),
//   galleryItems = document.querySelectorAll('.gallery-item');

// filterContainer.addEventListener('click', event => {
//   if (event.target.classList.contains('filter-item')) {
//     // deactivate existing active 'filter-item'
//     filterContainer.querySelector('.activ').classList.remove('activ');
//     // activate new 'filter-item'
//     event.target.classList.add('activ');
//     const filterValue = event.target.getAttribute('data-filter');
//     galleryItems.forEach(item => {
//       if (item.classList.contains(filterValue) || filterValue === 'All') {
//         item.classList.remove('hide');
//         item.classList.add('show');
//       } else {
//         item.classList.remove('show');
//         item.classList.add('hide');
//       }
//     });
//   }
// });
const filterContainer = document.querySelector('.gallery-filter'),
  galleryItems = document.querySelectorAll('.gallery-item');

// Initial filter on page load
window.addEventListener('load', () => {
  const initialFilter = filterContainer.querySelector(
    '.filter-item:first-child'
  ); // Assuming first item is default
  if (initialFilter) {
    initialFilter.click(); // Simulate a click to trigger filtering
  }
});

// Click event listener for manual filtering
filterContainer.addEventListener('click', event => {
  if (event.target.classList.contains('filter-item')) {
    // Deactivate existing active 'filter-item'
    filterContainer.querySelector('.activ').classList.remove('activ');
    // Activate new 'filter-item'
    event.target.classList.add('activ');
    const filterValue = event.target.getAttribute('data-filter');
    galleryItems.forEach(item => {
      if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.classList.remove('hide');
        item.classList.add('show');
      } else {
        item.classList.remove('show');
        item.classList.add('hide');
      }
    });
  }
});
