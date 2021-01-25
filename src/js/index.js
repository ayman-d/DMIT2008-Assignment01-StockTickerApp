import httpGetRequest from "./util/single-stock-data";

window.addEventListener("load", function (e) {
  const form = document.forms["main-form"];
  let searchParam;
  let request;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    searchParam = e.currentTarget.ticker.value;
    request = httpGetRequest(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchParam}&apikey=JGZ55RLK2EQWLJLP`
    );

    request.then((results) => {
      console.log(results["Global Quote"]);
    });
  });

  // const request = httpGetRequest(
  //   `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchParam}&apikey=JGZ55RLK2EQWLJLP`
  // );

  // request.then((results) => {
  //   console.log(results["Global Quote"]);
  // });
});
