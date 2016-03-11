
export class CategoricalDataModel  {
    constructor() {

    }
// >> categorical-source
    get categoricalSource() {
        return [
            { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24 },
            { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23 },
            { Country: "Spain", Amount: 5, SecondVal: 19, ThirdVal: 24 },
            { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21 }
        ]
    }
// << categorical-source

    get bubbleCategoricalSource() {
        return [
            { Country: "Germany", Amount: 15, Impact: 1 },
            { Country: "France", Amount: 13, Impact: 7 },
            { Country: "Bulgaria", Amount: 25, Impact: 10 },
            { Country: "Spain", Amount: 5, Impact: 3 },
            { Country: "USA", Amount: 17, Impact: 4 }
        ];
    }
   // >> range-bar-source
    get rangeBarSource () {
        
           return [
            { Name: "Groceries", High: 30, Low: 12 },
            { Name: "Tools", High: 135, Low: 124 },
            { Name: "Electronics", High: 55, Low: 12 },
            { Name: "Gardening", High: 50, Low: 29 }
        ];
    }   
    // >> range-bar-source 
}
