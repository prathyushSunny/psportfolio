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
    sliderBtn.onclick = function(){
    console.log('triggered!');
    sliderBtn.classList.toggle('slider-button-animation');
    slider.classList.toggle('slider-open-animation');
    option1.classList.toggle('options-container-show');
    option2.classList.toggle('options-container-show');
}
}, 6200);



