export class FinancialDataModel {

    constructor() {

    }
    // >> candlestick-data-model
    get candleStickSourceItems() {
        return [
            { Date: "01/6/2015", Open: 100, Close: 85, Low: 50, High: 139 },
            { Date: "27/7/2015", Open: 60, Close: 150, Low: 40, High: 159 },
            { Date: "18/8/2015", Open: 120, Close: 81, Low: 45, High: 141 },
            { Date: "19/9/2015", Open: 105, Close: 200, Low: 55, High: 250 }
        ];
    }// << candlestick-data-model

    // >> ohlc-data-model
    get ohlcSourceItems() {
        return [
            { Date: "20/6/2015", Open: 100, Close: 85, Low: 50, High: 139 },
            { Date: "02/7/2015", Open: 60, Close: 150, Low: 40, High: 159 },
            { Date: "01/8/2015", Open: 120, Close: 81, Low: 45, High: 141 },
            { Date: "01/9/2015", Open: 105, Close: 200, Low: 55, High: 250 }
        ];
    }// << ohlc-data-model

    get getStockData() {
        return [
            { Date: "16/09/2019", Open: 136.29, High: 137.24, Low: 135.30, Close: 135.80 },
            { Date: "17/09/2019", Open: 135.80, High: 136.73, Low: 135.67, Close: 136.31 },
            { Date: "18/09/2019", Open: 136.41, High: 137.07, Low: 135.72, Close: 136.80 },
            { Date: "19/09/2019", Open: 137.00, High: 137.36, Low: 131.61, Close: 132.27 },
            { Date: "20/09/2019", Open: 133.03, High: 133.23, Low: 131.61, Close: 132.27 },
            { Date: "23/09/2019", Open: 131.99, High: 132.89, Low: 131.89, Close: 132.46 },
            { Date: "24/09/2019", Open: 134.01, High: 134.15, Low: 131.50, Close: 131.97 },
            { Date: "25/09/2019", Open: 131.79, High: 133.42, Low: 131.22, Close: 133.09 },
            { Date: "26/09/2019", Open: 133.14, High: 133.30, Low: 129.06, Close: 131.27 },
            { Date: "27/09/2019", Open: 130.10, High: 131.00, Low: 128.92, Close: 129.96 },
            { Date: "30/09/2019", Open: 130.35, High: 130.86, Low: 129.82, Close: 130.32 },
            { Date: "01/10/2019", Open: 130.80, High: 131.78, Low: 129.51, Close: 129.55 },
            { Date: "02/10/2019", Open: 128.51, High: 129.22, Low: 127.57, Close: 129.14 },
            { Date: "03/10/2019", Open: 128.60, High: 129.43, Low: 127.54, Close: 128.15 }
        ];
    }
}

