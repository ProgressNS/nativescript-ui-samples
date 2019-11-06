import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
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

        Frame.topmost().navigate(navigationEntry);
    }

    public updateStackMode() {
        let index: number = this._stackModes.index;
        let b = this._stackModes.options[index];
        let chart: RadCartesianChart = <RadCartesianChart>(Frame.topmost().currentPage.getViewById("cartesianChart"));
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

    get playersRealMadridData() {
        return [
            { Player: "Thibaut Courtois", Height: 199, Weight: 96 },
            { Player: "Marcelo", Height: 174, Weight: 75 },
            { Player: "Sergio Ramos", Height: 184, Weight: 82 },
            { Player: "Raphael Varane", Height: 191, Weight: 81 },
            { Player: "Daniel Carvajal", Height: 173, Weight: 73 },
            { Player: "Casemiro", Height: 185, Weight: 84 },
            { Player: "Toni Kroos", Height: 183, Weight: 76 },
            { Player: "Luka Modric", Height: 172, Weight: 66 },
            { Player: "Gareth Bale", Height: 185, Weight: 81 },
            { Player: "Karim Benzema", Height: 185, Weight: 81 },
            { Player: "Eden Hazard", Height: 175, Weight: 74 },
        ];
    }

    get playersBarcelonaData() {
        return [
            { Player: "Marc-André ter Stegen", Height: 187, Weight: 85 },
            { Player: "Jordi Alba", Height: 170, Weight: 68 },
            { Player: "Clément Lenglet", Height: 186, Weight: 81 },
            { Player: "Gerard Piqué", Height: 194, Weight: 85 },
            { Player: "Nélson Semedo", Height: 177, Weight: 67 },
            { Player: "Frenkie de Jong", Height: 180, Weight: 74 },
            { Player: "Sergio Busquets", Height: 189, Weight: 76 },
            { Player: "Arthur", Height: 171, Weight: 73 },
            { Player: "Antoine Griezmann", Height: 176, Weight: 73 },
            { Player: "Luis Suárez", Height: 182, Weight: 86 },
            { Player: "Lionel Messi", Height: 170, Weight: 72 }
        ];
    }

    get phoneStorageData() {
        return [
            { Type: "Photos", Value: 2500 },
            { Type: "Music", Value: 2800 },
            { Type: "Games", Value: 1400 },
            { Type: "Videos", Value: 1200 },
            { Type: "Apps", Value: 700 },
            { Type: "Empty", Value: 1400 },
        ];
    }

    get salesData() {
        return [
            { Vendor: "Xiaomi", Q12019: 27.8, Q12018: 28.1 },
            { Vendor: "Apple", Q12019: 42.0, Q12018: 52.2 },
            { Vendor: "Huawei", Q12019: 59.1, Q12018: 39.3 },
            { Vendor: "Samsung", Q12019: 72.0, Q12018: 78.2 }
        ];
    }
}
