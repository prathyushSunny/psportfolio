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
let toggleCursor = document.querySelector('.toggle-custom-cursor-btn');
let isCursorEnabled = true;
let windowCursorCompatibility = true;
setInterval(() => windowCursorCompatibility = window.innerWidth >= 900, 500);
let mouseClicked = false;

// let sendMailBtn = document.querySelector('.send-mail-btn');
// let contactFormContainer = document.querySelector('.send-me-mail-container');
// let contactFormModal = document.querySelector('.mail-modal');
// let contactForm = document.getElementById('contactForm');
// let formSub = document.getElementById('subject');
// let formMsg = document.getElementById('message');
// let formCross = document.querySelector('.modal-cross');
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
    // closeContactForm();
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
            //closing the contact Form            
            // if (arg.target.classList.value === 'send-me-mail-container') closeContactForm();
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
        if (isCursorEnabled && windowCursorCompatibility){
            cursor.style.display = 'block'
            pageY = e.screenY - 114.5;        
            cursor.style.left = (e.pageX-12.5) + 'px';
            cursor.style.top = (e.pageY-12.5) + 'px';
        }
        else cursor.style.display = 'none';
    });
    //Custom cursor disabling on Mouse Hover on different Sections
    mouseInOut = element => {
        if (!mouseClicked && isCursorEnabled && windowCursorCompatibility){
        element.addEventListener('mouseover', () => cursor.classList.add('cursor-close'));
        element.addEventListener('mouseout', () => cursor.classList.remove('cursor-close'));
        }
    }
    toggleCursor.onclick = () => {
        isCursorEnabled = !isCursorEnabled
        if(isCursorEnabled)
        {
            cursor.style.display = 'block';
            toggleCursor.style.background = '#98df87';
            toggleCursor.style.boxShadow = '#98df87 0px 0px 10px';
        }
        else{
            cursor.style.display = 'none';
            toggleCursor.style.background = '#a4a4a4';
            toggleCursor.style.boxShadow = 'none';
        }        
    };
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

    //Contact-me form
    // formSub.addEventListener('keyup', () => localStorage.setItem('formSubject', formSub.value));
    // formMsg.addEventListener('keyup', () => localStorage.setItem('formMessage', formMsg.value));
    // contactForm.addEventListener('submit', (e) => {
    //     e.preventDefault();        
    //     // let contactLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=prathyushsunny@gmail.com&su='+ formSub.value +'&body='+ formMsg.value;
    //     // window.open(contactLink);        
    //     Email.send({
    //         // SecureToken: ' 06c3c214-23c3-47f1-9747-6370eeaf5d63',
    //         Host : "smtp.elasticemail.com",
    //         Username : "prathyushsunny770@gmail.com",
    //         Password : "BD3C826DF5CF66691E9659E7B39DF69A0EFA",
    //         To : 'prathyushsunny@gmail.com',
    //         From : 'prathyushsunny770@gmail.com',
    //         Subject : formSub.value,
    //         Body : formMsg.value
    //     }).then(
    //       message => alert(message)
    //     );
    // })    

    //opening contact form
    // sendMailBtn.onclick = () =>{
    //     formSub.value = localStorage.getItem('formSubject');
    //     formMsg.value = localStorage.getItem('formMessage');
    //     contactFormContainer.style.display = 'flex';
    //     contactFormContainer.classList.remove('hide-mail-container');
    //     contactFormModal.classList.remove('modal-close');
    // }

    //closing contact form
    // function closeContactForm(){
    //     contactFormContainer.classList.add('hide-mail-container');
    //     contactFormModal.classList.add('modal-close');
    //     setTimeout(() => contactFormContainer.style.display = 'none', 400);
    // }
    // formCross.onclick = () => closeContactForm();        
}, 6000);



