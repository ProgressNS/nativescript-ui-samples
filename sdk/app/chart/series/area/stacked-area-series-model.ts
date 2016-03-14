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
     get categoricalSource() {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 5, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21 }
        ]
    } // >> stacked-series-model

}