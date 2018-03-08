import categoricalDataModelModule = require("../../data-models/categorical-data-model");
import stackedSeriesModel = require("./stacked-area-series-model");
import chartModule = require("nativescript-ui-chart");
import frameModule = require("tns-core-modules/ui/frame");

// >> stacked-series-binding-context
var context = new stackedSeriesModel.ViewModel();
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = context;
}
// << stacked-series-binding-context

export function onNavigatedTo(args) {
    console.log(this.context);
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