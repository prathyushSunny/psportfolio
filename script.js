let loading = document.getElementById('loading');
let main = document.getElementById('mainContent');
let loadingPercentage = document.getElementById('loadingPercentage');
let loadingPercentageMd = document.getElementById('loadingPercentageMd');
console.log(loadingPercentageMd);
let percentage = 0;
document.body.removeChild(main);

percentageId = setInterval(function() {
    percentage += 1;
    if (percentage > 100) {
        clearInterval(percentageId);
    } else {
        loadingPercentage.textContent = "(Loading... " + percentage + "%)";
        loadingPercentageMd.textContent = "(Loading... " + percentage + "%)";    
    }   
}, 50);

setTimeout(function() {
    document.body.removeChild(loading);
    document.body.appendChild(main);
}, 6200);