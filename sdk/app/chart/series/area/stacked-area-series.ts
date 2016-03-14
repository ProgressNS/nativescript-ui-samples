import categoricalDataModelModule = require("../../data-models/categorical-data-model");
import stackedSeriesModel = require("./stacked-area-series-model");
import chartModule = require("nativescript-telerik-ui-pro/chart");
import frameModule = require("ui/frame");

// >> stacked-series-binding-context
var context = new stackedSeriesModel.ViewModel();
export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = context;
}
// << stacked-series-binding-context

export function onNavigatedTo(args) {
    console.log(this.context);
   context.updateStackMode();
}

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        context = undefined;
    }
}

export function onNoneStackModeSelected(args: any) {
    var chart = <chartModule.RadCartesianChart>frameModule.topmost().getViewById("cartesianChart");
    for (var series in chart.series) {
       series.stackMode = "None";
    }
}

export function onStackModeSelected(args: any) {
        var chart = <chartModule.RadCartesianChart>frameModule.topmost().getViewById("cartesianChart");
    for (var series in chart.series) {
       series.stackMode = "Stack";
    }
}

export function onStack100ModeSelected(args: any) {
        var chart = <chartModule.RadCartesianChart>frameModule.topmost().getViewById("cartesianChart");
    for (var series in chart.series) {
       series.stackMode = "Stack100";
    }
}