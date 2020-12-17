/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// Remove The Active Class for sections
function removeActiveClass() {
    sections.forEach((section) => {
        section.classList.remove('your-active-class')
        activeSectionIndex = section.dataset.nav.split(' ')[1]
        navList.childNodes[activeSectionIndex - 1].classList.remove('list-active-class')

    })

}

console.log();
// Add The Active Class for sections
function addActiveClass(section) {
    section.classList.add('your-active-class')
    activeSectionIndex = section.dataset.nav.split(' ')[1]
    navList.childNodes[activeSectionIndex - 1].classList.add('list-active-class')
}

// Get The Section in the view port

function isScrolledInView(section) {
    // the code and method below returns the position of each section relative to viewport
    const { top, bottom } = section.getBoundingClientRect()

    let isVisible
        //This if is used to make the function mobile friendly 
    if (window.innerWidth >= 450) {
        /*
        ///Explaining the condition of this code
        ///scrolling up
        when the top(start) of section + 100px is in viewport then it will add the active class to section you scrolling to
        
        ///scrolling down 
        when the bottom(end) of section is not visible by 200px in viewport then it will add the active class to section you scrolling to
        */
        isVisible = (top + 100 >= 0) && (bottom - 200 <= window.innerHeight)
    } else {
        isVisible = top + 200 < window.innerHeight && bottom >= 0
    }
    return isVisible;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

const buildNav = () => {
    sections.forEach((section) => {
        let secId = section.id
        let secData = section.dataset.nav
        navList.innerHTML += `<li><a class="menu__link" href="#${secId}">${secData}</a></li>`
    })
}

// Add class 'active' to section when near top of viewport

function getViewed() {
    let oldSection
    sections.forEach((section) => {
        (section.className) ? oldSection = section: null;
        if (isScrolledInView(section) && oldSection != section) {
            removeActiveClass()
            addActiveClass(section)
        }
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Set sections as active
// window will event handle onscroll event 
// every time you scroll getViewed will be called
window.onscroll = () => getViewed()

// calling build function to build the list tags
buildNav()