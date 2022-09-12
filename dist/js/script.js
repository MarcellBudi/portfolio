// Navbar Fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        // header.classList.add('navbar-fixed');
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

// aos animation
const mySkills = document.querySelectorAll('.my-skills');
mySkills.forEach((img, i) => {
  img.dataset.aos = 'fade-down';
  img.dataset.aosDelay = i * 50;
  img.dataset.aosDuration = 1000;
});
AOS.init({
  once: true,
});

// gsap animation
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {duration: 3, delay: 1.5, text: 'Web Developer & Web Design'});
gsap.from('.navbar', {duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce' });
gsap.from('.display', {duration: 1, x: -50, opacity: 0, delay: 0.5, ease: 'back' });

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true) 
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  //  let selectHeader = select('#header')
  //  if (selectHeader) {
  //    const headerScrolled = () => {
  //      if (window.scrollY > 100) {
  //        selectHeader.classList.add('header-scrolled')
  //      } else {
  //        selectHeader.classList.remove('header-scrolled')
  //      }
  //    }
  //    window.addEventListener('load', headerScrolled)
  //    onscroll(document, headerScrolled)
  //  }
 
   /**
    * Back to top button
    */
  //  let backtotop = select('.back-to-top')
  //  if (backtotop) {
  //    const toggleBacktotop = () => {
  //      if (window.scrollY > 100) {
  //        backtotop.classList.add('active')
  //      } else {
  //        backtotop.classList.remove('active')
  //      }
  //    }
  //    window.addEventListener('load', toggleBacktotop)
  //    onscroll(document, toggleBacktotop)
  //  }

  /**
   * Mobile nav toggle
   */
  //  on('click', '.mobile-nav-toggle', function(e) {
  //   select('#navbar').classList.toggle('navbar-mobile')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })

  /**
   * Mobile nav dropdowns activate
   */
  // on('click', '.navbar .dropdown > a', function(e) {
  //   if (select('#navbar').classList.contains('navbar-mobile')) {
  //     e.preventDefault()
  //     this.nextElementSibling.classList.toggle('dropdown-active')
  //   }
  // }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  // on('click', '.scrollto', function(e) {
  //   if (select(this.hash)) {
  //     e.preventDefault()

  //     let navbar = select('#navbar')
  //     if (navbar.classList.contains('navbar-mobile')) {
  //       navbar.classList.remove('navbar-mobile')
  //       let navbarToggle = select('.mobile-nav-toggle')
  //       navbarToggle.classList.toggle('bi-list')
  //       navbarToggle.classList.toggle('bi-x')
  //     }
  //     scrollto(this.hash)
  //   }
  // }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

})()



const input = document.querySelector("#email"), 
  emailIcon = document.querySelector(".email-icon")

  input.addEventListener("keyup", () =>{
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(input.value === ""){
      emailIcon.classList.replace("uil-check-circle", "uil-envelope");
      return emailIcon.style.color = "#b4b4b4";
    }
    if(input.value.match(pattern)){
      emailIcon.classList.replace("uil-envelope", "uil-check-circle");
      return emailIcon.style.color = "#4bb543"
    }
    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
    emailIcon.style.color = "#de0611"
  })