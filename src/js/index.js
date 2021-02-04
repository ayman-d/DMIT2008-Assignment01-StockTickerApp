import TickerModel from "./models/ticker";
import httpGetRequest from "./util/single-stock-data";
import ResultsView from "./views/results-view";

window.addEventListener("load", function (e) {
  // const form = document.forms["main-form"];
  // let searchParam;
  // let request;
  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   searchParam = e.currentTarget.ticker.value;
  //   request = httpGetRequest(
  //     `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchParam}&apikey=JGZ55RLK2EQWLJLP`
  //   );

  //   request.then((results) => {
  //     console.log(results["Global Quote"]);
  //   });
  // });

  const model = new TickerModel();
  const ticker = model.search("bb");
  const view = new ResultsView();
  view.renderView(ticker);

  // const request = httpGetRequest(
  //   `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchParam}&apikey=JGZ55RLK2EQWLJLP`
  // );

  // request.then((results) => {
  //   console.log(results["Global Quote"]);
  // });
});
