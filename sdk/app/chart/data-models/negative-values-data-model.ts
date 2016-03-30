// >> negative-values-model
export class NegativeValuesDataModel {

    constructor() {

    }

    get negativeValues() {
        return [
            { Period: 1, Amount: 10 },
            { Period: 2, Amount: -10 },
            { Period: 3, Amount: 20 },
            { Period: 4, Amount: -20 },
            { Period: 5, Amount: 30 },
            { Period: 6, Amount: -30 },
            { Period: 7, Amount: 40 },
            { Period: 8, Amount: -40 },
            { Period: 9, Amount: 50 },
            { Period: 10, Amount: -50 }
        ]
    }
}// << negative-values-model