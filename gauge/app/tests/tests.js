var UiGauge = require("nativescript-ui-gauge").UiGauge;
var uiGauge = new UiGauge();

describe("greet function", function() {
    it("exists", function() {
        expect(uiGauge.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(uiGauge.greet()).toEqual("Hello, NS");
    });
});