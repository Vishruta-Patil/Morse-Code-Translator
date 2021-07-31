var inputArea = document.querySelector(".input-container");
var translateBtn = document.querySelector(".translate-btn");
var outputArea = document.querySelector(".output-container");

var serverUrl = "https://api.funtranslations.com/translate/morse.json";

function urlGenerator(text) {
    return serverUrl + "?text=" + text;
}

function doFetch(url) {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputArea.innerText = translatedText;
    } )
}


function inputHandler() {
     var input = inputArea.value;
    outputArea.innerText = doFetch(urlGenerator(input))
}

translateBtn.addEventListener("click", inputHandler);