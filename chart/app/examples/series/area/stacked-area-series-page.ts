import { ViewModel } from "./stacked-area-series-model";
import { topmost } from "tns-core-modules/ui/frame";
import { RadCartesianChart, CategoricalSeries } from "nativescript-ui-chart";

// >> stacked-series-binding-context
const context = new ViewModel();
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = context;
}
// << stacked-series-binding-context

export function onNavigatedTo(args) {
    console.log(this.context);
    context.updateStackMode();
}

export function onNoneStackModeSelected(args: any) {
    const chart = <RadCartesianChart>topmost().getViewById("cartesianChart");
    for (let i = 0; i < chart.series.length; i++) {
        (<CategoricalSeries>chart.series.getItem(i)).stackMode = "None";
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}

export function onStackModeSelected(args: any) {
    const chart = <RadCartesianChart>topmost().getViewById("cartesianChart");
    for (let i = 0; i < chart.series.length; i++) {
        (<CategoricalSeries>chart.series.getItem(i)).stackMode = "Stack";
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}

export function onStack100ModeSelected(args: any) {
    const chart = <RadCartesianChart>topmost().getViewById("cartesianChart");
    for (let i = 0; i < chart.series.length; i++) {
        (<CategoricalSeries>chart.series.getItem(i)).stackMode = "Stack100";
    }

    if (chart.android) {
        chart.android.requestLayout();
    }
}