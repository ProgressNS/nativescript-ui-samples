export class ScatterDataModel  {
    constructor() {
    }

    get scatterSource() {
        return [
            { Age: 20, Salary: 10000 },
            { Age: 25, Salary: 12300 },
            { Age: 30, Salary: 14000 },
            { Age: 35, Salary: 18000 },
            { Age: 40, Salary: 19520 },
            { Age: 45, Salary: 20000 },
            { Age: 50, Salary: 24200 },
            { Age: 55, Salary: 24000 },
            { Age: 60, Salary: 22000 },
            { Age: 65, Salary: 20000 }
        ];
    }

    get scatterBubbleSource() {
        return [
            { Country: "Germany", xValue: 23, yValue: 23, Impact: 1 },
            { Country: "France", xValue: 26, yValue: 45, Impact: 7 },
            { Country: "Bulgaria", xValue: 29, yValue: 45.6, Impact: 10 },
            { Country: "Spain", xValue: 34, yValue: 78, Impact: 3 },
            { Country: "USA", xValue: 45, yValue: 87, Impact: 4 }
        ];
    }
}
