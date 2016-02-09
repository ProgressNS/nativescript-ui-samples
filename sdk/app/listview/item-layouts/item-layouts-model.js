var observable_array_1 = require("data/observable-array");
var data = require("./ListItems.json");
debugger;
var ViewModel = (function () {
    function ViewModel() {
        this._words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    }
    Object.defineProperty(ViewModel.prototype, "dataItems", {
        get: function () {
            if (!this._items) {
                this._items = new observable_array_1.ObservableArray();
                for (var i = 0; i < data.items.length; i++) {
                    this._items.push(new DataItem(i, data.items[i].title, data.items[i].author, "res://" + data.items[i].photo));
                }
            }
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "staggeredItems", {
        get: function () {
            if (!this._staggeredItems) {
                this._staggeredItems = new observable_array_1.ObservableArray();
                for (var i = 0; i < data.items.length; i++) {
                    this._staggeredItems.push(new DataItem(i, data.items[i].title, data.items[i].author, "res://" + data.items[i].photo));
                }
            }
            return this._staggeredItems;
        },
        enumerable: true,
        configurable: true
    });
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(id, name, description, image) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
        this.image = image;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
