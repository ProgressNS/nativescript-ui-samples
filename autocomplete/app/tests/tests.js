var UiAutocomplete = require("nativescript-ui-autocomplete").UiAutocomplete;
var uiAutocomplete = new UiAutocomplete();

describe("greet function", function() {
    it("exists", function() {
        expect(uiAutocomplete.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(uiAutocomplete.greet()).toEqual("Hello, NS");
    });
});