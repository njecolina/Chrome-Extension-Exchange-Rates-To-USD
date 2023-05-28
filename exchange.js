document.addEventListener("DOMContentLoaded", function () {
  const amount = document.getElementById("amount");
  const currency = document.getElementById("currency");
  const convert = document.getElementById("convert");
  const result = document.getElementById("result");

  const apiKey = /* Get your free API key at https://api-ninjas.com/ , remove this comment and put it inside "" here */;
  const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

  convert.addEventListener("click", () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const rate = data.exchange_rate;
        const resultPrice = amountTotal * rate;
        result.innerHTML = `${amountTotal} ${currencyTotal} to USD = ${resultPrice.toFixed(
          2
        )} USD`;
      })
      .catch((error) => {
        console.error("Request failed:", error);
        result.innerHTML = "Error occurred! Please try again!";
      });
  });
});
