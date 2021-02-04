function TickerModel() {
  // define the base url, the function, apikey parameters
  this.baseURL = "https://www.alphavantage.co/query";
  this.functionParam = "GLOBAL_QUOTE";
  this.apikey = "JGZ55RLK2EQWLJLP";

  this.search = async function (tickerSymbol) {
    let url = new URL(this.baseURL + "?");

    // add required parameters to the URL variable
    const params = new URLSearchParams();
    params.set("function", this.functionParam);
    params.set("symbol", tickerSymbol);
    params.set("apikey", this.apikey);

    url = url + params;

    // fetch the data from API asynchronously
    const req = await fetch(url);
    const res = await req.json();
    // since this is a complex object, return only the "Global Quote" JSON object from the returned data
    return res["Global Quote"];
  };

  return this;
}

export default TickerModel;
