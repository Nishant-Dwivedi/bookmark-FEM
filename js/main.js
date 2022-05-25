// nav

const list = document.getElementById('menu-list');
const navMenuBtn = document.getElementById('menu-btn');
const navTop = document.getElementById('nav-top');
const btnImage = document.getElementById('btnImage');
const navLogo = document.getElementById('navLogo');


navMenuBtn.addEventListener('click', () => {
    // hides ul by switching between display flex & display:none (!!!DEPRECATED!! This was setting inline display:none in mobile view and overriding display:none in desktop view became a problem (css doesnt have specificity to override inline style))
    // let newDisplayValue = (list.style.display == 'flex') ? 'none' : 'flex';
    // list.style.display = newDisplayValue;

    let newClass = (list.getAttribute('class')== 'show') ? "hidden" : "show";
    list.setAttribute('class', newClass);




    // changes the background color of top part of the nav to match that of the ul. 
    // when page reloads, the background isnt white even though it looks white(weird css stuff), it's lack of any color kind of white.
    // which is exactly what !navtop.style.backgroundColor is here for. otherwise  "if (navTop.style.background color == white) condition would,ve been sufficient.
    let newNavBackground = (!navTop.style.backgroundColor || navTop.style.backgroundColor == 'white') ? 'hsla(229, 31%, 21%, 95%)' : 'white';
    navTop.style.backgroundColor = newNavBackground;
    // changes btn img from hamburger to 'X'
    let newSrc = (btnImage.getAttribute('src') =='./images/icon-hamburger.svg') ? "./images/icon-close.svg" : './images/icon-hamburger.svg';
    btnImage.setAttribute("src", newSrc)

    // changes dark logo to light logo
    let newLogo = (navLogo.getAttribute('src') == './images/logo-bookmark.svg') ? "./images/logo-white.jpg" : './images/logo-bookmark.svg';
    navLogo.setAttribute("src", newLogo); 
})


// tab

const tabMain = document.getElementsByClassName('tab-main');
const tabMenu = document.getElementsByClassName('tab');

for (let i = 0; i < 3; i++){
    tabMenu[0].children[i].children[0].addEventListener('click', () => {
        for(let j = 0; j < 3; j++) {
            if (i == j){
                tabMain[0].children[j].style.display = 'flex'
                continue;
            }
            tabMain[0].children[j].style.display = 'none'

        }
    })
}

// faqs 

const questions = document.getElementsByClassName('question');
const answers = document.getElementsByClassName('answer');

for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('hidden');
        console.log();
        let arrowNew = questions[i].previousElementSibling.getAttribute('src') == './images/icon-arrow.svg' ? './images/cancel-x.svg' : './images/icon-arrow.svg';
        questions[i].previousElementSibling.setAttribute('src', arrowNew);
        
    })
}