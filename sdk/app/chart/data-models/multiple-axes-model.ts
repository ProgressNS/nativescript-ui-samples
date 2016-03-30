export class MultipleAxesDataModel {

    constructor() {

    }

    get rateA() {
        return [
            { Country: "Germany", Amount: 20, SecondVal: 14 },
            { Country: "France", Amount: 15, SecondVal: 23 },
            { Country: "Bulgaria", Amount: 10, SecondVal: 9 },
            { Country: "Spain", Amount: 5, SecondVal: 19 },
            { Country: "USA", Amount: 0, SecondVal: 8 }
        ]
    }

    get rateB() {
        return [
            { Country: "Germany", Amount: 4, SecondVal: 14 },
            { Country: "France", Amount: 3, SecondVal: 23 },
            { Country: "Bulgaria", Amount: 2, SecondVal: 9 },
            { Country: "Spain", Amount: 1, SecondVal: 19 },
            { Country: "USA", Amount: 0, SecondVal: 8 }
        ]
    }
   
   get rateC() {
        return [
            { Country: "Germany", Amount: 16, SecondVal: 14 },
            { Country: "France", Amount: 13, SecondVal: 23 },
            { Country: "Bulgaria", Amount: 12, SecondVal: 9 },
            { Country: "Spain", Amount: 5, SecondVal: 19 },
            { Country: "USA", Amount: 8, SecondVal: 8 }
        ]
    }
    
    get total() {
        return [
            { Country: "Germany", Amount: 40, SecondVal: 14 },
            { Country: "France", Amount: 41, SecondVal: 23 },
            { Country: "Bulgaria", Amount: 24, SecondVal: 9 },
            { Country: "Spain", Amount: 11, SecondVal: 19 },
            { Country: "USA", Amount: 2, SecondVal: 8 }
        ]
    }
}
