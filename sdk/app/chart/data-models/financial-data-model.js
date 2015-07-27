var FinancialDataModel = (function () {
    function FinancialDataModel() {
    }
    Object.defineProperty(FinancialDataModel.prototype, "candleStickSourceItems", {
        get: function () {
            return [
                { Date: "01/6/2015", Open: 100, Close: 85, Low: 50, High: 139 },
                { Date: "27/7/2015", Open: 60, Close: 150, Low: 40, High: 159 },
                { Date: "18/8/2015", Open: 120, Close: 81, Low: 45, High: 141 },
                { Date: "19/9/2015", Open: 105, Close: 200, Low: 55, High: 250 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancialDataModel.prototype, "ohlcSourceItems", {
        get: function () {
            return [
                { Date: "20/6/2015", Open: 100, Close: 85, Low: 50, High: 139 },
                { Date: "02/7/2015", Open: 60, Close: 150, Low: 40, High: 159 },
                { Date: "01/8/2015", Open: 120, Close: 81, Low: 45, High: 141 },
                { Date: "01/9/2015", Open: 105, Close: 200, Low: 55, High: 250 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    return FinancialDataModel;
})();
exports.FinancialDataModel = FinancialDataModel;
