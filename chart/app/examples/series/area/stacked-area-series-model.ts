import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { RadCartesianChart, CategoricalSeries } from "nativescript-ui-chart";
let _isFirstLoad = true;
export class ViewModel extends Observable {
    private _stackModes;

    constructor() {
        super();

        this._stackModes = {
            options: ["Stack", "Stack100", "None"],
            index: 0
        };
    }

    public onOptionsTapped() {
        const navigationEntry = {
            moduleName: "navigation/options-menu/options-page",
            context: this._stackModes,
            animated: true
        };

        Frame.topmost().navigate(navigationEntry);
    }

    public updateStackMode() {
        let index: number = this._stackModes.index;
        let b = this._stackModes.options[index];
        let chart: RadCartesianChart = <RadCartesianChart>(Frame.topmost().currentPage.getViewById("cartesianChart"));
        console.log(this._stackModes.options[index]);
        (<CategoricalSeries>chart.series.getItem(0)).stackMode = this._stackModes.options[index];
        (<CategoricalSeries>chart.series.getItem(1)).stackMode = this._stackModes.options[index];
        (<CategoricalSeries>chart.series.getItem(2)).stackMode = this._stackModes.options[index];
        if (_isFirstLoad === false && chart && chart.ios) {
            chart.ios.reloadData();
        }
        _isFirstLoad = false;


    }
    // >> stacked-series-model
    get firstSeries() {
        return [
            { Country: "Germany", Amount: 320, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 206, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 100, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 25, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 85, SecondVal: 8, ThirdVal: 21 }
        ];
    }

    get secondSeries() {
        return [
            { Country: "Germany", Amount: 120, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 56, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 300, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 95, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 405, SecondVal: 8, ThirdVal: 21 }
        ];
    }

    get thirdSeries() {
        return [
            { Country: "Germany", Amount: 96, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 139, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 276, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 300, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 100, SecondVal: 8, ThirdVal: 21 }
        ];
    } // << stacked-series-model

}