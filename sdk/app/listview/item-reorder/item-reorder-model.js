var observable_array_1 = require("data/observable-array");
var names = require("../listview-selection/PhotosWithNames.json");
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
    ViewModel.prototype.onItemReordered = function (args) {
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
        for (var i = 0; i < names.names.length; i++) {
            this._items.push(new DataItem(names.names[i]));
        }
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(name) {
        this.itemName = name;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
