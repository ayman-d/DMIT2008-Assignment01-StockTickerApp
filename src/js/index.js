import httpGetRequest from "./util/single-stock-data";

window.addEventListener("load", function (e) {
  const request = httpGetRequest(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=JGZ55RLK2EQWLJLP"
  );

  request.then((results) => {
    console.log(results);
  });
});
