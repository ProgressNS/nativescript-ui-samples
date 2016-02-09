export class ScatterDataModel  {
    constructor() {
    }

    get scatterSource() {
        return [
            { Age: 20, Salary: 10000, Spendings: 4500, Savings: 5500 },
            { Age: 25, Salary: 12300, Spendings: 6500, Savings: 5200 },
            { Age: 30, Salary: 14000, Spendings: 8500, Savings: 5500 },
            { Age: 35, Salary: 18000, Spendings: 9500, Savings: 7500 },
            { Age: 40, Salary: 19520, Spendings: 15540, Savings: 3800 },
            { Age: 45, Salary: 20000, Spendings: 15500, Savings: 4500 },
            { Age: 50, Salary: 24200, Spendings: 20500, Savings: 3700 },
            { Age: 55, Salary: 24000, Spendings: 22500, Savings: 1500 },
            { Age: 60, Salary: 22000, Spendings: 22500, Savings: 500 },
            { Age: 65, Salary: 20000, Spendings: 20500, Savings: 0 }
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
