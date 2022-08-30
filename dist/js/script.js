// Navbar Fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}


// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navbar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// let navbarlinks = select('#navbar .scrollto', true) 
// const navbarlinksActive = () => {
//   let position = window.scrollY + 200
//   navbarlinks.forEach(navbarlink => {
//     if (!navbarlink.hash) return
//     let section = select(navbarlink.hash)
//     if (!section) return
//     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//       navbarlink.classList.add('active')
//     } else {
//       navbarlink.classList.remove('active')
//     }
//   })
// }
// window.addEventListener('load', navbarlinksActive);
// onscroll(document, navbarlinksActive);

// const portfolioLightbox = GLightbox({
//     selector: '.portfolio-lightbox'
// });