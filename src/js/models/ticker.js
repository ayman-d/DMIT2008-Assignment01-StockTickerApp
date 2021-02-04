function TickerModel() {
  this.baseURL = "https://www.alphavantage.co/query";
  this.functionParam = "GLOBAL_QUOTE";
  this.apikey = "JGZ55RLK2EQWLJLP";

  this.search = async function (tickerSymbol) {
    let url = new URL(this.baseURL + "?");

    const params = new URLSearchParams();
    params.set("function", this.functionParam);
    params.set("symbol", tickerSymbol);
    params.set("apikey", this.apikey);

    url = url + params;

    const req = await fetch(url);
    const res = await req.json();
    // console.log(res["Global Quote"]);
    return res["Global Quote"];
  };

  return this;
}

export default TickerModel;
