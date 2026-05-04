var input = document.getElementById('searchInput');
var resultsDiv = document.getElementById('searchResults');
var spinner = document.getElementById('spinner');

let searchQuery = function(event) {
    if (event.key === "Enter") {
        resultsDiv.textContent = "";
        if (input.value === "") {
            alert("The search box can't be kept empty!");
            return;
        }
        spinner.classList.toggle("d-none");
        console.log(input.value);
        console.log("Triggered!");
        fetchSearchResults(input.value);
    }
}

function fetchSearchResults(searchKeyword) {
    url = "https://apis.ccbp.in/wiki-search?search=" + searchKeyword;
    options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(result) {
            return result.json();
        })
        .then(function(jsonResult) {
            //Object destructuring
            let {
                search_results
            } = jsonResult;
            for (let result of search_results) {
                extractAndAppendResults(result);
            }
        });
}

function extractAndAppendResults(result) {
    console.log(result);
    let {
        title,
        link,
        description
    } = result;
    spinner.classList.add("d-none");

    //Result-item Div
    let resultDiv = document.createElement('div');
    resultDiv.classList.add("result-item");
    resultsDiv.appendChild(resultDiv);

    //breakElement
    let breakEl = document.createElement('br');
    //title
    let titleEl = document.createElement('a');
    titleEl.classList.add("result-title");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    console.log(titleEl);
    resultDiv.appendChild(titleEl);
    resultDiv.appendChild(breakEl);

    //url
    let linkEl = document.createElement('a');
    linkEl.classList.add("result-url");
    linkEl.textContent = link;
    linkEl.href = link;
    linkEl.target = "_blank";
    console.log(linkEl);
    resultDiv.appendChild(linkEl);

    //description
    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    console.log(descriptionEl);
    resultDiv.appendChild(descriptionEl);
}

input.addEventListener("keydown", searchQuery);