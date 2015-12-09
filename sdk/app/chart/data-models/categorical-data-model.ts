
export class CategoricalDataModel  {
    constructor() {

    }

    get categoricalSource() {
        return [
            { Country: "Germany", Amount: Math.random() * 10,  SecondVal: Math.random() * 10 },
            { Country: "France", Amount: Math.random() * 10 ,  SecondVal: Math.random() * 10 },
            { Country: "Bulgaria", Amount: Math.random() * 10 ,  SecondVal: Math.random() * 10 },
            { Country: "Spain", Amount: Math.random() * 10 ,  SecondVal: Math.random() * 10 },
            { Country: "USA", Amount: Math.random() * 10 ,  SecondVal: Math.random() * 10 }
        ]
    }

    get bubbleCategoricalSource() {
        return [
            { Country: "Germany", Amount: Math.random() * 10, Impact: 1 },
            { Country: "France", Amount: Math.random() * 10, Impact: 7 },
            { Country: "Bulgaria", Amount: Math.random() * 10, Impact: 10 },
            { Country: "Spain", Amount: Math.random() * 10, Impact: 3 },
            { Country: "USA", Amount: Math.random() * 10, Impact: 4 }
        ];
    }
}
