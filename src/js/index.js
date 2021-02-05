import TickerController from "./controllers/ticker-controller";
import TickerModel from "./models/ticker";
import ResultsView from "./views/results-view";

window.addEventListener("load", function (e) {
  const model = new TickerModel();
  const view = new ResultsView();
  const controller = new TickerController(model, view);
  // run the controller configUI function to listen for user submission
  controller.configUI();
});
