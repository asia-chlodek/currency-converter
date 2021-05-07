let cashElement = document.querySelector(".js-cash");
let currencyOnElement = document.querySelector(".js-currencyOn");
let currencyOffElement = document.querySelector(".js-currencyOff");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let cash = +cashElement.value;
    let currencyOn = +currencyOnElement.value;
    let currencyOff = +currencyOffElement.value;

    let result = cash * currencyOn / currencyOff;
    resultElement.innerText = result.toFixed(2);
});