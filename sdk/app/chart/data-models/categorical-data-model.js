var CategoricalDataModel = (function () {
    function CategoricalDataModel() {
    }
    Object.defineProperty(CategoricalDataModel.prototype, "categoricalSource", {
        get: function () {
            return [
                { Country: "Germany", Amount: Math.random() * 10 },
                { Country: "France", Amount: Math.random() * 10 },
                { Country: "Bulgaria", Amount: Math.random() * 10 },
                { Country: "Spain", Amount: Math.random() * 10 },
                { Country: "USA", Amount: Math.random() * 10 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoricalDataModel.prototype, "bubbleCategoricalSource", {
        get: function () {
            return [
                { Country: "Germany", Amount: Math.random() * 10, Impact: 1 },
                { Country: "France", Amount: Math.random() * 10, Impact: 7 },
                { Country: "Bulgaria", Amount: Math.random() * 10, Impact: 10 },
                { Country: "Spain", Amount: Math.random() * 10, Impact: 3 },
                { Country: "USA", Amount: Math.random() * 10, Impact: 4 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    return CategoricalDataModel;
})();
exports.CategoricalDataModel = CategoricalDataModel;
