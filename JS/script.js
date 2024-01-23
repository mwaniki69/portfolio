////////////button scrolling  //////////////////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const navLinks = document.querySelector('.nav-link1');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

//smooth page navigation
document.querySelector('.nav__links').addEventListener('click', function (em) {
  em.preventDefault();
  //console.log(e.target);

  //matching strategy
  if (em.target.classList.contains('nav__link')) {
    const id = em.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
