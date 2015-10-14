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
    ViewModel.prototype.onAddItemClick = function (args) {
        var id = Math.round(Math.random() * 100);
        this._items.push(new DataItem(id, "This is a new item: " + id, "This is the new item's description."));
    };
    ViewModel.prototype.onResetClick = function (args) {
        while (this._items.length) {
            this._items.pop();
        }
    };
    ViewModel.prototype.onUpdateItemClick = function (args) {
        for (var index = 0; index < this._items.length; index++) {
            this._items.setItem(index, new DataItem(Math.round(Math.random() * 100), "This is an updated item", "This is the updated item's description."));
        }
    };
    ViewModel.prototype.onRemoveItemClick = function (args) {
        this._items.splice(2, 1);
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
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
