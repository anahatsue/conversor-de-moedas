var dolar = 5.06;
var can = 3.80;
var euro = 5.55;
var pound = 6.26;
var bitcoin = 119859.33;

const dolarTheme = document.querySelector("#dolar");
const canTheme = document.querySelector("#can");
const euroTheme = document.querySelector("#euro");
const poundTheme = document.querySelector("#pound");
const bitcoinTheme = document.querySelector("#bitcoin");

var currencyValue = dolar;

dolarTheme.addEventListener("click", (event) => {
    document.body.setAttribute("theme", "dolar");
    currencyValue = dolar;
    run();
})

canTheme.addEventListener("click", (event) => {
    document.body.setAttribute("theme", "can");
    currencyValue = can;
    run();
})

euroTheme.addEventListener("click", (event) => {
    document.body.setAttribute("theme", "euro");
    currencyValue = euro;
    run();
})

poundTheme.addEventListener("click", (event) => {
    document.body.setAttribute("theme", "pound");
    currencyValue = pound;
    run();
})

bitcoinTheme.addEventListener("click", (event) => {
    document.body.setAttribute("theme", "bitcoin");
    currencyValue = bitcoin;
    run();
})

const inputText = document.querySelector("#input-text");

inputText.addEventListener("input", (event) => {
    run();
})

const convert = (inputValue, currencyValue) => {
    var convertValue = inputValue * currencyValue;
    console.log(convertValue);
    return convertValue;
}

const output = document.querySelector("#output-text");
const outputText = (converted) => {
    output.textContent = "";
    output.textContent = `${converted}`;
}

const run = () => {
    var convertedmessage = convert(inputText.value, currencyValue);
    outputText(convertedmessage.toFixed(2));
}