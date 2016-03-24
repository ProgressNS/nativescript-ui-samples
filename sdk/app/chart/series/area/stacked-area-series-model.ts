import {ObservableArray} from "data/observable-array";
import chartModule = require("nativescript-telerik-ui-pro/chart");
import observableModule = require("data/observable");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable {

    private _stackModes;

    constructor() {
        super();
      
        this._stackModes = {
            options: ["Stack", "Stack100", "None"],
            index: 0
        };
    }

    public onOptionsTapped() {
        var navigationEntry = {
            moduleName: "/navigation/options-menu/options",
            context: this._stackModes,
            animated: true
        };

        frameModule.topmost().navigate(navigationEntry);
    }
    
     public updateStackMode() {
        var index: number = this._stackModes.index;
        let b = this._stackModes.options[index];
        var chart = <chartModule.RadCartesianChart>frameModule.topmost().currentPage.getViewById("cartesianChart");
        chart.series[0].stackMode = this._stackModes.options[index];
         chart.series[1].stackMode = this._stackModes.options[index];
          chart.series[2].stackMode = this._stackModes.options[index];
        
    }
    // >> stacked-series-model
     get firstSeries() {
        return [
            { Country: "Germany", Amount: 320, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 206, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 100, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 25, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 85, SecondVal: 8, ThirdVal: 21 }
        ]
    }
    
    get secondSeries() {
        return [
            { Country: "Germany", Amount: 120, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 56, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 300, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 95, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 405, SecondVal: 8, ThirdVal: 21 }
        ]
    }
    
    get thirdSeries() {
        return [
            { Country: "Germany", Amount: 96, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 139, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 276, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 300, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 100, SecondVal: 8, ThirdVal: 21 }
        ]
    } // << stacked-series-model

}