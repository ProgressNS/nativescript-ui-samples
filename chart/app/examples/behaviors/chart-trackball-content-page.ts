import { TemperatureDataModel } from "../data-models/temprature-data-model";
import { TrackballCustomContentData } from 'nativescript-ui-chart';

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new TemperatureDataModel();
}

export function onTrackBallContentRequested(args: TrackballCustomContentData) {
    let selectedItem = args.pointData;
    switch (args.seriesIndex) {
        case 0: args.content = "Bangkok: " + selectedItem.Bangkok; break;
        case 1: args.content = "Paris: " + selectedItem.Paris; break;
        case 2: args.content = "Ulaanbaatar: " + selectedItem.Ulaanbaatar; break;
    }
}