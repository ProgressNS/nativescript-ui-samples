var observable_array_1 = require("data/observable-array");
var ViewModel = (function () {
    function ViewModel() {
        this._words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    }
    Object.defineProperty(ViewModel.prototype, "dataItems", {
        get: function () {
            if (!this._items) {
                this._items = new observable_array_1.ObservableArray();
                for (var i = 0; i < 10; i++) {
                    this._items.push(new DataItem(i, "Item " + i, "This is item description."));
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
                for (var i = 0; i < 50; i++) {
                    this._staggeredItems.push(new DataItem(i, "Item " + i, this.getRandomLengthString()));
                }
            }
            return this._staggeredItems;
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.getRandomLengthString = function () {
        var sentenceLength = Math.round((Math.random() * 15));
        var result = this._words[0];
        for (var i = 0; i < sentenceLength; i++) {
            result += (this._words[i % this._words.length] + " ");
        }
        return result;
    };
    ViewModel.prototype.initStaggeredLayoutItems = function () {
        this._staggeredItems = new observable_array_1.ObservableArray();
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
