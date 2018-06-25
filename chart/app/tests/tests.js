var UiChart = require("nativescript-ui-chart").UiChart;
var uiChart = new UiChart();

describe("greet function", function() {
    it("exists", function() {
        expect(uiChart.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(uiChart.greet()).toEqual("Hello, NS");
    });
});