import TickerController from "./controllers/ticker-controller";
import TickerModel from "./models/ticker";
import ResultsView from "./views/results-view";

window.addEventListener("load", function (e) {
  const model = new TickerModel();
  const view = new ResultsView();
  const controller = new TickerController(model, view);
  controller.configUI();
});
