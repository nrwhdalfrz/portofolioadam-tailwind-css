//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//section
    const text = document.querySelector('.second-text');

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = 'IT Support';
        }, 0);
        setTimeout(() => {
            text.textContent = 'Software Engineer';
        }, 2000);
        setTimeout(() => {
            text.textContent = 'Web Developer';
        }, 4000);
    };

    textLoad();
    setInterval(textLoad, 8000);
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});