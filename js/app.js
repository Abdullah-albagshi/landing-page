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
const navList = document.querySelector('.navbar__list');
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
    })
}

// Add The Active Class for sections
function addActiveClass(section) {
    section.classList.add('your-active-class')
}


// Get The Section in the view port

function isScrolledInView(section) {
    const { top, bottom } = section.getBoundingClientRect();
    let isVisible;
    //This if is used to make the function mobile friendly 
    if (window.innerWidth >= 450) {
        isVisible = (top + 100 >= 0) && (bottom - 200 <= window.innerHeight);
    } else {
        isVisible = top + 200 < window.innerHeight && bottom >= 0;
    }
    return isVisible;
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav



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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active




window.onscroll = () => getViewed()