var observable_array_1 = require("data/observable-array");
var json = require("./PhotosWithNames.json");
var ViewModel = (function () {
    function ViewModel() {
        this.initDataItems();
    }
    Object.defineProperty(ViewModel.prototype, "dataItems", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
        for (var i = 0; i < json.names.length; i++) {
            this._items.push(new DataItem(json.names[i], json.emails[i]));
        }
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(name, email) {
        this.itemName = name;
        this.itemEmail = email;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
