import SplitTextJS from './SplitTextJS.js';
/* const scrollUpIcon = document.getElementById('scroll-up');


window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollUpIcon.classList.add('show');
    } else {
        scrollUpIcon.classList.remove('show');
    }
}); */

const titles = gsap.utils.toArray("p");
const t1 = gsap.timeline();
titles.forEach((title, i) => {
    const splitTitle = new SplitTextJS(title);
    t1
        .from(splitTitle.chars, {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
        }, "<")
        .from(splitTitle.chars, {
            duration: 1,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
        }, ">");
    });