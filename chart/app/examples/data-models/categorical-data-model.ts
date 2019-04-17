import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";
import { RadCartesianChart, BarSeries } from "nativescript-ui-chart";
let _isFirstLoad = true;
export class CategoricalDataModel extends Observable {
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

        topmost().navigate(navigationEntry);
    }

    public updateStackMode() {
        let index: number = this._stackModes.index;
        let b = this._stackModes.options[index];
        let chart: RadCartesianChart = <RadCartesianChart>(topmost().currentPage.getViewById("cartesianChart"));
        console.log(this._stackModes.options[index]);
        (<BarSeries>chart.series.getItem(0)).stackMode = this._stackModes.options[index];
        (<BarSeries>chart.series.getItem(1)).stackMode = this._stackModes.options[index];
        (<BarSeries>chart.series.getItem(2)).stackMode = this._stackModes.options[index];
        if (_isFirstLoad === false && chart && chart.ios) {
            chart.ios.reloadData();
        }
        _isFirstLoad = false;
    }

    // >> categorical-source
    get categoricalSource() {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21 }
        ];
    }// << categorical-source

    get categoricalSource2() {
        return [
            { Country: "Germany", Amount: 29, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 32, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 33, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 28, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 22, SecondVal: 8, ThirdVal: 21 }
        ];
    }

    get categoricalSource3() {
        return [
            { Country: "Germany", Amount: 35, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 38, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 40, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 36, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 42, SecondVal: 8, ThirdVal: 21 }
        ];
    }


    get bubbleCategoricalSource() {
        return [
            { Country: "Germany", Amount: 15, Impact: 5 },
            { Country: "France", Amount: 13, Impact: 7 },
            { Country: "Bulgaria", Amount: 25, Impact: 10 },
            { Country: "Spain", Amount: 5, Impact: 3 },
            { Country: "USA", Amount: 17, Impact: 9 }
        ];
    }
    // >> range-bar-source
    get rangeBarSource() {

        return [
            { Name: "Groceries", High: 30, Low: 12 },
            { Name: "Tools", High: 135, Low: 124 },
            { Name: "Electronics", High: 55, Low: 12 },
            { Name: "Gardening", High: 50, Low: 29 }
        ];
    }// << range-bar-source
}
