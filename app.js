var inputArea = document.querySelector("#input-text");
var translateBtn = document.querySelector("#btn-translate");
var outputArea = document.querySelector("#output-div");
var flipContainer = document.querySelector(".flip-container");
var btnReset = document.querySelector("#btn-reset");
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
  flipContainer.classList.add("flip-action");
  translateBtn.classList.add("hide");
  btnReset.classList.remove("hide");
    var input = inputArea.value;
    outputArea.innerText = doFetch(urlGenerator(input))
}

function resetFn() {
    flipContainer.classList.remove("flip-action");
    translateBtn.classList.remove("hide");
    btnReset.classList.add("hide");
    outputArea.classList.remove("font-red");
    inputArea.value = "";
  }

translateBtn.addEventListener("click", inputHandler);
btnReset.addEventListener("click", resetFn);