import { ChampionsLeagueModel } from "./../../view-models/football-stats";
import { Page } from "tns-core-modules/ui/page";

export function onPageLoaded(args) {
    const page = args.object as Page;
    page.bindingContext = new ChampionsLeagueModel();
}