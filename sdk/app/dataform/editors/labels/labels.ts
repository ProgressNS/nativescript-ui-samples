import viewModel = require("./../../view-models/football-stats");
import { Page } from "tns-core-modules/ui/page";

export function onPageLoaded(args) {
    var page = args.object as Page;
    page.bindingContext = new viewModel.ChampionsLeagueModel();
}