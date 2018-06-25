var UiDataform = require("nativescript-ui-dataform").UiDataform;
var uiDataform = new UiDataform();

describe("greet function", function() {
    it("exists", function() {
        expect(uiDataform.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(uiDataform.greet()).toEqual("Hello, NS");
    });
});