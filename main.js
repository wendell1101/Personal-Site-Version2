// Vanilla JS
const navbar = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const wrapper = document.querySelector('.wrapper');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');
const contactBtn = document.querySelector('.contact-btn');

// Initialize Animate on scroll
AOS.init();

// navbar toggle
hamburger.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    sidebar.classList.toggle('sidebar-active');
    // lower the opacity of wrapper if sidebar is active
    wrapper.classList.toggle('wrapper-active');

    logo.style.display = logo.style.display === 'none' ? '' : 'none';
    hamburger.style.marginLeft = hamburger.style.marginLeft === 'auto' ? '' : 'auto';

    if (hamburger.innerHTML !== `<i class="fas fa-times"></i>`) {
        hamburger.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
        hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
    }
}

// navbar fixed

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > navbar.offsetHeight + 150) {
        navbar.classList.add('sticky');
        logo.classList.add('logo-active');
        contactBtn.classList.add('contact-btn-active');

    } else {
        navbar.classList.remove('sticky');
        logo.classList.remove('logo-active');
        contactBtn.classList.remove('contact-btn-active');
    }
}

// JQUERY

$('document').ready(() => {
    // Tilt image
    $('.hero-img').tilt({
        maxTilt: 15,
        glare: true,
        scale: 1,
        maxGlare: .5,
    });
    $('.about-img').tilt({
        maxTilt: 15,
        glare: true,
        scale: 1,
        maxGlare: .5,
    });


    // Project filter categories
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.item-box').show('1000');
        }else{
            $('.item-box').not('.' + value).hide('1000');
            $('.item-box').filter('.' + value).show('1000');
        }
    })

    // add active class on selected item
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

})





