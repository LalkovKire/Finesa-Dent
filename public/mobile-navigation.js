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