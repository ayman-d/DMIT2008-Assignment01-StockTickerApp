function TickerController(model, view) {
  this.model = model;
  this.view = view;

  this.configUI = function () {
    // grab the form element
    const form = document.forms["main-form"];

    // add event listener for form submit
    form.addEventListener("submit", this.onHandleSubmit);

    // re-focus on the input field
    form.ticker.focus();
  };

  // submit function will take the current user input and request the object from the model
  // when object is returned, the object will be sent to the view to be rendered
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
