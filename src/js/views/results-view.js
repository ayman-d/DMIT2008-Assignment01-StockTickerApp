import ejs from "ejs";

// template to be used for successful data retrieval
const resultsView = `
    <aside class="info-aside">
        <h2>Stock Ticker Info</h2>
        <span class="symbol"> <%=ticker["01. symbol"]%> </span>  
        <span class="currency"> USD </span><span class="money"> <%=price%>  </span>  
        <span class="smalltext"> closed on </span> <span class="date"> <%=ticker["07. latest trading day"]%></span>
        </br>
        <span class="smalltext">last close </span> <span class="currency"> USD </span> <span> <%=lastPrice%> </span>
        </br>
        <i class="fas fa-arrow-<%=arrow%> <%=color%>"></i>
        <span class="change <%=color%>"> <%=sign%><%=ticker["09. change"]%> </span>
        <span class="change <%=color%>""> <%=sign%><%=ticker["10. change percent"] %> </span>
    </aside>
`;

// template to use when no results are returned based on user input
const noResultsView = `
    <aside class="error-aside">
        <h2>! No Data Found</h2>
        <p>no results found for the provided ticker symbol</p>
    </aside>
`;

// template to use when no input is provided from the user
const noInputView = `
    <aside class="error-aside">
        <h2>! Missing Input</h2>
        <p>Please enter a value in the search box</p>
    </aside>
`;

function ResultsView() {
  // the main container of the results view
  this.container = document.querySelector(".info-area");

  // function that takes in the returned object from the API and renders it to the DOM
  this.renderView = function (obj) {
    const tickerElement = obj.then((ticker) => {
      // display no-input error if object is null or undefined
      if (ticker === null || ticker === undefined) {
        this.clearPage();
        const elem = ejs.render(noInputView);
        this.container.insertAdjacentHTML("afterbegin", elem);
      } else {
        // check if no objects returned based on user input
        Object.keys(ticker).length === 0
          ? this.showNoResult()
          : this.showResult(ticker);
      }
    });

    // show successful result template
    this.showResult = function (ticker) {
      this.clearPage();
      let color, sign, arrow, price, lastPrice;

      ticker["09. change"] >= 0 ? (color = "green") : (color = "red");
      ticker["09. change"] >= 0 ? (sign = "+") : (sign = "");
      ticker["09. change"] >= 0 ? (arrow = "up") : (arrow = "down");
      price = parseFloat(ticker["05. price"]).toFixed(2);
      lastPrice = parseFloat(ticker["08. previous close"]).toFixed(2);
      const elem = ejs.render(resultsView, {
        ticker,
        color,
        sign,
        arrow,
        price,
        lastPrice,
      });
      this.container.insertAdjacentHTML("afterbegin", elem);
    };

    // show no result template
    this.showNoResult = function () {
      this.clearPage();
      const elem = ejs.render(noResultsView);
      this.container.insertAdjacentHTML("afterbegin", elem);
    };

    // method to clear page, used before any new request is made
    this.clearPage = function () {
      this.container.querySelectorAll("aside").forEach((ticker) => {
        this.container.removeChild(ticker);
      });
    };
  };

  return this;
}

export default ResultsView;
