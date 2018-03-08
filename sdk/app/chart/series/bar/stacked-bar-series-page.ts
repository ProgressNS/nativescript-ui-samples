import chartModule = require("nativescript-ui-chart");
import frameModule = require("tns-core-modules/ui/frame");

import dataModelModule = require("../../data-models/categorical-data-model");

var context: dataModelModule.CategoricalDataModel = new dataModelModule.CategoricalDataModel();

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = context;
}

export function onNavigatedTo(args) {
    context.updateStackMode();
}

export function onNoneStackModeSelected(args: any) {
    var chart = <chartModule.RadCartesianChart>frameModule.topmost().getViewById("cartesianChart");
    for (var i = 0; i < chart.series.length; i++) {
        (<chartModule.CategoricalSeries>chart.series.getItem(i)).stackMode = "None";
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}

export function onStackModeSelected(args: any) {
    var chart = <chartModule.RadCartesianChart>frameModule.topmost().getViewById("cartesianChart");
    for (var i = 0; i < chart.series.length; i++) {
        (<chartModule.CategoricalSeries>chart.series.getItem(i)).stackMode = "Stack";
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}

export function onStack100ModeSelected(args: any) {
    var chart = <chartModule.RadCartesianChart>frameModule.topmost().getViewById("cartesianChart");
    for (var i = 0; i < chart.series.length; i++) {
        (<chartModule.CategoricalSeries>chart.series.getItem(i)).stackMode = "Stack100";
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}