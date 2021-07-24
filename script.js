let loading = document.getElementById('loading');
let main = document.getElementById('mainContent');
let loadingPercentage = document.getElementById('loadingPercentage');
let navbar = document.getElementById('navbarDivision');
let percentage = 0;
let cursor = document.querySelector('#cursor');
let projects = document.querySelectorAll('.project-option');
let projdes = document.querySelectorAll('.proj-des-container');
let myWorks = document.querySelector('.contact-me-button');
let navItems = document.querySelectorAll('.nav-item');
let projectImages = document.querySelectorAll('.project-image');
let sidebarOptions = document.querySelectorAll('.option-container');
let navLogo = document.querySelector('.nav-logo');
let contactIcons = document.querySelectorAll('.contacts-icon-container');
let mouseClicked = false;
let pageY = 0;
// console.log(myWorks);
document.body.removeChild(main);

percentageId = setInterval(function() {
    percentage += 1;
    if (percentage > 100) {
        clearInterval(percentageId);
    } else {
        loadingPercentage.textContent = "(Loading... " + percentage + "%)";        
    }   
}, 50);

setTimeout(function() {
    document.body.removeChild(loading);
    document.body.appendChild(main);
    // adding animations to the SLIDER on the left
    var slider = document.getElementById('sectionSlider');
    var sliderBtn = document.getElementById('sectionSliderButton');
    var presentYOffset = 0;
    // console.log(sliderBtn);
    let option1 = document.getElementById('option_1');
    let option2 = document.getElementById('option_2');
    let sliderBtnClicked = function(){
        // console.log('triggered!');
        sliderBtn.classList.toggle('slider-button-animation');
        slider.classList.toggle('slider-open-animation');
        option1.classList.toggle('options-container-show');
        option2.classList.toggle('options-container-show');   
    };
    //hamburger animation
    let hamburger = document.getElementById('hamburger');
    let navGradient = document.getElementById('navGradient');
    let gradientLinks = document.querySelectorAll('.nav-links-small a');    
    hamburger.addEventListener('click', () =>{
        gradientLinks.forEach((link, index) => {            
            link.classList.toggle('nav-links-animation');        
        })        
        hamburger.classList.toggle('cross');
        navGradient.classList.toggle('nav-gradient-show');              
    })
    sliderBtn.addEventListener('click', sliderBtnClicked);

    /*The below snippet is to make sure the navbar and the
    slider closes on clicking on anywhere on the screen
    except for the IDs mentioned in the IF condition*/
    document.onclick = function(arg){                        
            cursor.classList.add('cursor-clicked');            
            mouseClicked = true;
            let setIntId = setInterval(() => {
                cursor.classList.remove('cursor-clicked');
                clearInterval(setIntId);
                mouseClicked = false;
            }, 500);
            if (arg.target.id !== 'navLinksSmall'
            && arg.target.id !== 'sectionNames'
            && arg.target.id !== 'hamburger'
            && arg.target.id !== 'hamburgerLine'
            && arg.target.id !== 'sectionSliderButton'){            
            // console.log("close request acquired!");
            sliderBtn.classList.remove('slider-button-animation');
            slider.classList.remove('slider-open-animation');
            option1.classList.remove('options-container-show');
            option2.classList.remove('options-container-show');
            gradientLinks.forEach((link, index) => {            
                link.classList.remove('nav-links-animation');        
            })
            hamburger.classList.remove('cross');
            navGradient.classList.remove('nav-gradient-show');            
        }
    }    
    //To hide the navbar on scrolling downwards and vice versa
    window.addEventListener('scroll', () => {                  
        cursor.style.top = (window.pageYOffset + pageY) + 'px';               
        if (window.pageYOffset > presentYOffset &&!hamburger.classList.contains('cross')) navbar.classList.add('navbar-hidden');
        else navbar.classList.remove('navbar-hidden');
        presentYOffset = window.pageYOffset;
    })

    //custom cursor
    window.addEventListener('mousemove', e => {
        // cursor.setAttribute('style', 'left: '+e.pageX+'px; top: '+e.pageY+'px;');        
        pageY = e.screenY - 114.5;        
        cursor.style.left = (e.pageX-12.5) + 'px';
        cursor.style.top = (e.pageY-12.5) + 'px';
    });
    //ProjectDescription container mouse hover 
    mouseInOut = element => {
        if (!mouseClicked){
        element.addEventListener('mouseover', () => cursor.classList.add('cursor-close'));
        element.addEventListener('mouseout', () => cursor.classList.remove('cursor-close'));
        }
    }
    projects.forEach(element => {        
        mouseInOut(element);
    });
    projdes.forEach(element => {        
        mouseInOut(element);
    });
    navItems.forEach(element => {        
        mouseInOut(element);
    });
    projectImages.forEach(element => {        
        mouseInOut(element);
    });
    sidebarOptions.forEach(element => {        
        mouseInOut(element);
    });
    contactIcons.forEach(element => {        
        mouseInOut(element);
    });
    mouseInOut(myWorks);
    mouseInOut(hamburger);
    mouseInOut(sliderBtn);
    mouseInOut(navLogo);

    //MUSIC and WEBDEV Option href
    option_1.addEventListener('click', () => {
        window.location = "#projects";
    });
    option_2.addEventListener('click', ()=>{
        window.open('https://www.youtube.com/user/prathyushsunny/');
    });
}, 0);



