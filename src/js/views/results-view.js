import ejs from "ejs";

const resultsView = `
    <aside class="info-aside">
        <h2>Stock Ticker Info</h2>
        <p>Symbol: <%=ticker["01. symbol"] %></p>
        <p>Closing Price: $<%=ticker["05. price"]%></p>
        <p>Previous Closing: $<%=ticker["08. previous close"]%></p>
        <p>Current Date (GMT): <%=ticker["07. latest trading day"]%></p>
        <p>Change: <%=ticker["09. change"]%></p>
        <p>Change percent(%): <%=ticker["10. change percent"]%></p>
    </aside>
`;

const noResultsView = `
    <aside class="info-aside">
        <h2>Stock Ticker Info</h2>
        <p>no results found for the provided ticker symbol</p>
    </aside>
`;

function ResultsView() {
  this.container = document.querySelector(".info-area");

  this.renderView = function (obj) {
    const tickerElement = obj.then((ticker) => {
      if (Object.keys(ticker).length === 0) {
        const elem = ejs.render(noResultsView);
        this.container.insertAdjacentHTML("afterbegin", elem);
      } else {
        const elem = ejs.render(resultsView, { ticker });
        this.container.insertAdjacentHTML("afterbegin", elem);
      }
    });
  };

  return this;
}

export default ResultsView;
