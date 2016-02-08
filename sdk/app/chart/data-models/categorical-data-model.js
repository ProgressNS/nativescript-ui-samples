var CategoricalDataModel = (function () {
    function CategoricalDataModel() {
    }
    Object.defineProperty(CategoricalDataModel.prototype, "categoricalSource", {
        get: function () {
            return [
                { Country: "Germany", Amount: 15, SecondVal: 14 },
                { Country: "France", Amount: 13, SecondVal: 23 },
                { Country: "Bulgaria", Amount: 24, SecondVal: 9 },
                { Country: "Spain", Amount: 5, SecondVal: 19 },
                { Country: "USA", Amount: 18, SecondVal: 8 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalDataModel.prototype, "bubbleCategoricalSource", {
        get: function () {
            return [
                { Country: "Germany", Amount: 15, Impact: 1 },
                { Country: "France", Amount: 13, Impact: 7 },
                { Country: "Bulgaria", Amount: 25, Impact: 10 },
                { Country: "Spain", Amount: 5, Impact: 3 },
                { Country: "USA", Amount: 17, Impact: 4 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalDataModel.prototype, "rangeBarSource", {
        get: function () {
            return [
                { Name: "Groceries", High: 30, Low: 12 },
                { Name: "Tools", High: 135, Low: 124 },
                { Name: "Electronics", High: 55, Low: 12 },
                { Name: "Gardening", High: 50, Low: 29 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    return CategoricalDataModel;
})();
exports.CategoricalDataModel = CategoricalDataModel;
