const toggleButton = document.getElementsByClassName("openNavigationBar-mobile")[0];
const getNavList = document.getElementsByClassName("navigation-list")[0];
const getNavigation = document.getElementsByClassName("navigation-bar")[0];

$ (function () {
    $(".openNavigationBar-mobile").on('click', () => {
       if (getNavList.getAttribute('id').match('open')){
           $('.navigation-list').effect('clip',400, () => {
            getNavList.setAttribute('id','close');
           });
      }
      else if (getNavList.getAttribute('id').match('close')){
        getNavList.setAttribute('id','open');
        $('.navigation-list').effect('slide',{direction: 'right'},400);
     }
    });  
});
$ (function () {
    $(".nav-icons-links").on('click', () => {
       if (getNavList.getAttribute('id').match('open')){
           $('.navigation-list').effect('clip',400, () => {
            getNavList.setAttribute('id','close');
           });
      }
      else if (getNavList.getAttribute('id').match('close')){
        getNavList.setAttribute('id','open');
        $('.navigation-list').effect('slide',{direction: 'right'},400);
     }
    });  
});

let scrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (scrollY < window.scrollY && window.scrollY > 150) {
            getNavigation.removeAttribute('id');
            getNavigation.setAttribute('id','movingDown');
        }
    else  {
        getNavigation.removeAttribute('id');
        getNavigation.setAttribute('id','movingUp');
    }
    scrollY = window.scrollY;
});

let section_counter = document.querySelector('.counter-up');
let counters = document.querySelectorAll('.c-counter');

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 90;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
        else {
          counter.innerText = targetNumber;
          if (targetNumber == 14000) {
            counter.innerText = targetNumber + "+";
          }
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.7
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);