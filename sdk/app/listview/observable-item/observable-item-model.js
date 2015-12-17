var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var observable_array_1 = require("data/observable-array");
var observable_1 = require("data/observable");
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
    ViewModel.prototype.onUpdatePropertyClick = function (args) {
        this._items.getItem(2).itemName = "Updated item name";
        this._items.getItem(2).itemDescription = "Updated item description";
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function (_super) {
    __extends(DataItem, _super);
    function DataItem(id, name, description) {
        _super.call(this, undefined);
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
    Object.defineProperty(DataItem.prototype, "itemName", {
        get: function () {
            return this.get("name");
        },
        set: function (value) {
            this.set("name", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataItem.prototype, "itemDescription", {
        get: function () {
            return this.get("description");
        },
        set: function (value) {
            this.set("description", value);
        },
        enumerable: true,
        configurable: true
    });
    return DataItem;
})(observable_1.Observable);
exports.DataItem = DataItem;
