function TickerController(model, view) {
  this.model = model;
  this.view = view;

  this.configUI = function () {
    const form = document.forms["main-form"];

    form.addEventListener("submit", this.onHandleSubmit);

    form.ticker.focus();
  };

  this.onHandleSubmit = (e) => {
    e.preventDefault();
    const tickerSymbol = e.currentTarget.ticker.value;

    const model = this.model.search(tickerSymbol);
    this.view.renderView(model);
    e.currentTarget.ticker.focus();
  };

  return this;
}

export default TickerController;
