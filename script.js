let loading = document.getElementById('loading');
let main = document.getElementById('mainContent');
let loadingPercentage = document.getElementById('loadingPercentage');
let percentage = 0;
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
    console.log(sliderBtn);
    let option1 = document.getElementById('option_1');
    let option2 = document.getElementById('option_2');
    let sliderBtnClicked = function(){
        console.log('triggered!');
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
    document.onclick = function(arg){
        if (arg.target.id !== 'navLinksSmall'
        && arg.target.id !== 'sectionNames'
        && arg.target.id !== 'hamburger'
        && arg.target.id !== 'hamburgerLine'
        && arg.target.id !== 'sectionSliderButton'){
            console.log("close request acquired!");
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

    //MUSIC and WEBDEV Option href
    option_1.addEventListener('click', () => {
        window.location = "#home";
    });
    option_2.addEventListener('click', ()=>{
        window.open('https://www.youtube.com/user/prathyushsunny/');
    });
}, 6);



