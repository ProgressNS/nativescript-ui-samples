var observable_array_1 = require("data/observable-array");
var timer = require("timer");
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
    ViewModel.prototype.onLoadMoreItemsRequested = function (args) {
        console.log("Event fired");
        var that = new WeakRef(this);
        timer.setTimeout(function () {
            for (var i = 0; i < 25; i++) {
                that.get()._items.push(new DataItem(that.get()._items.length, "Item " + that.get()._items.length, "This is item description."));
            }
            var listView = args.object;
            listView.didLoadDataOnDemand();
        }, 1000);
        args.returnValue = true;
    };
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
