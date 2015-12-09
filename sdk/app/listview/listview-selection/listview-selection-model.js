var observable_array_1 = require("data/observable-array");
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
        for (var i = 0; i < 25; i++) {
            this._items.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(id, name, description) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
